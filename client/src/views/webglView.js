const PubSub = require('../helpers/pub_sub.js');
const WebGLView = function (container, center, marker){
  this.container = container
  this.center = center
  this.marker = marker
  this.gameData = []
}

WebGLView.prototype.initialiseWebGL = function () {

  const imported = document.createElement('script');
  imported.src = 'http://www.webglearth.com/v2/api.js';
  imported.async = true
  document.head.appendChild(imported);


    const map = WE.map('map', {
      center: this.center,
      zoom: 3.5,
      dragging: true,
      scrollWheelZoom: true
    });

    var baselayer = WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
      tileSize: 256,
      bounds: [[-85, -180], [85, 180]],
      minZoom: 0,
      maxZoom: 16,
      attribution: 'WebGLEarth',
      tms: true
    }).addTo(map);

    // var osm = WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    //   attribution: '© OpenStreetMap contributors'
    // }).addTo(map);


    var marker = WE.marker([46, 2]).addTo(map);
    marker.bindPopup("<b>France<br><img src='https://restcountries.eu/data/fra.svg' height='40' width='60'><br>Capital: Paris<br>Population: 66710000<br>Currency: Euro</b>", {maxWidth: 150, closeButton: false});
    //
    // var before = null;
    //         requestAnimationFrame(function animate(now) {
    //             var c = map.getPosition();
    //             var elapsed = before? now - before: 0;
    //             before = now;
    //             map.setCenter([c[0], c[1] + 0.1*(elapsed/30)]);
    //             requestAnimationFrame(animate);
    //         });



}


WebGLView.prototype.panTo = function (coords) {
    this.map.panTo(coords);
  }


  WebGLView.prototype.TestBindAnswerEvents = function () {
    PubSub.subscribe('Countries:game-data', (event) => {
      this.gameData = event.detail[0];
      console.log('TestGameData', this.gameData);

    });
  };





  module.exports = WebGLView
