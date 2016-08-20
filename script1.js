var body = document.getElementsByTagName('body')[0];
var parentDiv = document.getElementById('parentDiv');
var divBox;

for(var i = 0; i < 256; i++) {
  divBox = document.createElement('div');
  divBox.className = 'gridSquare';
  parentDiv.appendChild(divBox);
}
body.appendChild(parentDiv);
