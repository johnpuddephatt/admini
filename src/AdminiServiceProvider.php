<?php

namespace Admini;

use Illuminate\Support\ServiceProvider;

class AdminiServiceProvider extends ServiceProvider
{

    public function boot()
    {
      $this->publishes([
        __DIR__.'/public' => public_path(''),
    ], 'public');

      $this->loadViewsFrom(__DIR__.'/resources/views', 'admini');

      $this->publishes([
        __DIR__.'/config/admini.php' => config_path('admini.php'),
      ]);

      $this->loadRoutesFrom(__DIR__.'/routes.php');
    }
}
