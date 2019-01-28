const PubSub = require('../helpers/pub_sub.js');

const ScoreView = function (container) {
  this.container = container
}

ScoreView.prototype.bindEvents = function () {
  PubSub.subscribe('Game:score-given', (evt) => {
    this.renderScore(evt.detail);
  })
};




module.exports = ScoreView;
