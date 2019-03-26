var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
   filename: 'main.css'
});

module.exports = {
   
    entry: './src/scripts/application.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle-front.js',
        // publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
              },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: 'images/'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js', 
          'vue-i18n': 'vue-i18n/dist/vue-i18n.esm.js'
        
     
        }
      },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            JQuery : 'jquery'
        }),
        extractPlugin,
        //Take html template and create new html with same name to the /dist folder
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        //On cmd run delete /dist folder and create a new one
        new CleanWebpackPlugin(['dist'])
    ]
};