const Countries = require ('./models/countries_collection.js')
const sampleData = require('./data/dummy.js')
const Game = require('./models/game.js')

document.addEventListener('DOMContentLoaded', () => {

  console.log('JavaScript Loaded');


  const countriesData = new Countries()
  countriesData.getCountriesAPIData()

  const newGame = new Game()
  newGame.bindEvents();

});
