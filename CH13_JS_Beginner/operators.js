// 1. 산술 연산자
var a = 10;
var b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a);
console.log(b);

var c = 7;
console.log(++c);
console.log(--c);

// 2. 대입 연산자
var d = 2;
d = 10;
console.log(d);
console.log(d += 3);
console.log(d);

// 3. 비교 연산자
console.log(2 == 2);
console.log(2 == '2'); // true
console.log(2 === '2'); // false
console.log(2 != 2);
console.log(3 > 2);
console.log(3 > 2);

// 4. 논리 연산자
// 논리합(or)
// 논리곱(and)
// 부정(not)
console.log(true || false);
console.log(true && false);
console.log(!false);

// 5. typeof 연산자
console.log(typeof 1);
console.log(typeof '1');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof Symbol());
console.log(typeof null);