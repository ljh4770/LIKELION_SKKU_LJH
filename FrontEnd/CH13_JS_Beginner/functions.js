// 함수 선언문
function multiply(a, b = 10){
    return a * b;
}

console.log(multiply(10) +'함수 출력 파라미터 기본값 설정');

var result = multiply(241, 21);

console.log(result);

// 함수 표현식
var divide = function (a, b){
    return a / b;
};

console.log(divide(9, 3));


// 변수 키워드
// var, let, const

var a = 10;

while (true){
    var a = 1000;
    break;
}
console.log(a);

// 호이스팅- var 사용 시 주의할 필요가 있음
console.log(word);
word = 'happy';

console.log(word);

var word;

// let
let x = 10;
while (true){
    let x = 100;
    break;
}
console.log(x);


// const
const y = 2;
console.log(y);
// y = 10;


const PI = 3.14

// const로 선언된 객체
const Student = {
    grade: 1,
    class: 3
};

// 객체의 속성은 변경 가능
Student.grade = 2;
console.log(Student);

// 객체 자체를 재할당하는 것은 불가능
// Student = {
//     num: 2023,
//     grade: 2
// };


// 화살표 함수
// let plus = (a, b) => {
//     return a + b;
// };

let plus = (a, b) => a + b;

console.log(plus(2, 5));

let print = word => {
    console.log(word);
};

print('Hello');

// 입력 값이 없는 함수의 경우
// 괄호로 없다는 것을 표현 해 주어야함
let myFunc = () => {
    console.log('function called');
    return 0;
}
myFunc();