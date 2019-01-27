const Countries = require ('./models/countries_collection.js')
const GameData = require ('./models/game.js')
const Hello = require ('./models/hello_collection.js')
const WebGLView = require ('./views/webglView.js')

const sampleData = require('./data/dummy.js')


document.addEventListener('DOMContentLoaded', () => {
// debugger
  console.log('JavaScript Loaded');

  const container = document.querySelector('#map')
  const viewer = new WebGLView(container, [55,0])
  viewer.initialiseWebGL()

  viewer.TestBindAnswerEvents()


  const gameData = new GameData
  gameData.bindEvents()

  const countriesData = new Countries
  countriesData.bindEvents()
  countriesData.getCountriesAPIData()


  const hellos = new Hello;
  hellos.getData()



});
