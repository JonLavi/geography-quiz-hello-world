// Path 1
// Datababase request to MongoDB
// Return an array of country/hello objects
// Save into local constant

// Path 2
// Use dummy data to request to request all of those countries API objects

const Request = require('../helpers_request_helper.js');

const CountriesCollection = function () {
  this.hellos = []
}


CountriesCollection.prototype.buildGameData = function () {
  /// do path 1: this.retrieveAllHellos();
  /// do path 2
  /// combine
};

CountriesCollection.prototype.retrieveAllHellos = function () {
  const hellosRequest = new Request('api/hellos')
  request
    .get()
    .then((listItems) => {
      this.hellos = listItems
    }
  return this.hellos
};


module.exports = ContriesCollection;
