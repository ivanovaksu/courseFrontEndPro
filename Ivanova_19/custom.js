let btnOpen = document.querySelector('button');
let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=500,height=500`;

btnOpen.addEventListener('click', openWindow);

function openWindow() {
    let newWin = window.open("", "Frontend", params);
    newWin.document.write('<title>Frontend</title><img src="./cat.jpeg" alt="cat" width="400" height="400">');
    let timerId = setInterval(randomStep, 1000);

    function randomStep() {
        let xPosition = Math.floor(Math.random() * window.innerWidth);
        let yPosition = Math.floor(Math.random() * window.innerHeight);
        newWin.moveTo(xPosition, yPosition);
    }

    setTimeout(() => {
        clearInterval(timerId);
        newWin.close();
    }, 15000);
}
