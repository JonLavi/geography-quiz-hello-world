const PubSub = require('PubSub');

const ResultView = function (container) {
  this.container = container;
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Game:result-ready', (evt) => {
    this.renderResult(evt.detail);
  });
};



module.exports = ResultView;
