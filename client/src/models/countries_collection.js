// Path 1
// Datababase request to MongoDB
// Return an array of country/hello objects
// Save into local constant

// Path 2
// Use dummy data to request to request all of those countries API objects


const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const sample_data = require('../data/dummy.js')


const Countries = function () {
  this.apiCountries = [];
  this.hellos = [];
};

Countries.prototype.getCountriesAPIData = function () {
  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all');
  const myPromise = requestHelper.get()
  myPromise.then((data) => {
    this.apiCountries = data
    console.log(this.apiCountries);
    const filteredCountries =this.filterData(this.apiCountries, sample_data)
    console.log(filteredCountries);
  })


};



Countries.prototype.filterData = function (apiData, sampleData) {
  debugger
  let filteredObjectArray = []
  sampleData.forEach((country) => {
    apiData.forEach((apiCountry) => {
      if (apiCountry.name === country.name) {
        filteredObjectArray.push(apiCountry)
      }
    }
  )
  })
  return filteredObjectArray
};

Countries.prototype.buildGameData = function () {
  /// do path 1: this.retrieveAllHellos();
  /// do path 2: this.getCountriesAPIData();
  /// combine:   this.combineData();
  /// publish to game.js
};

Countries.prototype.retrieveAllHellos = function () {
  const hellosRequest = new Request('api/hellos')
  request
    .get()
    .then((listItems) => {
      this.hellos = listItems
    }
  return this.hellos
};


module.exports = Countries
