const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container) {
  this.container = container;
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Game:result-ready', (evt) => {
    this.renderResult(evt.detail);
  });

  PubSub.subscribe('NextQuestionView:button-pressed', () => {
    this.clearView();
  })
};

ResultView.prototype.renderResult = function (result) {
  console.log('result:', result );
  this.container.innerHTML = '';
  // this.createResultHeader();
  const resultItem = this.createResultParagraph(result);
  this.container.appendChild(resultItem);
};

ResultView.prototype.createResultParagraph = function (result) {
  const resultParagraph = document.createElement('h2');
  if (result){
    resultParagraph.textContent = "You are correct!"
  } else {
    resultParagraph.textContent = `Aww shucks, that's not quite right`
  }
  return resultParagraph;
};

// ResultView.prototype.createResultHeader = function () {
//   const resultHeader = document.createElement('p');
//   resultHeader.textContent = "Result:"
//   this.container.appendChild(resultHeader);
// };

ResultView.prototype.clearView = function () {
  this.container.innerHTML = '';
};


module.exports = ResultView;
