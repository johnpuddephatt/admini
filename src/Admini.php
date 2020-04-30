<?php

namespace Admini;

class Admini
{
  /**
   * The registered resource names.
   *
   * @var array
   */
  public static $resources = [
    'App\Admini\Post',
    'App\Admini\User'
  ];

  /**
   * Get the resource class name for a given key.
   *
   * @param  string  $key
   * @return string
   */
  public static function resourceForKey($key)
  {
      return collect(static::$resources)->first(function ($value) use ($key) {
          return $value::uriKey() === $key;
      });
  }

}
