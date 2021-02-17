// 1
var numbers = [-25, 36, 49, -13, 81, -27];

var newNumbers = numbers.filter(function(number) {
    return number > 0;
});

var result = newNumbers.map(function(number) {
    return Math.sqrt(number);
});

console.log(newNumbers);
console.log(result);

// 2
/*
var nums = [4, 3, 1, 2, 5, 8];
var i = 0;

var result = nums.reduce(function(sum, item) {
    (sum > 10) ? console.log(i): i++; return sum + item;
});
console.log(result);
*/



