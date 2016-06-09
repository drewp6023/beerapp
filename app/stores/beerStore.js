var AppDispatcher = require('../dispatchers/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');

var CHANGE_EVENT = 'change';

// "MODEL"
var _store = {
    beers: []
}

// SETTERS
var addBeer = function(item) {
    _store.beers.push(item);
}
var removeBeer = function(index) {
    _store.beers.splice(index, 1);
}
var clearBeers = function() {
    _store.beers = [];
}

// STORE OBJECT
var beerStore = objectAssign({}, EventEmitter.prototype, {
    addChangeListener (cb) {
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener (cb) {
        this.removeListener(CHANGE_EVENT, cb);
    },
    getBeers () {
        return _store.beers;
    },
    getBeer (beerID) {
        var index = _.findIndex(_store.beers, {id: beerID});
        return _store.beers[index];
    }
});

// DISPATCH CALLBACK
AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch(action.actionType) {
        case appConstants.ADD_BEER:
            addBeer(action.data);
            beerStore.emit(CHANGE_EVENT);
            break;
        case appConstants.REMOVE_BEER:
            removeBeer(action.data);
            beerStore.emit(CHANGE_EVENT);
            break;
        case appConstants.CLEAR_BEERS:
            clearBeers();
            beerStore.emit(CHANGE_EVENT);
            break;            
        default:
            return true;
    }
});

module.exports = beerStore;