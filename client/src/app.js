const ButtonView = require('./views/button_view.js');
const Countries = require('./models/countries_collection.js');
const Game = require('./models/game.js');
const GameOverView = require('./views/game_over.js');
const Hello = require('./models/hello_collection.js');
const InputView = require('./views/input_view.js');
const ModalView = require('./views/modal_view.js');
const QuestionView = require('./views/question_view.js');
const ResultView = require('./views/result_view.js');
const ScoreView = require('./views/score_view.js');
const WebGLView = require('./views/webglView.js');

document.addEventListener('DOMContentLoaded', () => {

  const modalarea = document.querySelector('#myModal');
  const modalFormView = new ModalView(modalarea);
  modalFormView.bindEvents();

  const inputForm = document.querySelector('section#input-form')
  const inputFormView = new InputView(inputForm)
  inputFormView.bindEvents()

  const skipButton = document.querySelector('button#skip')
  const skipButtonView = new ButtonView(skipButton)
  skipButtonView.bindEvents()

  const globeContainer = document.querySelector('#globe')
  const globeView = new WebGLView(globeContainer, [55, 0])

  // globeView.initialiseWebGL()
  globeView.TestBindAnswerEvents()
  // viewer.exlporationMode()

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
  gameOver.bindEvents();

  const hellosDb = new Hello;
  hellosDb.getData();

  const countriesData = new Countries;
  countriesData.bindEvents();
  countriesData.getCountriesAPIData();

  const newGame = new Game();
  newGame.bindEvents();

})
