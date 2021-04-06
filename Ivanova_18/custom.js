let salePopupBuy = document.querySelector('.sale-popup-buy');
let salePopupClose = document.querySelector('.sale-popup-close');
let timerShow = document.querySelector('.timer');
let modal = document.querySelector('.modal');

salePopupBuy.addEventListener('click', popupBuy);
salePopupClose.addEventListener('click', popupClose);
function timeDiff (currentDate, expectedDate) {
    return expectedDate - currentDate;
}

let endDate = {
    fullYear: 2021,
    month: 04,
    day: 15,
    hours: 00,
    minutes: 00,
    seconds: 00
}

let endDateStr = `${endDate.fullYear}-${endDate.month}-${endDate.day} ${endDate.hours}:${endDate.minutes}:${endDate.seconds}`;

let timerId = setInterval(startTimer, 1000);
function startTimer() {
    let now = new Date();
    let date = new Date(endDateStr);
    let timeRest = timeDiff(now, date);
    if (timeRest <= 0) {
        clearInterval(timerId);
        timerShow.innerHTML = 'time off'
    } else {
        let res = new Date(timeRest);
        let strTimer = `${res.getUTCDate() - 1} дней ${res.getUTCHours()}:${res.getUTCMinutes()}:${res.getUTCSeconds()}`;
        timerShow.innerHTML = strTimer;
    }
}
function popupBuy() {
    localStorage.setItem('Sale', true);
    localStorage.setItem('ShowSalePopup', JSON.stringify({ isShow: false, time: 0 }))
    modal.classList.add('block-none');
}

function popupClose() {
    localStorage.setItem('Sale', false);
    localStorage.setItem('ShowSalePopup', JSON.stringify({ isShow: true, time: 15000 }))
    modal.classList.add('block-none');
    setTimeout(() => modal.classList.remove('block-none'), 10000);
}