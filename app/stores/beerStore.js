var AppDispatcher = require('../dispatchers/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var _store = {
    beers: []
}

var addBeer (item) {
    _store.beers.push(item);
}

var removeBeer (index) {
    _store.beers.splice(index, 1);
}

var beerStore = objectAssign({}, EventEmitter.prototype, {
    addChangeListener (cb) {
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener (cb) {
        this.removeListener(CHANGE_EVENT, cb);
    },
    getBeers (){
        return _store.beers;
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch(action.actionType) {
        case appConstants.ADD_ITEM:
            addBeer(action.data);
            beerStore.emit(CHANGE_EVENT);
            break;
        case appConstants.REMOVE_ITEM:
            removeBeer(action.data);
            beerStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});

module.exports = beerStore;