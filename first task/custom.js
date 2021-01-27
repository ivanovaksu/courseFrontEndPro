var cylinderHight = prompt("Введите значение высоты: "),
    cylinderRadius = prompt("Введите значение радиуса");

var cylinderVolum = Math.PI * cylinderRadius * cylinderRadius * cylinderHight;

alert("Объем цилиндра с высотой " + cylinderHight + " и радиусом " + cylinderRadius + " равен: " + cylinderVolum);