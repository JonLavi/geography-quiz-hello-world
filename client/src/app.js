const Countries = require ('./models/countries_collection.js')
const GameData = require ('./models/game.js')

const sampleData = require('./data/dummy.js')


document.addEventListener('DOMContentLoaded', () => {

  console.log('JavaScript Loaded');


  const gameData = new GameData
  gameData.bindEvents()

  const countriesData = new Countries
  countriesData.getCountriesAPIData()


});
