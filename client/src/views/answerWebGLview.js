const WebGLView = function (container, center, marker){
  this.container = container
  this.center = center
  this.marker = marker
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

    // var baselayer = WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
    //   tileSize: 256,
    //   bounds: [[-85, -180], [85, 180]],
    //   minZoom: 0,
    //   maxZoom: 16,
    //   attribution: 'WebGLEarth',
    //   tms: true
    // }).addTo(map);

    var osm = WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // var marker = WE.marker([51.5, -0.09]).addTo(map);
    // marker.bindPopup("<b>Hello world!</b><br>I am a popup.<br /><span style='font-size:10px;color:#999'>Tip: Another popup is hidden in Cairo..</span>", {maxWidth: 150, closeButton: true}).openPopup();
    //
    // var marker2 = WE.marker([30.058056, 31.228889]).addTo(map);
    // marker2.bindPopup("<b>Cairo</b><br>Yay, you found me!", {maxWidth: 120, closeButton: false});


}


WebGLView.prototype.panTo = function (coords) {
    this.map.panTo(coords);
  }







  module.exports = WebGLView
