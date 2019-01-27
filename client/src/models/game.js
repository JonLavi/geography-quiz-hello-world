const PubSub = require('../helpers/pub_sub.js');
const dummyGameData = require('../data/dummy_game_data.js')

const Game = function () {
  this.countries_data = []
  this.selectionForGame = []
  this.numberOfRounds = 3
  this.currentQuestion = []
  this.score = 0
};

Game.prototype.bindEvents = function () {
  // PubSub.subscribe('Countries:game-data', (evt) => {
    // this.countries_data = evt.detail;
    this.countries_data = dummyGameData // substitude data from server with dummy
    this.prepareGame();

    this.displayNewQuestion();


    PubSub.subscribe('AnswerView:answer-submitted', (evt) => {
      result = this.evaluateAnswer(evt.detail);
      PubSub.publish('Game:result-ready', result);

      this.givePoints(result, this.score);
      PubSub.publish('Game:score-given', this.score);
    });

    PubSub.subscribe('NextQuestionView:button-pressed', (evt) => {
      this.displayNewQuestion();
    });

  // });
};


Game.prototype.displayNewQuestion = function () {

  if (this.selectionForGame.length = 0) {
    console.log('game over!'); // workflow for complete game would go here
  } else {
    let this.currentQuestion = this.selectionForGame[0];
    let questionData = { name: this.currentQuestion.name, hello: this.currentQuestion.hello }
    PubSub.publish('Game:question-data-ready', questionData);
    this.selectionForGame.shift();
  }

};


/////// Check answer workflow ///////

Game.prototype.evaluateAnswer = function () {
  if (this.currentQuestion.capital.toLowerCase() === answer.toLowerCase()){
    return true;
  } else {
    return false;
  }
};

Game.prototype.givePoints = function (result, score) {
  if (result) { score += 1};
};


/////// Prepare game workflow ///////

Game.prototype.prepareGame = function () {
  const shuffledCountries = this.shuffleCountries(this.countries_data);
  this.selectionForGame = shuffledCountries.slice(0, this.numberOfRounds);
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
