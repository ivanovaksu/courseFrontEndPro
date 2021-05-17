let itemCard = document.querySelectorAll('.cart_numb_item');

for (let item of itemCard) {
    item.addEventListener('input', nextItem);
    item.addEventListener('keydown', previousItem);
}

function nextItem(e) {
    this.value = this.value.replace(/[^\d]/g, '');
    if (this.value) {
        this.nextElementSibling.focus();
    }
}

function previousItem(e) {
    if (e.keyCode === 8 && this.value.length === 0) {
        this.previousElementSibling.focus();
    }
}