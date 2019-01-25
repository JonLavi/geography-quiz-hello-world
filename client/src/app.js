const Countries = require ('./models/countries_collection.js')


document.addEventListener('DOMContentLoaded', () => {

  console.log('JavaScript Loaded');

  
  const countriesData = new Countries()
  filteredCountries = countriesData.getCountriesAPIData()
  console.log(filteredCountries);
});
