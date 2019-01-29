const Countries = require ('./models/countries_collection.js')
const Hello = require ('./models/hello_collection.js')
const WebGLView = require ('./views/webglView.js')
const InputView = require ('./views/input_view.js')
const QuestionView = require('./views/question_view.js')
const ResultView = require('./views/result_view.js')
const ButtonView = require('./views/button_view.js')
const ScoreView = require('./views/score_view.js')
const GameOverView = require('./views/game_over.js')
const ModalView = require('./views/modal_view.js')

const sampleData = require('./data/dummy.js')
const Game = require('./models/game.js')

document.addEventListener('DOMContentLoaded', () => {
// debugger
  console.log('JavaScript Loaded');


  // const welcomeScreen = document.querySelector('#quiz')
  // const welcome = new WelcomeView(welcomeScreen);
  // welcome.bindEvents()
const modalarea = document.querySelector('#myModal')
const modalFormView = new ModalView(modalarea)
modalFormView.bindEvents()

const inputForm = document.querySelector('section#input-form')
const inputFormView = new InputView(inputForm)
inputFormView.bindEvents()

const skipbutton = document.querySelector('button#skip')
  const skipButtonView = new ButtonView(skipbutton)
  skipButtonView.bindEvents()


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

  const resultSection = document.querySelector('section#result');
  const resultView = new ResultView(resultSection);
  resultView.bindEvents();

  const scoreSection = document.querySelector('section#score');
  const scoreView = new ScoreView(scoreSection);
  scoreView.bindEvents();

  const gameOver = new GameOverView;
  gameOver.bindEvents()




});
