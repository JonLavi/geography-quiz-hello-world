// Path 1
// Datababase request to MongoDB
// Return an array of country/hello objects
// Save into local constant

// Path 2
// Use dummy data to request to request all of those countries API objects




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
