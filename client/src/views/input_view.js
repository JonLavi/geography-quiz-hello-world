const PubSub = require('../helpers/pub_sub.js');

const InputView = function(form){
  this.form = form;
}

InputView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt)
  })
}

InputView.prototype.handleSubmit = function (evt) {
  evt.preventDefault()
  PubSub.publish('AnswerView:answer-submitted', evt.target.input.value)
  evt.target.reset();
};
module.exports = InputView;
