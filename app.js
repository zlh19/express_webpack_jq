
var express = require('express'),
    renderRouters=require('./routers/render'),
    ejs = require('ejs'),
    port=process.env.PORT||6006;

var app=express();


//设置模板目录
app.set('views',__dirname +'/views');    

app.engine('ejs',ejs.__express);

app.set('view engine', 'ejs');

// var webpack = require("webpack"),
//     webpackDevMiddleware = require('webpack-dev-middleware'),
//     webpackHotMiddleware = require('webpack-hot-middleware'),
//     webpackConfig = require("./webpack.config.js");
    
// //调用配置,生成 compiler instance
// var compiler = webpack(webpackConfig);
 
// //这里是重点，使用 webpack-dev-middleware 插件
// var devMiddleware = webpackDevMiddleware(compiler, {
//     publicPath: webpackConfig.output.publicPath,
//     stats: {
//         colors: true,
//         chunks: false
//     }
// })

// // 注册中间件
// app.use(devMiddleware);
// app.use(webpackHotMiddleware(compiler));
 
//设置静态
app.use(express.static(__dirname+'/assets'))
app.use(express.static(__dirname+'/build'))

// 路由配置
renderRouters(app)

// 监听端口
app.listen(port, function (err){
    if (err) {
       throw err;
    }
    console.log('Listening at http://localhost:' + port + '\n')
})


