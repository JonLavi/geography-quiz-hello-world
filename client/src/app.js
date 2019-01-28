const Countries = require ('./models/countries_collection.js')
const Hello = require ('./models/hello_collection.js')
const WebGLView = require ('./views/webglView.js')
const QuestionView = require('./views/question_view.js')
const InputView = require ('./views/input_view.js')


const sampleData = require('./data/dummy.js')
const Game = require('./models/game.js')

document.addEventListener('DOMContentLoaded', () => {
// debugger
  console.log('JavaScript Loaded');

const inputForm = document.querySelector('section#input-form')
const inputFormView = new InputView(inputForm)
inputFormView.bindEvents()


  const container = document.querySelector('#map')
  const viewer = new WebGLView(container, [55,0])

  // viewer.initialiseWebGL()
  // viewer.TestBindAnswerEvents()
  // viewer.exlporationMode()




  const countriesData = new Countries
  countriesData.bindEvents()
  countriesData.getCountriesAPIData()


  const newGame = new Game()
  newGame.bindEvents();


  const hellos = new Hello;
  hellos.getData()

  const questionSection = document.querySelector('section#question');
  const questionView = new QuestionView(questionSection);
  questionView.bindEvents();

});
