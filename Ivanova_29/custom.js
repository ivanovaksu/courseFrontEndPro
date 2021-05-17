let itemCard = document.querySelectorAll('.cart_numb_item');
let itemArr = [];

for (let item of itemCard) {
    item.addEventListener('input', nextItem);
    item.addEventListener('keydown', previousItem);
}

function nextItem(e) {
    this.value = this.value.replace(/[^\d]/g, '');
    if (this.value) {
        this.nextElementSibling.focus();
        itemArr.push(this.value);
        let stringItems = itemArr.join('');
        setCookie('cart', stringItems);
    }
}

function previousItem(e) {
    if (e.keyCode === 8 && this.value.length === 0) {
        this.previousElementSibling.focus();
        itemArr.pop();
        let stringItems = itemArr.join('');
        setCookie('cart', stringItems);
    }
}

// alert('Вы даёте согласие на использование cookie-файлов, нажимая "ОК"');

function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    console.log(matches);
    return matches ? decodeURIComponent(matches) : undefined;
}
getCookie('cart');

function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        ...options
    };
    
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
}