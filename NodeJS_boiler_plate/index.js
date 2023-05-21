const express = require('express');
// import express as express
// 설치된 패키지를 코드 안으로 불러와주는 작업
// 모듈의 이름을 express로 선언
const app = express();
const port = 5000;

const mongoose = require('mongoose');
// mongoDB 데이터베이스 -> json
// 몽고디비의 저장소에 저희가 접근을 해서 저장하고 그 정보를 불러와주는 웹서비스
// SQL -> 전통적으로 데이터베이스를 다루고, 정보들에 접근하고 변경하고
// Relation == Table == 특성에 맞게 분리해줘야함 // 제1정규화 2정규화
// noSQL 
mongoose.connect('mongodb+srv://ljh640370:qwer1234@cluster0.vbe3cnu.mongodb.net/', {
    useNewUrlParser: true, useUnifiedTopology: true // useCreateIndex: true, useFindAndMOdify: false
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));



function handleListen(){
  console.log(`Example app listening on port ${port}`);
}

// request, respond
// app.get('url', 함수);
// app.listen(port, 함수);

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/example', (req, res) => res.send("example respond"));
app.listen(port, handleListen());


