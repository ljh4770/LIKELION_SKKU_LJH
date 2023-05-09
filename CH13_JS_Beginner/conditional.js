/*
- 제어문(control flow)
    1. 조건문
    2. 반복문
*/

var a = 5;

if (a > 2){
    console.log('a > 2');
}
else{
    console.log('a <= 2');
}


if (a > 5){
    console.log('a > 5');
}
else if (a == 5){
    console.log('a == 5');
}
else {
    console.log('a < 5');
}

// switch
var mbti = 'INTP';

switch (mbti) {
    case 'ENFP':
        val = 'ENFP';
        break;
    case 'ISTJ':
        val = 'ISTJ';
        break;
    case 'INTP':
        val = 'INTP';
        break;
    default:
        val = '유효한 값이 아닙니다.'
}
console.log(val);