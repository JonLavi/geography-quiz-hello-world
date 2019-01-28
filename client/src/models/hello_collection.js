const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const fetch = require('node-fetch');

const Hello = function () {
  this.url = 'http://localhost:3000/api/hellos';
  this.request = new Request(this.url);
};

Hello.prototype.getData = function () {
  this.request.get()
    .then((hellos) => {
      PubSub.publish('Hello:data-loaded', hellos);
    })
    .catch(console.error);
};



module.exports = Hello
