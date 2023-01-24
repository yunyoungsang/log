//모듈
const express = require('express');
const app = express();

//라우팅
const home = require('./routes/home');

//앱 세팅
app.set('view engine','ejs');
app.set('views','./views');


app.use('/',home); // use -> 미들 웨어를 등록해주는 메서드.


module.exports = app;
 