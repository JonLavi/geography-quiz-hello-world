const PubSub = require('../helpers/pub_sub.js');
const ButtonView = function(button){
  this.button = button;
}

ButtonView.prototype.bindEvents = function () {
  this.button.addEventListener('click', (evt) => {
    PubSub.publish('NextQuestionView:button-pressed', evt)
  });

  PubSub.subscribe('InputView:answer-submitted', (evt) => {
    this.renderButton('next');
  });

  PubSub.subscribe('Game:question-data-ready', (evt) => {
    this.renderButton('skip');
  });
}

ButtonView.prototype.switchButtonState = function () {
  state = this.button.value;
  if (state === 'skip') {
    this.button.value = 'next';
  } else {
    this.button.value = 'skip';
  }
};

module.exports = ButtonView
