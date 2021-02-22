// 1
let someString = 'aaa bbb ccc';
console.log(someString.substr(4, 3));
console.log(someString.substring(4, 7));
console.log(someString.slice(4, 7));

// 2
let str = 'я учу javascript!';
let newStr = str[0].toUpperCase() + str.substring(1);
console.log(newStr);

// 3
let anyStr = 'var_test_text';
let words = anyStr.split('_');

for(let i = 1; i < words.length; i++){
  words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1);
}
let result = words.join('');
console.log(result);

// 4
function getRandom (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom (0, 50));