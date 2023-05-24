const express = require('express');
// import express as express
// 설치된 패키지를 코드 안으로 불러와주는 작업
// 모듈의 이름을 express로 선언
const app = express();
const port = 5000;
const { User } = require('./models/User');
const { mongoURI } = require('./config/key')

const bodyParser = require('body-parser');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// application/json
app.use(bodyParser.json());
// 위 주석 형식의 데이터를 분석해서 가져올 수 있게 함

const mongoose = require('mongoose');
// mongoDB 데이터베이스 -> json
// 몽고디비의 저장소에 저희가 접근을 해서 저장하고 그 정보를 불러와주는 웹서비스
// SQL -> 전통적으로 데이터베이스를 다루고, 정보들에 접근하고 변경하고
// Relation == Table == 특성에 맞게 분리해줘야함 // 제1정규화 2정규화
// noSQL
mongoose.connect(mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true // useCreateIndex: true, useFindAndMOdify: false
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello World! nodemon 적용 dsfdasfsafadfafaf'));
app.get('/example', (req, res) => res.send("example respond"));


// 회원 가입을 위한 route
app.post("/register", (req, res) =>{
  // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터베이스에 넣어준다.

  // req.body 안에는 json 형식에 데이터가 담겨져 있음
  /*
  {
    id: "hello",
    password: "123"
  }
  */
  const user = new User(req.body);

  // mongoDB method
  // client에서 가져온 데이터를 mongDB에 저장해줌
  // user.save((err, userInfo) => {
  //   if(err) return res.json({success: false, err});
  //   return res.status(200).json({succes: true});
  // })
  

  // mongoDB 버전이 올라가서 callback 함수를 더 이상 지원하지 않는다고 함
  // -> callback 함수 정의하지 않고 구현
 try{
  user.save()
  .then(() => {
    return res.status(200).json({succes: true});
  })
  .catch((err) => {
    return res.json({succes: false, err});
  })
 } catch (err) {
  console.log(err);
 } 
})

function handleListen(){
  console.log(`Example app listening on port ${port}`);
}
app.listen(port, handleListen);



