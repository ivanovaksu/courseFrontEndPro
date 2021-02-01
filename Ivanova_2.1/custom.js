var userAge = +prompt('Сколько лет?'),
    smoking = prompt('Куришь?', '"да" или "нет"');

if (userAge < 18 && smoking === 'нет') {
    alert('Так держать!');

    } else if (userAge < 18 && smoking === 'да') {
        alert('Маме расскажу!');

    } else if (userAge >= 18 && smoking === 'нет') {
        alert('Молодец, и не надо');

    } else if (userAge >= 18 && smoking === 'да') {
        alert('Ну и зря');

    } else {
        alert('Скорее всего, я не распознал твой ответ. Начни заново)');
    }