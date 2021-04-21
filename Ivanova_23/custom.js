let distanceValue = document.querySelector('.distance-value');
let rangeDistance = document.querySelector('[type="range"]');
let rentSum = document.querySelector('.rent-sum');

let priceDistance = 0;
rangeDistance.addEventListener('input', () => {
    distanceValue.textContent = rangeDistance.value;
    if (parseFloat(rangeDistance.value) > 150) {
        priceDistance = (+rangeDistance.value - 150) * 2;
    } else {
        priceDistance = 0;
    }
    getResult();
});


let typeCar = document.querySelectorAll('[type="radio"]');
for (let type of typeCar) {
    type.addEventListener('input', getPriceOfType);
}

let priceTypeCar = 0;
function getPriceOfType() {
    switch (true) {
        case passenger.checked :
            priceTypeCar = 1400;
            break;
        case minivan.checked :
            priceTypeCar = 4700;
            break;
        case motorcycle.checked :
            priceTypeCar = 1000;
            break;
        default :
        priceTypeCar = 0;
    }
    getResult();
}

let selectTown = document.querySelector('#town-rent');
selectTown.addEventListener('change', changeTown);

let priceTown = 0;
function changeTown() {
    switch(selectTown.value) {
        case 'dp' :
            priceTown = 0;
            break
        case 'kh' :
            priceTown = 500;
            break
        case 'kyiv' :
            priceTown = 1000;
            break
        default :
            priceTown = 0;
    }
    getResult();
}

function getResult() {
    if (priceTypeCar > 0) {
        rentSum.textContent = priceTypeCar + priceDistance + priceTown;
    } else {
        rentSum.textContent = priceTypeCar + priceDistance;
    }
}