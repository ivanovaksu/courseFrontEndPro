let blueRect = document.querySelector('#blueRect');
let stepLeft = 0;
let stepTop = 0;

document.addEventListener('keydown', moveBlock);

function moveBlock (e) {
    let coords = blueRect.getBoundingClientRect();
    if(e.key === 'ArrowRight' && coords.right < window.innerWidth) {
        stepLeft += 10;
        blueRect.style.left = stepLeft + 'px';
    } else if(e.key === 'ArrowLeft' && coords.left > 0) {
        stepLeft -= 10;
        blueRect.style.left = stepLeft + 'px';
    } else if(e.key === 'ArrowDown' && coords.bottom < window.innerHeight) {
        stepTop += 10;
        blueRect.style.top = stepTop + 'px';
    } else if(e.key === 'ArrowUp' && coords.top > 0) {
        stepTop -= 10;
        blueRect.style.top = stepTop + 'px';
    }
}