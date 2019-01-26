const PubSub = require('../helpers/pub_sub.js');

const Game = function () {
  this.countries_data = []
  this.numberOfRounds = 5
  this.selectionForGame = []
};

Game.prototype.bindEvents() = function () {
  PubSub.subscribe('Countries:game-data', (evt) => {
    this.countries_data = evt;

    this.prepareGame();


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






module.exports = Game;
