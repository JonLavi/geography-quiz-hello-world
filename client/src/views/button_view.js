const PubSub = require('../helpers/pub_sub.js');
const ButtonView = function(button){
  this.button = button;
}

ButtonView.prototype.bindEvents = function () {
  this.button.addEventListener('click', (evt) => {
    PubSub.publish('NextQuestionView:button-pressed', evt)
  })
}




module.exports = ButtonView
