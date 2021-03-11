let reviewDiv = document.querySelector('div#review');
reviewDiv.setAttribute('class', 'review');

let h1 = document.createElement('h1');
h1.textContent = 'Создание сайта';
reviewDiv.appendChild(h1);

let h2 = document.createElement('h2');
h2.textContent = 'Руководитель отдела маркетинга компании "Sticker Wall"';
reviewDiv.appendChild(h2);

let paragraph = document.createElement('p');
paragraph.innerHTML = '<p>Спасибо команде за качественно проделанную работу. Сайт был сдан в оговоренные сроки и без единого бага.<br><br> Рад, что друзья посоветовали именно Вас!</p>';
reviewDiv.appendChild(paragraph);
