// var ourPlanet = "Земля";
//    var visitor = "Петя";

// var userName = prompt("Введите ваше имя");
// console.log("userName-->", userName);

// alert("Вы ввели: " + userName);

// alert("Вы ввели " + prompt("Введите ваше имя"));




var country = 'Франция';  var weather;  var food;  var currency;
 
if(country === 'Англия') {
  weather = 'ужасная';
  food = 'сытная';
  currency = 'фунты стерлингов';
}
 
if(country === 'Франция') {
  weather = 'хорошая';
  food = 'потрясающая, но не всегда вегетарианская';
  currency = 'маленькая, смешная и цветная';
}
 
if(country === 'Германия') {
  weather = 'средняя';
  food = 'лучшие колбаски';
  currency = 'маленькая, смешная и цветная';
}
 
var message = 'это ' + country + ', погода ' + weather + ', еда ' + food + ' и ' + 'валюта ' + currency;

console.log('message->', message)