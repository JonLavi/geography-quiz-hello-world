const PubSub = require('../helpers/pub_sub.js')
const GameData = function () {

};

GameData.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:game-data', (event) => {
    const gameData = event.detail;
    console.log('Country Game Data:', gameData);
  });
};




module.exports = GameData
