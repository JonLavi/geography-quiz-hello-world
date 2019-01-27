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
      center: [40,0],
      zoom: 3.1,
      dragging: true,
      scrollWheelZoom: true,

    });

// Map option 1
    const baselayer = WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
      tileSize: 256,
      bounds: [[-85, -180], [85, 180]],
      minZoom: 0,
      maxZoom: 16,
      attribution: 'WebGLEarth',
      tms: true
    }).addTo(map);


// Map option 2
    // var osm = WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    //   attribution: '© OpenStreetMap contributors'
    // }).addTo(map);

    let before = null;
            requestAnimationFrame(function animate(now) {
                var c = map.getPosition();
                var elapsed = before? now - before: 0;
                before = now;
                map.setCenter([c[0], c[1] + 0.1*(elapsed/30)]);
                requestAnimationFrame(animate);
            })



}




  WebGLView.prototype.TestBindAnswerEvents = function () {


      const imported = document.createElement('script');
      imported.src = 'http://www.webglearth.com/v2/api.js';
      imported.async = true
      document.head.appendChild(imported);


        const map = WE.map('map', {
          // center: this.center,
          zoom: 3.5,
          dragging: true,
          scrollWheelZoom: true
        });

        var osm = WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);


        PubSub.subscribe('Countries:game-data', (event) => {
          this.gameData = event.detail[0];


        const marker = WE.marker(this.gameData.latlng).addTo(map);
        marker.bindPopup(`<b>${this.gameData.name}<br><img src='${this.gameData.flag}' height='40' width='60'><br>Capital: ${this.gameData.capital}<br>Population: ${this.gameData.population}<br>Currency: ${this.gameData.currencies[0].name}</b>`, {maxWidth: 150, closeButton: false});

        map.panTo(this.gameData.latlng);

    });
  };





  module.exports = WebGLView
