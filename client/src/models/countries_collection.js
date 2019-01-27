// Path 1
// Datababase request to MongoDB
// Return an array of country/hello objects
// Save into local constant

// Path 2
// Use dummy data to request to request all of those countries API objects


const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const sample_data = require('../data/dummy.js')



const Countries = function () {
  this.apiCountries = [];
  this.hellos = []
  this.holder = []

};


Countries.prototype.getCountriesAPIData = function () {

  const requestHelper = new Request('https://restcountries.eu/rest/v2/all');
  const myPromise = requestHelper.get()
  myPromise.then((data) => {
    this.apiCountries = data
    filteredCountries = this.filterData(this.apiCountries, sample_data)
    console.log('filtered',filteredCountries);
    this.holder = filteredCountries
    PubSub.publish('Countries:game-data', this.holder)
  })
}

  Countries.prototype.bindEvents = function () {
    PubSub.subscribe('Hello:data-loaded', (event) => {
      let helloData = event.detail;
      console.log('Hello Data:', helloData);
      helloData = this.hellos
    })
  }


Countries.prototype.filterData = function (apiData, sampleData) {
  // debugger
  let filteredObjectArray = []
  sampleData.forEach((country) => {
    apiData.forEach((apiCountry) => {
      if (apiCountry.name === country.name) {
        apiCountry.hello = country.hello
        filteredObjectArray.push(apiCountry)
      }
    }
  )
  })
return filteredObjectArray
};



module.exports = Countries
