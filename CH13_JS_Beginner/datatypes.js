/* 
1. 기본형, 단순형, 원시형
- number
- string
- boolean
- undefined
- null
- symbol

2. 참조형, 객체(object)

*/


// number
// 정수, 실수 구분이 없음
var price = 10000;
console.log(price);

//string
var myName = 'TechIt';
console.log(myName);
var myName2 = "LIKELION";
console.log(myName2);

// boolean
var isTrue = true;
console.log(isTrue);
var isFalse = false;
console.log(isFalse);

// undefined
var a;
console.log(a);

// null


// symbol ES6에서 추가됨
var name1 = '김멋사';
var name2 = '김멋사';
console.log(name1 == name2);

var name3 = Symbol('이테킷');
var name4 = Symbol('이테킷');
console.log(name3 == name4);


// 객체(object)
/*
 - 속성의 모은으로 이루어진 데이터
 - 속성에는 어떤 데이터 타입이라도 할당 가능
 - 속성 구분 ,
 - 속성의 정의 속성명(key): 속성값
*/
var student = {
    grade: 1,
    school: 'lion school'
};
console.log(student);
console.log(typeof(student));


// 객체 값 호출
var gradeInfo = student.grade;
console.log(gradeInfo);

// 객체 키 호출
var key = Object.keys(student)[0];
var keys = Object.keys(student);
console.log(key);
console.log(keys);

// 객체에 속성 추가
student.class = 3;
console.log(student);

// 대괄호 표기법
console.log(student['class']);

// 비어 있는 객체 선언
var teacher = new Object();
// var teacher = {};
console.log(teacher);



var myClass = {
    [Symbol('이테킷')]: 1,
    [Symbol('이테킷')]: 2
}
console.log(myClass);