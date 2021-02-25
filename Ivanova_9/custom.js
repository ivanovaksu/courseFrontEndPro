// 1
let obj = {
    'Коля':'1000', 
    'Вася':'500', 
    'Петя':'200'
};
    
console.log(`зарплата Пети: ${obj['Петя']}, зарплата Коли: ${obj['Коля']}.`);

// 2
/*
let arr = {
    'ru':['голубой', 'красный', 'зеленый'],
    'en':['blue', 'red', 'green'],
};
console.log(arr['ru'][0]);
*/

// 3
let arr = {
    'ru':['голубой', 'красный', 'зеленый'],

    get addColor() {
        return this['ru'];
    },

    set addColor(colors) {
        this['ru'].push(colors);
    }

};
arr.addColor = prompt('Введите цвет:')
console.log(arr.addColor);

