const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix
   // .setResourceRoot('foo')
   .setPublicPath('src/public')
   .js('src/resources/js/app.js', 'vendor/admini/js')
   .sass('src/resources/sass/app.scss', 'vendor/admini/css')
   .browserSync('public.admini.localhost')
   .webpackConfig(webpack => {
       return {
         output: {
          chunkFilename: 'vendor/admini/js/[name].[chunkhash].js',
          },
           plugins: [
               new webpack.ProvidePlugin({
                   'window.Quill': 'quill',
                   'Quill': 'quill'
               })
           ]
       };
   });
