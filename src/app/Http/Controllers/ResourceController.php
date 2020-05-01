<?php

namespace Admini\app\Http\Controllers;

use Illuminate\Routing\Controller;
use Admini\app\Http\Requests\ResourceRequest;

use Illuminate\Support\Arr;

class ResourceController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function dashboard()
    {
        return view('admini::dashboard');
    }

    public function index(ResourceRequest $request)
    {
      try {
        $resource = $request->newResource();

        return response()->json([
          'title' => $resource->title(),
          'searchable' => $resource->search(),
          'entries' => $resource->buildQuery($request)->paginate($resource->perPage()),
          'columns' => $resource->columns(),
          'filters' => $resource->filters()
        ]);
      }
      catch(\Exception $e){
        return response()->json([
            'message' => $e->getMessage(),
            'type' => 'is-danger'
        ]);
      }
    }

    // public function related(ResourceRequest $request)
    // {
    //   $relatedResource = $request->resource($request->relation);
    //
    //   return response()->json($relatedResource::relatedEntries($request->id,$request->resource));
    // }

    public function create(ResourceRequest $request)
    {
      $resource = $request->newResource();

      return response()->json([
          'title' => $resource->title(),
          'entry' => $resource->entryFields(),
          'fields' => $resource->getFields(),
      ]);
    }

    public function store(ResourceRequest $request)
    {
        $resource = $request->newResource();
        $resourceClass = $request->resourceClass();
        $request = resolve($resource->requestName());
        $entry_id = $resourceClass::createEntry($request->all());

        if($entry_id) {
          return response()->json([
              'message' => 'Entry created',
              'type' => 'is-success',
              'entry_id' => $entry_id,
              'validated' => json_encode($request->validated())
          ]);
        }
        else {
          return response()->json([
              'message' => 'Entry could not be created',
              'type' => 'is-danger'
          ]);
        }
    }

    public function view(ResourceRequest $request)
    {
      $resource = $request->newResource();

      return response()->json([
          'title' => $resource->title(),
          'entry' => $resource->entryFields($request->id),
          'fields' => $resource->getFields(),

      ]);
    }

    public function update(ResourceRequest $request)
    {
      try{
        $resourceClass = $request->resourceClass();
        $result = $resourceClass::entry($request->id)->update($request->all());
        if($result) {
          return response()->json([
              'message' => 'Entry updated',
              'type' => 'is-success'
          ]);
        }
        else {
          return response()->json([
              'message' => 'Entry could not be updated',
              'type' => 'is-danger'
          ]);
        }
      }
      catch(\Exception $e){
        return response()->json([
            'message' => $e->getMessage(),
            'type' => 'is-danger'
        ]);
      }
    }

    public function delete(ResourceRequest $request)
    {
      try{
        $resourceClass = $request->resourceClass();
        $result = $resourceClass::entry($request->id)->delete();
        if($result) {
          return response()->json([
              'message' => 'Entry deleted',
              'type' => 'is-success'
          ]);
        }
        else {
          return response()->json([
              'message' => 'Entry could not be deleted',
              'type' => 'is-danger'
          ]);
        }
      }
      catch(\Exception $e){
        return response()->json([
            'message' => $e->getMessage(),
            'type' => 'is-danger'
        ]);
      }
    }

    public function forceDelete(ResourceRequest $request)
    {
      try{
        $resourceClass = $request->resourceClass();
        $result = $resourceClass::entry($request->id)->forceDelete();
        if($result) {
          return response()->json([
              'message' => 'Entry permanently deleted',
              'type' => 'is-success'
          ]);
        }
        else {
          return response()->json([
              'message' => 'Entry could not be permanently deleted',
              'type' => 'is-danger'
          ]);
        }
      }
      catch(\Exception $e){
        return response()->json([
            'message' => $e->getMessage(),
            'type' => 'is-danger'
        ]);
      }
    }
}
