let itemCard = document.querySelectorAll('.cart_numb_item');
        for (let item of itemCard) {
            item.addEventListener('input', nextItem);
            item.addEventListener('keydown', previousItem)
        }

function nextItem(e) {
    this.value = this.value.replace(/[^\d]/g, '');
    if (e.target.value) {
        e.target.nextElementSibling.focus();
    }
}

function previousItem(e) {
    if (e.keyCode === 8 && e.target.value.length === 0) {
        e.target.previousElementSibling.focus();
    }
}