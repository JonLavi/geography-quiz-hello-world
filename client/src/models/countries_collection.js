// Path 1
// Datababase request to MongoDB
// Return an array of country/hello objects
// Save into local constant

// Path 2
// Use dummy data to request to request all of those countries API objects

const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const Countries = function () {
  this.countries = [];
};

Countries.prototype.getCountriesAPIData = function () {
  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all');
  requestHelper.get((data) => {
    this.filterData(data);
    PubSub.publish('Countries:API-data-ready', this.countries);
  });
};

Countries.prototype.filterData = function (dummyData) {
 
};




module.exports = Countries
