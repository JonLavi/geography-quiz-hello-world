const PubSub = require('../helpers/pub_sub.js')


const QuestionView = function(container){
  this.container= container
}

QuestionView.prototype.bindEvents = function(){
  PubSub.subscribe('Game:question-data-ready', evt =>{
    this.renderQuestionView(evt.detail)
  })
}

QuestionView.prototype.renderQuestionView = function (questionDetail) {
    this.container.innerHTML = '';
    const questionItem = this.createQuestionParagraph(questionDetail)
    this.container.appendChild(questionItem)
};

QuestionView.prototype.createQuestionParagraph = function (questionDetail) {
  const question = document.createElement('p');
  question.textContent = `In ${questionDetail.capital} they say ${questionDetail.hello}, what is the Country? `
  return question;
};

module.exports = QuestionView;
