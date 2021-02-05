// Если через передачу значений самостоятельно внутри редактора, то я поняла, что должно быть так:
function isLannisterSoldier(color, lion){
    if (color === 'red' && lion === null || lion === 'lion') {
        return true;
    } else {
        return false;
    }
}

console.log (isLannisterSoldier ('red', 'lion'));
console.log (isLannisterSoldier('blue', null));
console.log (isLannisterSoldier('blue', 'lion'));

// Если же через ввод данных пользователем, то так:

/*
var armourSoldier = prompt('What color of armour?'),
    shieldSoldier = prompt('What is depicted on the soldier`s shield? If there is no shield -- click CANCEL');

function isLannisterSoldier(color, lion){
    if (color === 'red' && lion === null || lion === 'lion') {
        return true; 
        // alert('It`s a Lannister');
    } else {
        return false; 
        // alert('It`s not a Lannister');
    }
}

console.log (isLannisterSoldier (armourSoldier, shieldSoldier));
*/
