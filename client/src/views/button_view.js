const PubSub = require('../helpers/pub_sub.js');
const ButtonView = function(button){
  this.button = button;
}

ButtonView.prototype.bindEvents = function () {
  this.button.addEventListener('click', (evt) => {
    PubSub.publish('NextQuestionView:button-pressed', evt)
    console.log(this.button.value)
    this.switchButtonState();
  })
}

ButtonView.prototype.switchButtonState = function () {
  state = this.button.id;
  if (state === 'skip') {
    this.renderButton('next');
  } else {
    this.renderButton('skip');
  }
};

ButtonView.prototype.renderButton = function (state) {
  this.button.id = state
  this.button.value = state;
  this.button.textContent = state;
};

module.exports = ButtonView
