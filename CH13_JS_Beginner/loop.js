for (var i = 0; i < 10; i++){
    console.log(i);
}

for (var i = 1; i < 10; i++){
    console.log(`${i} 단`)
    for (var j = 1; j < 10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

var flag = 10;

while (flag > 0){
    console.log(flag);
    flag--;
}

var flag1 = 10;

do {
    console.log(flag1);
    flag1--;
} while(flag1 > 100)