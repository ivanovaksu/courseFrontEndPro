let btn = document.querySelectorAll('.hideMsg');

for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', hideBlock);
}

function hideBlock (e) {
    if(e.path[2].style.display = 'block') {
        e.path[2].style.display = 'none'
    } else {
        e.path[2].style.display = 'block'
    }
};

