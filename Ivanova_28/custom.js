let itemCard = document.querySelectorAll('.cart_numb_item');
        for (let item of itemCard) {
            item.addEventListener('input', function (e) {
                if (e.data === null) {
                    this.previousElementSibling.focus();
                } else {
                    this.nextElementSibling.focus();
                }
    })
}