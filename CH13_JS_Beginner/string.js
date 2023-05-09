// 문자열 선언
var greeting = 'Hello!';
var farewell = 'Bye!';
var myName = '김테킷';

var sentence = greeting + myName;

console.log(sentence);
console.log(farewell + 2);

// 이스케이프 시퀀스
console.log('a\nb');
console.log('a\tb');
console.log('a\0b');
console.log('a\'b');
console.log("a\"b");
console.log('a\\b');


// 템플릿 리터럴 (ES6)
// 멀티라인 텍스트 작업 가능
var a = `${greeting} my name is ${myName}`;
console.log(a);

// 문자열 함수
var abc = 'I am Iron man';

// 1. indexOf
console.log(abc.indexOf('man'));
console.log(abc.indexOf('I'));

// 2. slice
console.log(abc.slice(0, 3));

// 3. toUpperCase(), toLowerCase()
console.log(abc.toUpperCase())
console.log(abc.toLowerCase())

// 4. startsWith(), endsWith()
var efg = 'This is my car.'
console.log(efg.startsWith('Th'));
console.log(efg.startsWith('th'));
console.log(efg.endsWith('car.'));

// 5. includes()
console.log(efg.includes('is'));