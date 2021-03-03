// bind
/*
let elem = document.getElementById('elem');

function func(surname, name) {
alert(`${this.value}, ${surname} ${name}`);
}

let newFunc = func.bind(elem);
newFunc('Иванов', 'Иван');
newFunc('Петров', 'Петр'); 
*/

// call
let elem = document.getElementById('elem');

function func() {
alert(this.value);
}

func.call(elem);