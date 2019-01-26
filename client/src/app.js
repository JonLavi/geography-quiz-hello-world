const Countries = require ('./models/countries_collection.js')
const GameData = require ('./models/game.js')
const Hello = require ('./models/hello_collection.js')

const sampleData = require('./data/dummy.js')


document.addEventListener('DOMContentLoaded', () => {

  console.log('JavaScript Loaded');


  const gameData = new GameData
  gameData.bindEvents()

  const countriesData = new Countries
  countriesData.getCountriesAPIData()



  const hellos = new Hello;
  hellos.getHellos();
  hellos.bindEvents()



});
