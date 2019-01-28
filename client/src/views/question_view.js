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
  const countryDetailView = new QuestionDetail()
  const countryDetail = countryDetailView.createQustionDetail(country)
  return countryDetail;

};

QuestionDetail.prototype.createQustionDetail = function(country){
  const questionDetail = document.createElement('div');
  questionDetail.classList.add('question-detail');

  const country_name = document.createElement('h2');
  country_name.textContent = country.name;
  questionDetail.appendChild(country_name);

  const country_hello = document.createElement('h3');
  country_hello.textContent = country.hello;
  questionDetail.appendChild(country_hello);
}

module.exports = QuestionView;
