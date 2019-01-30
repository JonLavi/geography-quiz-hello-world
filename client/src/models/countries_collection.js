const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const sample_data = require('../data/dummy.js')

const Countries = function () {
  this.apiCountries = [];
  this.hellos = []
  this.holder = []

};

Countries.prototype.bindEvents = function () {
  let helloData = []
  PubSub.subscribe('Hello:data-loaded', (event) => {
    helloData = event.detail;
    console.log('Hello Data:', helloData);
    this.hellos.push(helloData);
  });
};

Countries.prototype.getCountriesAPIData = function () {

  const requestHelper = new Request('https://restcountries.eu/rest/v2/all');
  const myPromise = requestHelper.get()
  myPromise.then((data) => {
    this.apiCountries = data
    PubSub.publish('Countries:restcountriesAPI-data', this.apiCountries)
    filteredCountries = this.filterData(this.apiCountries, this.hellos[0])
    console.log('filtered',filteredCountries);
    this.holder = filteredCountries
    PubSub.publish('Countries:game-data', this.holder)
  });
};


Countries.prototype.filterData = function (apiData, helloData) {
  let filteredObjectArray = []
  helloData.forEach((country) => {
    apiData.forEach((apiCountry) => {
      if (apiCountry.name === country.name) {
        apiCountry.hello = country.hello
        filteredObjectArray.push(apiCountry)
      }
    })
  })
return filteredObjectArray
};





module.exports = Countries
