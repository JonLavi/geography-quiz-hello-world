const PubSub = require('../helpers/pub_sub.js')


const QuestionView = function(container){
  this.container= container
}

QuestionView.prototype.bindEvents = function(){
  PubSub.subscribe('Question:data_ready', evt =>{
    this.renderQuestionView(evt.detail)
  })
}

QuestionView.prototype.renderQuestionView = function (countries) {
  countries.forEach((country) =>{
    const questionItem = this.createQuestionItem(country)
    this.container.appendChild(questionItem)
  })
};

QuestionView.prototype.createQuestionItem = function (country) {
  const countryDetailView = new QuestionView();
  const QuestionViewDetail = QuestionView.createQuestionViewDetail(country);
  return createQuestionViewDetail
  
};

module.exports = QuestionView;
