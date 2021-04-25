// Первая задача
let btnSum = document.querySelector('input[type="button"]');
btnSum.addEventListener('click', getSum);

let firstNumber = document.querySelector('input[name="firstNumber"]');
let secondNumber = document.querySelector('input[name="secondNumber"]');
let thirtNumber = document.querySelector('input[name="thirtNumber"]');
let result = document.querySelector('input[name="sum"]');
firstNumber.addEventListener('input', checkInputValue);
secondNumber.addEventListener('input', checkInputValue);
thirtNumber.addEventListener('input', checkInputValue);

function checkInputValue() {
    this.value = this.value.replace(/[^\d]/g, '');
    if(this.value === '0') this.value = '';
}

function getSum() {
    let sum = +firstNumber.value + +secondNumber.value + +thirtNumber.value;
    result.value = sum;
}

// Вторая задача
let enterNumber = document.querySelector('#number');
let getResult = document.querySelector('.result');

enterNumber.addEventListener('input', checkInput);
function checkInput() {
    this.value = this.value.replace(/[^\d]/g, '');
    if(this.value === '0') this.value = '';
}

enterNumber.addEventListener('blur', getSumNumber);
function getSumNumber(e) {
    let arrNum = enterNumber.value.split('');
    let total = arrNum.reduce(function (sum, current) {
        return sum + +current;
      }, 0);
    getResult.textContent = total;
}