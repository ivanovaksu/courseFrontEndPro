// Первая задача
let btnSum = document.querySelector('input[type="button"]');
btnSum.addEventListener('click', getSum);

let firstNumber = document.querySelector('input[name="firstNumber"]');
let secondNumber = document.querySelector('input[name="secondNumber"]');
let thirtNumber = document.querySelector('input[name="thirtNumber"]');
let result = document.querySelector('input[name="sum"]');

function getSum() {
    let sum = (+firstNumber.value) + (+secondNumber.value) + (+thirtNumber.value);
    result.value = sum;
    if(firstNumber.value === '' || secondNumber.value === '' || thirtNumber.value === '' || isNaN(result.value)) {
        alert('Все поля должны быть заполнеными, допустимы только числа!');
        result.value = 'Придежись условий)'
    }
}

// Вторая задача
let enterNumber = document.querySelector('#number');
let getResult = document.querySelector('.result');

enterNumber.addEventListener('blur', getSumNumber);
function getSumNumber(e) {
    let sum = 0;
    let arrNum = enterNumber.value.split('');
    for (let num of arrNum) {
        sum += +num;
    }
    getResult.textContent = sum;
    if (isNaN(sum)) {
        alert('Вводи только числа!');
        getResult.textContent = 'Получи результат';
    } else if (enterNumber.value === '') {
        getResult.textContent = 'Получи результат';
    }
}