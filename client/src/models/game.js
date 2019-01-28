const PubSub = require('../helpers/pub_sub.js');
const dummyGameData = require('../data/dummy_game_data.js')

const Game = function () {
  this.countries_data = []
  this.numberOfRounds = 3
  this.score = 0
};

Game.prototype.bindEvents = function () {
  // PubSub.subscribe('Countries:game-data', (evt) => {
    // this.countries_data = evt.detail;

    this.countries_data = dummyGameData // substitude data from server with dummy
    const questionsForGame = this.prepareGame(this.countries_data, this.numberOfRounds);
    debugger
    const currentQuestionData = this.makeNewQuestion(questionsForGame);
    PubSub.publish('Game:question-data-ready', currentQuestionData);

    PubSub.subscribe('AnswerView:answer-submitted', (evt) => {
      result = this.evaluateAnswer(currentQuestionData, evt.detail);
      PubSub.publish('Game:result-ready', result);

      this.givePoints(result, this.score);
      PubSub.publish('Game:score-given', this.score);
    });

    PubSub.subscribe('NextQuestionView:button-pressed', (evt) => {
      this.makeNewQuestion();
    });

  // });
};


Game.prototype.makeNewQuestion = function (questionPool) {

  let currentQuestion = {};

  if (questionPool.length === 0) {
    console.log('game over!'); // workflow for complete game would go here
  } else {
    console.log(questionPool[0]);
    currentQuestion = questionPool[0];
    let currentQuestionData = { name: currentQuestion.name, hello: currentQuestion.hello }
    questionPool.shift();
  }

  return currentQuestionData

};


/////// Check answer workflow ///////

Game.prototype.evaluateAnswer = function (currentQuestionData, answer) {
  if (currentQuestionData.capital.toLowerCase() === answer.toLowerCase()){
    return true;
  } else {
    return false;
  }
};

Game.prototype.givePoints = function (result, score) {
  if (result) { score += 1};
};


/////// Prepare game workflow ///////

Game.prototype.prepareGame = function (arrayOfCountries, numberOfRounds) {
  const shuffledCountries = this.shuffleCountries(arrayOfCountries);
  return shuffledCountries.slice(0, numberOfRounds);
};

Game.prototype.shuffleCountries = function(countriesArray) {
  let currentIndex = countriesArray.length;
  let temporaryValue;
  let randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = countriesArray[currentIndex];
    countriesArray[currentIndex] = countriesArray[randomIndex];
    countriesArray[randomIndex] = temporaryValue;
  }

  return countriesArray;
}



module.exports = Game;
