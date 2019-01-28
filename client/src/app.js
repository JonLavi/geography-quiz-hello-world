const Countries = require ('./models/countries_collection.js')
const GameData = require ('./models/game.js')
const Hello = require ('./models/hello_collection.js')
const WebGLView = require ('./views/webglView.js')

const sampleData = require('./data/dummy.js')
const Game = require('./models/game.js')

document.addEventListener('DOMContentLoaded', () => {
// debugger
  console.log('JavaScript Loaded');

  const container = document.querySelector('#map')
  const viewer = new WebGLView(container, [55,0])

  // viewer.initialiseWebGL()
  // viewer.TestBindAnswerEvents()
  viewer.exlporationMode()


  const gameData = new GameData
  gameData.bindEvents()

  const countriesData = new Countries
  countriesData.bindEvents()
  countriesData.getCountriesAPIData()

<<<<<<< HEAD
  const newGame = new Game()
  newGame.bindEvents();
=======

  const hellos = new Hello;
  hellos.getData()


>>>>>>> develop

});
