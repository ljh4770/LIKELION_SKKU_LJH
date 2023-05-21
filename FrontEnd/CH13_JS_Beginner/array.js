/*
 - 배열(Array)
    복수의 데이터를 순서대로 담고있는 자료구조
    배열의 순서는 0부터 시작
    배열은 객체
    키 -> 인덱스 / 값 -> 요소
*/

var mbti = ['INFP', 'ENTJ', 'INTJ'];
console.log(mbti[2]);
console.log(mbti.length);

mbti[3] = 'ISTJ';
console.log(mbti.length);
console.log(mbti[3]);

mbti[2] = 'ENFP';
console.log(mbti[2]);

console.log(typeof mbti);

// 1. push()
console.log(mbti.push('ESFP', 'INTP'));

// 스프레드 문법
var newMBTI = [...mbti, 'ESFP', 'INTP'];
console.log(newMBTI);
console.log(mbti);

// 2. pop()
console.log(mbti.pop());
console.log(mbti);

// 3. unshift()
console.log(mbti.unshift('ESTP', 'INTJ'));
// 스프레드 문법
newMBTI = ['ESTP', 'INTJ', ...mbti];
console.log(newMBTI);
console.log(mbti);

// 4. shift()
console.log(mbti.shift());
console.log(mbti);

// 5. slice()
console.log('배열배열' + mbti.slice(0, 2));
console.log(mbti.slice());
console.log(mbti.slice(-1));

// 6. join()
console.log(mbti.join());
console.log(mbti.join('-'));
console.log(mbti.join(separator = ''));

// 7. sort() 오름차순
console.log(mbti.sort());
console.log(mbti);

// 8. reverse()
console.log(mbti.sort().reverse());