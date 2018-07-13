const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

let app = express()
app.use(express.static("www"));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

//导入并且使用路由

app.use(require("./router/index"));

app.listen(3000,()=>{
    console.log('come on!')
})