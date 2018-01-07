// from http://thenewcode.com/926/Random-Images-With-Flexbox-amp-JavaScript
function randomize(container) {
  for (var i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[Math.random() * i | 0]); 
  }
}

function shuffleElements(container) {
  for (var i = container.length; i > 0; i--) {
    randomize(container[i-1]);
  }
}

var toShuffle = 'flex-table'
var parentElement = document.getElementsByClassName(toShuffle);

shuffleElements(parentElement);
