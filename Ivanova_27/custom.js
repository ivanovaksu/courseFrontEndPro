// task 1
const someText = document.querySelectorAll('.some-text');
const cropText = document.querySelector('.crop-text');

cropText.addEventListener('click', showCroppedText);
function showCroppedText() {
    someText.forEach( text => {
        if (text.textContent.length > 10) {
            let crop = text.textContent.substring(0, 10) + '...';
            text.textContent = crop;
        }
    });
}

// task 2
let text = document.querySelector('#text');
let colors = ['red', 'green', 'blue', 'orange', 'blueviolet', 'grey'];
let i = 0;
window.setInterval(changeColor, 1000);

function changeColor() {
    text.style.color = colors[i];
	i++;
	if (i >= colors.length) {
		i = 0;
 	}
};
