const messageBlock = document.querySelector('.message-block');
const btnRefreshCookie = document.querySelector('.refresh-cookie');

btnRefreshCookie.addEventListener('click', refreshCookie);

setCookie('userName', 'Oksana', {'max-age': 10});
alert('Добро пожаловать');

function refreshCookie() {
    messageBlock.classList.remove('active');
    setCookie('userName', 'Oksana', {'max-age': 10});
}

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

let timerId = setInterval(()=> messageBlock.classList.add('active'), 10000);