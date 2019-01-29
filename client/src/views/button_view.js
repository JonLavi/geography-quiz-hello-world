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

ButtonView.prototype.renderButton = function (state) {
	this.button.id = state
  this.button.value = state;
  this.button.textContent = this.capitalize(state);
};

ButtonView.prototype.capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};


module.exports = ButtonView
