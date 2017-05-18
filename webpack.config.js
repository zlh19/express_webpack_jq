var webpack=require('webpack');
var path=require('path');
var glob=require('glob');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


var distPath = path.join(__dirname,'/build/'); 


var getEnterObjFun=function() {
    var entry = {};
    glob.sync('./assets/**/*.js').forEach(function (item,index) {
        if(item.indexOf('/module/') > 0){
            var pathArr = item.split("/");
            var pathLength=pathArr[pathArr.length-1]
            var fileTotalName=pathLength.split('.')
            fileTotalName.pop()
            var fileName=fileTotalName.join('.');
            entry[fileName]=item
        }
    });

    return entry;
};



module.exports = {
    entry: getEnterObjFun(),
    output: {
        path: distPath,
        publicPath:'/',
        filename: "[name].js?[hash]",
        chunkFilename: '[name].[id].[hash].js?[hash]'
    },
    module: {
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理
            {
                test: /\.scss$/,
                // loader: ExtractTextPlugin.extract(['css-loader?sourceMap','sass-loader?sourceMap'])// "style!css!sass"
                loader: "style!css!sass"
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.js$/,
                loader: "babel",
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
            // new ExtractTextPlugin('[name].css'),
            //压缩js 
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                compress: {
                    warnings: false
                }
            })
            // new webpack.HotModuleReplacementPlugin(),
            // new webpack.NoErrorsPlugin()
     ]
};
