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
  state = this.button.value;
  if (state === 'skip') {
    this.button.value = 'next';
    
  } else {
    this.button.value = 'skip';
  }
};

module.exports = ButtonView
