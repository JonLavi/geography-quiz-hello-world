const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container) {
  this.container = container;
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Game:result-ready', (evt) => {
    this.renderResult(evt.detail);
  });
};

ResultView.prototype.renderResult = function (result) {
  console.log('result:', result );
  const resultItem = this.createResultParagraph(result)
  this.container.appendChild(resultItem)
};

ResultView.prototype.createResultParagraph = function (result) {
  const resultParagraph = document.createElement('p');
  if (result){
    resultParagraph.textContent = "You are correct!"
  } else {
    resultParagraph.textContent = `Aww shucks, that's not quite right`
  }
  return resultParagraph;
};


module.exports = ResultView;
