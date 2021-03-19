let blockPane = document.querySelectorAll('.pane');
let btn = document.querySelectorAll('.hideMsg');

for(let i = 0; i < blockPane.length; i++) {
    btn[i].addEventListener('click', hideBlock);
    function hideBlock (e) {
        if(blockPane[i].style.display = 'block') {
            blockPane[i].style.display = 'none'
        } else {
            blockPane[i].style.display = 'block'
        }
    };
}

