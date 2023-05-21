let birthday = document.getElementById('birthday');
let result = document.getElementById('result');
let submit = document.getElementById('submit');

const today = new Date();


function calcAge(){
    let birthDate = new Date(birthday.value);
    let age;

    if ((today.getMonth() > birthDate.getMonth()) ||
        ((today.getMonth() == birthDate.getMonth()) && (today.getDate() >= birthDate.getDate()))){
        age = today.getFullYear() - birthDate.getFullYear();
    }
    else{
        age = today.getFullYear() - birthDate.getFullYear() - 1;
    }

    result.innerText = `귀하의 만 나이는 ${age} 입니다.`;

    return age;
}

submit.addEventListener('click', calcAge);