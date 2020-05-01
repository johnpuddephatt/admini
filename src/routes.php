<?php

Route::group(['namespace' => '\Admini\app\Http\Controllers', 'prefix' => 'admini'], function() {

  Route::get('/', 'ResourceController@dashboard')->name('dashboard');

  Route::get ( '{resource}/create', 'ResourceController@create' );
  Route::post ( '{resource}/store', 'ResourceController@store' );
  Route::get ( '{resource}/index', 'ResourceController@index' );
  Route::get ( '{resource}/{id}', 'ResourceController@view' )->where('id', '[0-9]+');;
  Route::put ( '{resource}/{id}', 'ResourceController@update' )->where('id', '[0-9]+');;
  Route::delete ( '{resource}/{id}/delete', 'ResourceController@delete' )->where('id', '[0-9]+');;
  Route::delete ( '{resource}/{id}/forcedelete', 'ResourceController@forceDelete' )->where('id', '[0-9]+');;

  // Route::get ( '{resource}/{id}/{relation}', 'ResourceController@related' );
});
