const PubSub = require('../helpers/pub_sub.js');
const dummyGameData = require('../data/dummy_game_data.js')

const Game = function () {
  this.countries_data = []
  this.numberOfRounds = 3
  this.roundNumber = 0
  this.selectionForGame = []
  this.currentQuestion
};

Game.prototype.bindEvents = function () {
  // PubSub.subscribe('Countries:game-data', (evt) => {
    // this.countries_data = evt.detail;

    this.countries_data = dummyGameData

    this.prepareGame();

    this.startGame();
  // })
};

Game.prototype.prepareGame = function () {
  const shuffledCountries = this.shuffleCountries(this.countries_data);
  this.selectionForGame = shuffledCountries.slice(0, this.numberOfRounds );
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


Game.prototype.startGame = function () {
  this.roundNumber = 0
  debugger
  while (this.roundNumber < this.numberOfRounds) {
    this.playRound();
  }

  console.log('Game over!');
};


Game.prototype.playRound = function () {
  this.currentQuestion = this.selectionForGame[this.roundNumber];
  let questionData = {
    name: this.currentQuestion.name,
    hello: this.currentQuestion.hello
  }

  PubSub.publish('Game:question-data-ready', questionData);

  // PubSub.subscribe('SkipView:skip-button-pressed', () => {
  //   roundNumber ++;
  //   // end round, increase round number, start new round
  // });

  PubSub.subscribe('InputView:answer-submitted', (evt) => {
    result = this.evaluateAnswer(evt.detail);

    PubSub.publish('ResultView:result-ready', result);
  });

  this.roundNumber ++;
};

Game.prototype.evaluateAnswer = function (answer) {
  if (this.currentQuestion.capital.toLowerCase() === answer.toLowerCase()){
    return true;
  } else {
    return false;
  }
};



module.exports = Game;
