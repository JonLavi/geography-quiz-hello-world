const PubSub = require('../helpers/pub_sub.js');
const WebGLView = function(container, center, marker) {
  this.container = container;
  this.center = center;
  this.marker = marker;
  this.gameData = [];
};

WebGLView.prototype.initialiseWebGL = function() {

  const imported = document.createElement('script');
  imported.src = 'http://www.webglearth.com/v2/api.js';
  imported.async = true;
  document.head.appendChild(imported);

  const map = WE.map('map', {
    center: [40, 0],
    zoom: 3.1,
    dragging: true,
    scrollWheelZoom: true,
  })

  // Map option 1
  const baselayer = WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
    tileSize: 256,
    bounds: [
      [-85, -180],
      [85, 180]
    ],
    minZoom: 0,
    maxZoom: 16,
    attribution: 'WebGLEarth',
    tms: true
  }).addTo(map);

  let before = null;
  requestAnimationFrame(function animate(now) {
    var c = map.getPosition();
    var elapsed = before ? now - before : 0;
    before = now;
    map.setCenter([c[0], c[1] + 0.1 * (elapsed / 30)]);
    requestAnimationFrame(animate);
  })
};

WebGLView.prototype.TestBindAnswerEvents = function() {

  const imported = document.createElement('script');
  imported.src = 'http://www.webglearth.com/v2/api.js';
  imported.async = true
  document.head.appendChild(imported);

  const map = WE.map('globe', {
    // center: this.center,
    zoom: 4,
    dragging: true,
    scrollWheelZoom: true
  });

  const baselayer = WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
    tileSize: 256,
    bounds: [
      [-85, -180],
      [85, 180]
    ],
    minZoom: 0,
    maxZoom: 16,
    attribution: 'WebGLEarth',
    tms: true
  }).addTo(map);

  // FOR GAME DATA
  PubSub.subscribe('Game:question-data-ready', (event) => {
    gameData = event.detail;

    marker = WE.marker(gameData.latlng).addTo(map);
    marker.bindPopup(`<b>${gameData.name}<br><img src='${gameData.flag}' height='40' width='60'><br>Capital: ${gameData.capital}<br>Population: ${gameData.population}<br>Currency: ${gameData.currencies[0].name}</b>`, {
      maxWidth: 150,
      closeButton: false
    })

    map.panTo(gameData.latlng);
  })
};


WebGLView.prototype.exlporationMode = function() {

  const imported = document.createElement('script');
  imported.src = 'http://www.webglearth.com/v2/api.js';
  imported.async = true
  document.head.appendChild(imported);

  const map = WE.map('map', {
    // center: this.center,
    zoom: 3,
    dragging: true,
    scrollWheelZoom: true
  });

  const baselayer = WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
    tileSize: 256,
    bounds: [
      [-85, -180],
      [85, 180]
    ],
    minZoom: 0,
    maxZoom: 16,
    attribution: 'WebGLEarth',
    tms: true
  }).addTo(map);

  // FOR EXPLORATION MODE
  PubSub.subscribe('Countries:restcountriesAPI-data', (event) => {
    explorationData = event.detail;
    explorationData.forEach((country) => {
      const marker = WE.marker(country.latlng).addTo(map);
      marker.bindPopup(`<b>${country.name}<br><img src='${country.flag}' height='40' width='60'><br>Capital: ${country.capital}<br>Population: ${country.population}<br>Currency: ${country.currencies[0].name}`, {
        maxWidth: 150,
        closeButton: false
      })
    })
  })
};

module.exports = WebGLView;
