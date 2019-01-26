const PubSub = require('../helpers/pub_sub.js');

const Game = function () {
  this.countries_data = []
  this.numberOfRounds = 5
  this.selectionForGame = []
};

Game.prototype.bindEvents() = function () {
  PubSub.subscribe('Countries:game-data', (evt) => {
    this.countries_data = evt.detail;

    this.prepareGame();

    this.startGame();
  })
};

Game.prototype.prepareGame = function () {
  const countrySelection = this.shuffleCountries(this.countries_data);
  this.selectionForGame = countrySelection.slice(0, ( this.numberOfRounds - 1 ));
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
  let roundNumber = 0

  while roundNumber < this.numberOfRounds {
    this.playRound();
  }

  console.log('Game over!');
};


Game.prototype.playRound = function () {
  let currentQuestion = this.selectionForGame[roundNumber];
  let questionData = {
    "name": currentQuestion.name,
    "capital": currentQuestion.capital
  }
  PubSub.publish('Game:question-data-ready', questionData);

  PubSub.subscribe('SkipView:skip-button-pressed', () => {
    roundNumber ++;
    // end round, increase round number, start new round
  });

  PubSub.subscribe('InputView:answer-submitted', (evt) => {
    result = this.evaluateAnswer(evt.detail);
    PubSub.publish('ResultView:result-ready', result);
    roundNumber ++;
    // end round
  });
};





module.exports = Game;
