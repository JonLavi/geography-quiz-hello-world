const WebGL = require('http://www.webglearth.com/v2/api.js')

function initialize() {
    var options = { zoom: 3.0, position: [47.19537,8.524404] };
    var earth = new WE.map('earth_div', options);
  }


  module.exports = WebGL
