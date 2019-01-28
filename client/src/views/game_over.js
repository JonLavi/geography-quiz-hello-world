const PubSub = require('../helpers/pub_sub.js');

const GameOverView = function() {

}

GameOverView.prototype.bindEvents = function () {

PubSub.subscribe('Game:game-over', (evt) => {
  console.log(evt.detail);
  this.renderGameOver(evt.detail)
})
};

GameOverView.prototype.renderGameOver = function (score) {
    const gameOver = document.querySelector('#quiz')
    gameOver.innerHTML = ''
    const resultParagraph = document.createElement('h2');
    resultParagraph.textContent = `Game Over. Your score was ${score}`
    gameOver.appendChild(resultParagraph)
};

module.exports = GameOverView
