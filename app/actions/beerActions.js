var AppDispatcher = require('../dispatchers/AppDispatcher');
var appConstants = require('../constants/appConstants');

var beerActions = {
  addBeer: function(item) {
    AppDispatcher.handleAction({
      actionType: appConstants.ADD_BEER,
      data: item
    });
  },
  removeBeer: function(index) {
    AppDispatcher.handleAction({
      actionType: appConstants.REMOVE_BEER,
      data: index
    })
  },
  clearBeers: function() {
    AppDispatcher.handleAction({
      actionType: appConstants.CLEAR_BEERS,
      data: {}
    })
  }
};

module.exports = beerActions;