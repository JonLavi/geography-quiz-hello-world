// Path 1
// Datababase request to MongoDB
// Return an array of country/hello objects
// Save into local constant

// Path 2
// Use dummy data to request to request all of those countries API objects

<<<<<<< HEAD

const Request = require('../helpers/request_helper.js');
=======
const RequestHelper = require('../helpers/request_helper.js');
>>>>>>> develop
const PubSub = require('../helpers/pub_sub.js');
const sample_data = require('../data/dummy.js')



const Countries = function () {
  this.apiCountries = [];
  this.hellos = []
  this.holder = []

};

<<<<<<< HEAD
=======
Countries.prototype.buildGameData = function () {
  /// do path 1: this.retrieveAllHellos();
  /// do path 2: this.getCountriesAPIData();
  /// combine:   this.combineData();
  /// publish to game.js
};
>>>>>>> develop

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
  })
<<<<<<< HEAD
}

  Countries.prototype.bindEvents = function () {
    let helloData = []
    PubSub.subscribe('Hello:data-loaded', (event) => {
      helloData = event.detail;
      console.log('Hello Data:', helloData);
      this.hellos.push(helloData)

    })

  }


=======
};

>>>>>>> develop
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
<<<<<<< HEAD
return filteredObjectArray
};

=======
  return filteredObjectArray
};

Countries.prototype.retrieveAllHellos = function () {
  const hellosRequest = new RequestHelper('api/hellos')
  request
    .get()
    .then((listItems) => {
      this.hellos = listItems
    })
  return this.hellos
}
>>>>>>> develop

ContiresCollection.prototype.combineData = function (){
  const countryHellos = this.hellos;
  let countryApiData = this.countries;
  countryApiData.forEach((apiCountry) => {
    countryHellos.forEach((helloCountry) =>{
      if (apiCountry.name === helloCountry.name){
        apiCountry.hello = helloCountry.hello;
      }
    })
  })
  return countryApiData;
};


module.exports = Countries
