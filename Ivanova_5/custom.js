// 1 Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
var someArray = ['a', 'b', 'c'],
    addSomeArray = someArray.push(1, 2, 3);
console.log(someArray);

// 2 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
var numArray = [1, 2, 3],
    addNumArray = numArray.unshift(4, 5, 6);
console.log(numArray);

// 3 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
var myArray = ['js', 'css', 'jq'];
console.log(myArray[0]);

// 4 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
console.log(myArray[2]);

var lastItem = myArray[myArray.length - 1];
console.log(lastItem);


// 5 Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
var numbers = [1, 2, 3, 4, 5],
    newNumbers = numbers.slice(0, 3);

console.log(newNumbers);