var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');

color1.value = '#ffffff';
color2.value = '#000000';

function setColors() {
  document.body.style.background =
    'linear-gradient(to bottom right, ' +
    color1.value +
    ', ' +
    color2.value +
    ')';
}

color1.addEventListener('input', setColors);
color2.addEventListener('input', setColors);

setColors();
