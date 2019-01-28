const PubSub = require('PubSub');

const ResultView = function (container) {
  this.container = container;
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Game:result-ready', (evt) => {
    this.renderResult(evt.detail);
  });
};

ResultView.prototype.renderResult = function (result) {
  console.log('result');
};


module.exports = ResultView;
