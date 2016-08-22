var body = document.getElementsByTagName('body')[0];
var parent = document.getElementById('parent');
var wrapper = document.getElementsByClassName('wrapper')[0];
var colorIndicator = document.getElementById('colorIndicator');
var divBox;
var color;
//********************************creating the grid****************************************************
for(var i = 0; i < 256; i++) {
  divBox = document.createElement('div');
  divBox.className = 'gridSquare';
  parent.appendChild(divBox);
}
wrapper.appendChild(parent)
body.appendChild(wrapper);

//***********************************applying the colors************************************************

function pickColor(event) {
  color = getComputedStyle(event.target).backgroundColor;
  colorIndicator.style.backgroundColor = color;
};

function thisColor(event) {
  console.log(event.target.style.backgroundColor);

    if (event.target.className === 'gridSquare') {
      event.target.style.backgroundColor = color;
      console.log(event.target.style.backgroundColor);
  }
}
// function thisColor (event) {
//   // event.target.style.background = saveColor;
//     if(event.target.className === 'gridSquare') {
//       color = getComputedStyle(event.target).backgroundColor;
//       console.log(event.target.style.backgroundColor);
//   }
// }
parent.addEventListener('click', thisColor);

//********************************Colors for Selection**************************************************
var red = document.getElementById('red');
red.addEventListener('click', pickColor);

var green = document.getElementById('green');
green.addEventListener('click', pickColor);

var blue = document.getElementById('blue');
blue.addEventListener('click', pickColor);

var orange = document.getElementById('orange');
orange.addEventListener('click', pickColor);

var pink = document.getElementById('pink');
pink.addEventListener('click', pickColor);

var brown = document.getElementById('brown');
brown.addEventListener('click', pickColor);

var purple = document.getElementById('purple');
purple.addEventListener('click', pickColor);

var yellow = document.getElementById('yellow');
yellow.addEventListener('click', pickColor);

var white = document.getElementById('white');
white.addEventListener('click', pickColor);

var black = document.getElementById('black');
black.addEventListener('click', pickColor);
