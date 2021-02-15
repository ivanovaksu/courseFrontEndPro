var words = ['a', 'b', 'c'],
    num = [1, 2, 3];

var concatArray = words.concat(num);
console.log('1.Объединение массивов-->', concatArray);

num.reverse();
console.log('2.Массив num в обратном порядке-->',num);


var numbers = [3, 4, 1, 2, 7];
numbers.sort()
console.log('3.Сортировка массива-->' ,numbers);


function evenNum (i) {
    return i%2 === 0;
}

var result = numbers.filter(evenNum);
console.log('4.Новый массив с четными значениями-->',result);