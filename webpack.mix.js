const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [])
    .webpackConfig(webpack => { return {
        plugins: [new webpack.DefinePlugin({ '__VUE_OPTIONS_API__': 'true', '__VUE_PROD_DEVTOOLS__': 'false' })],
    }}).vue().sourceMaps()
