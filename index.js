var images = document.querySelectorAll('img');
var randomNumbers = [];

for (var i = 0; i <2; i++) {
  randomNumbers[i] = Math.floor(Math.random() * 6) + 1;
  images[i].setAttribute('src', "images/dice" + randomNumbers[i] + ".png");
}

var heading = document.querySelector('div h1');

if (randomNumbers[0] > randomNumbers[1]) {
  heading.innerHTML = '🚩Player 1 Wins';
}

else if ( randomNumbers[1] > randomNumbers[0]) {
  heading.innerHTML = 'Player 2 Wins🚩';
}

else {
  heading.innerHTML = 'Draw';
}
