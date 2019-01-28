const PubSub = require('../helpers/pub_sub.js');

const ScoreView = function (container) {
  this.container = container
}

ScoreView.prototype.bindEvents = function () {
  PubSub.subscribe('Game:score-given', (evt) => {
    this.renderScore(evt.detail);
  })
};

ScoreView.prototype.renderScore = function (score) {
  this.container.innerHTML = '';
  const scoreItem = document.createElement('p');
  scoreItem.textContent = `Score: ${score}`;
  this.container.appendChild(scoreItem)
};


module.exports = ScoreView;
