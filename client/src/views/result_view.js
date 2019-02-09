const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(container) {
  this.container = container;
  this.currentQuestion;
};

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('Game:result-ready', (evt) => {
    this.renderResult(evt.detail);
  })

  PubSub.subscribe('NextQuestionView:button-pressed', () => {
    this.clearView();
  })

  PubSub.subscribe('Game:question-data-ready', evt => {
    this.currentQuestion = evt.detail;
  })
};

ResultView.prototype.renderResult = function(result) {
  console.log('result:', result);
  this.container.innerHTML = '';
  const resultItem = this.createResultParagraph(result);
  this.container.appendChild(resultItem);
};

ResultView.prototype.createResultParagraph = function(result) {
  const resultParagraph = document.createElement('h6');
  if (result) {
    resultParagraph.textContent = "You are correct!"
  } else {
    resultParagraph.textContent = `Aww shucks. The correct answer is: ${this.currentQuestion.name}`
  }
  return resultParagraph;
};

ResultView.prototype.clearView = function() {
  this.container.innerHTML = '';
};

module.exports = ResultView;
