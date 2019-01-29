const PubSub = require('../helpers/pub_sub.js');
const WebGLView = require('./webglView.js')

const GameOverView = function() {
}

GameOverView.prototype.bindEvents = function () {

PubSub.subscribe('Game:game-over', (evt) => {
  // console.log(evt.detail);
  // debugger
  this.renderGameOver(evt.detail)
  this.renderMap()
})
};

GameOverView.prototype.renderGameOver = function (score) {
    this.clearView('#question')
    this.clearView('#input-form')
    this.clearView('#result')
    this.clearView('#score')
    this.clearView('#controls')


    const position = document.querySelector('#question')
    const resultParagraph = document.createElement('h2');
    resultParagraph.textContent = `Game Over. Your score was ${score}!!`
    position.appendChild(resultParagraph)


    const button = document.createElement('button')
    button.id = 'restart'
    button.textContent = 'Play again'
    button.addEventListener('click', function() {
      document.location.reload(true)
    })
    position.appendChild(button)


}

GameOverView.prototype.clearView = function (id) {
  const clearView = document.querySelector(id)
  clearView.innerHTML = ''

};



GameOverView.prototype.renderMap = function () {

    const gameOverMap = document.querySelector('#globe')
    gameOverMap.innerHTML = ''
    mapscreen = new WebGLView (gameOverMap, [55,0])

    const imported = document.createElement('script');
    imported.src = 'http://www.webglearth.com/v2/api.js';
    imported.async = true
    document.head.appendChild(imported);

      const map = WE.map('globe', {
        center: [40,0],
        zoom: 3.1,
        dragging: true,
        scrollWheelZoom: true,

      });

      const baselayer = WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
        tileSize: 256,
        bounds: [[-85, -180], [85, 180]],
        minZoom: 0,
        maxZoom: 16,
        attribution: 'WebGLEarth',
        tms: true
      }).addTo(map);


      let before = null;
              requestAnimationFrame(function animate(now) {
                  var c = map.getPosition();
                  var elapsed = before? now - before: 0;
                  before = now;
                  map.setCenter([c[0], c[1] + 0.1*(elapsed/30)]);
                  requestAnimationFrame(animate);
              })

  }




module.exports = GameOverView
