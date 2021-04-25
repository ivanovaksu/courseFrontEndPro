let imageActivity = document.querySelector('.image-activity');
let activityLevel = document.querySelector('#activity');
let activityDesc = document.querySelector('.activity-desc');
let buttons = document.querySelectorAll('button');
let genders = document.querySelectorAll('[type="radio"]');

let genderFactor = 0;
genders.forEach(gender => {
    gender.addEventListener('input', () => {
       if (gender.id === 'male') {
        genderFactor = 5;
       } else {
        genderFactor = -161;
       }
    });
});

activityLevel.addEventListener('input', showActivityLevel);
let activityFactor = 1;
function showActivityLevel(e) {
    switch (activityLevel.value) {
        case '1' :
            activityDesc.textContent = 'Я малоподвижный человек. Тренировок мало или они отсутсвуют.';
            imageActivity.src = 'image/notMobileActivity.svg';
            activityFactor = 1.200;
            break;
        case '2' :
            activityDesc.textContent = 'У меня низкая активность. Легкие тренировки 1-3 раза в неделю.';
            imageActivity.src = 'image/easyActivity.svg';
            activityFactor = 1.375;
            break;
        case '3' :
            activityDesc.textContent = 'Я умеренно активный: физическая работа средней тяжести или регулярные тренировки 3-5 дней в неделю.';
            imageActivity.src = 'image/modarateActivity.svg';
            activityFactor = 1.550;
            break;
        case '4' :
            activityDesc.textContent = 'Я очень активный: физическая работа полный день или интенсивные тренировки 6-7 раз в неделю.';
            imageActivity.src = 'image/veryActive.svg';
            activityFactor = 1.725;
            break;
        case '5' :
            activityDesc.textContent = 'Моя работа связана с физическим трудом, я тренируюсь 2 раза в день и включаю в программу тренировок силовые упражнения.';
            imageActivity.src = 'image/strongActivity.svg';
            activityFactor = 1.900;
            break;
        default :
        imageActivity.src = 'image/manThinks.svg';
        activityDesc.textContent = '';
        activityFactor = 1;
    }

    if (activityLevel.value >= 1) {
        buttons[2].removeAttribute('disabled');
    } else {
        buttons[2].setAttribute('disabled', 'disabled');
    }
};

let ageFactor = 1;
let dataAge = document.querySelector('#age');
dataAge.addEventListener('input', function () {
    this.value = this.value.replace(/[^\d]/g, '');
    if (+this.value > 80 || +this.value === 0) {
        this.style.borderColor = 'red';
        this.value = '';
    } else {
        this.style.borderColor = 'rgb(63, 140, 211)';
    }
    ageFactor = +this.value;
    if(this.value === '') buttons[4].removeAttribute('disabled');
});

let weightFactor = 1;
let dataWeight = document.querySelector('#weight');
dataWeight.addEventListener('input', function () {
    this.value = this.value.replace(/[^\d]/g, '');
    if (+this.value === 0) this.value = '' ;
    weightFactor = +this.value;
    if(this.value !== '')buttons[4].removeAttribute('disabled')
});

let growthFactor = 150;
let growthValue = document.querySelector('.growth-value');
let growthRange = document.querySelector('#growth');
growthRange.addEventListener('input', ()=> {
    growthValue.textContent = growthRange.value;
    growthFactor = +growthRange.value;
});


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.dataset.step) {
            case 'next' :
                e.target.parentElement.classList.remove('active');
                e.target.parentElement.nextElementSibling.classList.add('active');
                break;
            case 'prev' : 
                e.target.parentElement.classList.remove('active');
                e.target.parentElement.previousElementSibling.classList.add('active');
                break;
        }
    });
});

let imageResult = document.querySelector('.image-desired-result');
let resultLevel = document.querySelector('#desired-result');
let resultDesc = document.querySelector('.desired-result-desc');

let resultFactor = 1;
resultLevel.addEventListener('input', showDesiredResult);
function showDesiredResult() {
    switch (resultLevel.value) {
        case '1' :
            resultDesc.textContent = 'Похудение';
            imageResult.src = 'image/weightLoss.svg';
            resultFactor = 0.15;
            break;
        case '2' :
            resultDesc.textContent = 'Поддержание текущего веса';
            imageResult.src = 'image/weightRetention.svg';
            resultFactor = 1;
            break;
        case '3' :
            resultDesc.textContent = 'Набор мышечной массы';
            imageResult.src = 'image/toGainWeight.svg';
            resultFactor = 0.15;
            break;
        default :
        imageResult.src = 'image/manThinks.svg';
        resultDesc.textContent = '';
        resultFactor = 1;
    }

    if (resultLevel.value >= 1) {
        btnResult.removeAttribute('disabled');
    } else {
        btnResult.setAttribute('disabled', 'disabled');
    }
};

let btnResult = document.querySelector('.show-result');
let descResult = document.querySelector('.desc-result');
btnResult.addEventListener('click', calcCalorieRate);
function calcCalorieRate(e) {
    let caloriesNum = (10 * weightFactor) + (6.25 * growthFactor) - (5 * ageFactor) + genderFactor;
    e.target.parentElement.classList.remove('active');
    descResult.classList.add('active');
    let weightRetention = caloriesNum * activityFactor;
    let weightLoss = weightRetention - (resultFactor * weightRetention);
    let toGainWeight = weightRetention + (resultFactor * weightRetention);
    let description = `<h3>Ваши результаты:</h3>
    <p>${Math.round(caloriesNum)} - Ваш базовый метаболизм (основной обмен). Это калории, которые сжигаются, когда вы находитесь в покое, и энергия тратится на обеспечение процессов дыхания, кровообращения, поддержание температуры тела и т.д.</p>
    <table>
    <tr>
        <td>${Math.round(weightLoss)}</td>
        <td>Ваша норма калорий для похудения. Но помните, что нельзя снижать количество потребляемых калорий ниже 1 200 для женщин и 1 400 для мужчин.</td>
    </tr>
    <tr>
        <td>${Math.round(weightRetention)}</td>
        <td>Ваша норма калорий для поддержания веса с текущей физической активностью (вы не худеете и не набираете вес)</td>
    </tr>
    <tr>
        <td>${Math.round(toGainWeight)}</td>
        <td>Ваша норма калорий для набора мышечной массы. Не забывайте, что для эффективного результата необходимо употреблять правильное количество БЖУ.</td>
    </tr>
    </table>`;
    descResult.innerHTML = description;
}