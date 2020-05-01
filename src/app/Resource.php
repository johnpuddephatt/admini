<?php

namespace Admini\app;

use Illuminate\Support\Str;
use Illuminate\Support\Arr;
use Illuminate\Database\Eloquent\Builder;
abstract class Resource
{
  // public $resource;

  public $query;

  function __construct()
  {
      $this->query = "";
  }

  public static function title()
  {
      return static::$title;
  }

  public static function model()
  {
      return static::$model;
  }

  public static function perPage()
  {
      return static::$perPage ?? 10;
  }

  public static function search()
  {
      return static::$search ?? null;
  }

  public static function requestName()
  {
      return static::$requestName ?? 'Illuminate\Foundation\Http\FormRequest';
  }

  public static function filters() {
    return null;
  }

  public static function defaultColumns() {
    return [ 'id', 'deleted_at' ];
  }

  static function uriKey()
  {
      return Str::plural(Str::snake(class_basename(get_called_class()), '-'));
  }

  public static function fieldNames()
  {
    return Arr::pluck(static::fields(),'name');
  }

  // public function groupedFields() {
  //   return collect($this->fields())->groupBy(['tab','fieldset']);
  // }

  public function getFields() {
    return collect($this->fields());
  }

  public static function columnNames()
  {
    return Arr::pluck(static::columns(),'name');
  }

  public function buildQuery($request) {
    $this->selectColumns()
         ->applySearch($request->query('s'))
         ->applyFilters($request->query('filter'))
         ->sort($request->query('order_by'),$request->query('order'));
    return $this->indexQuery;
  }

  public function selectColumns() {
    $model = static::model();
    $columns = array_merge(static::defaultColumns(), static::columnNames());
    $this->indexQuery = $model::select($columns);
    return $this;
  }

  public function sort($orderBy, $order) {
    $this->indexQuery->orderBy($orderBy, $order);
    return $this;
  }

  public function applyFilters($filters) {
    if(!$filters) return $this;

    // @todo: check if this filter name matches column in db?

    foreach ($filters as $filter => $values) {

      $currentFilter = Arr::first($this->filters(), function ($value, $key) use ($filter) {
          return $value['name'] == $filter;
      });

      if(!$currentFilter) return null;

      if(isset($currentFilter['scope'])) {
        $this->indexQuery->$filter($this->indexQuery, (json_decode($values) ?? $values));
      }

      else {
        $this->indexQuery->whereIn($filter,explode(',', (json_decode($values) ?? $values)));
      }

    }
    return $this;
  }

  public function applySearch($queryTerm) {
    if($queryTerm && static::search()) {
      $this->indexQuery->where(function ($query) use ($queryTerm) {
        foreach(static::search() as $searchableColumn) {
          $query->orWhere($searchableColumn, 'like', '%' . $queryTerm .'%');
        }
      });
    }
    return $this;
  }

  public static function findEntry($id) {
    $model = static::model();
    return $model::find($id);
  }

  public static function createEntry($data) {
    $model = static::model();
    return $model::create($data)->id;
  }

  public static function entryFields($id = null) {
    $fields = static::fields();
    $model = static::model();
    $entryData = $id ? $model::select(static::fieldNames())->find($id) : null;

    $fieldsWithValues = array_map(function($field) use ($entryData){
      $fieldName = $field['name'];
      $field['value'] = $entryData ? $entryData->$fieldName : null;
      return $field;
    },$fields);

    $fieldsWithValues = Arr::pluck($fieldsWithValues, 'value', 'name');

    return $fieldsWithValues;
  }

  // public static function relatedEntries($id, $resource) {
  //   $model = static::model();
  //   return $model::has('posts')->get();
  //
  //   return $model::whereHas('Posts', function (Builder $query) use ($id){
  //     $query->where('id', '=', $id);
  //   })->get();
  // }
}
