let buttons = document.querySelectorAll('.hideMsg');

for(button of buttons) {
    button.addEventListener('click', hideBlock);
}

function hideBlock (e) {
    if(e.path[2].style.display = 'block') {
        e.path[2].style.display = 'none'
    } else {
        e.path[2].style.display = 'block'
    }
};

