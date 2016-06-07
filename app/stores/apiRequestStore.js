var _store = {
    apiRequest: {
        submissionUrl: 'http://api.brewerydb.com/v2/',
        apiKey: '17ec26c4245746fbc069e6f234fc67f1',
        endpoint: 'beers',        
    }
}

var apiRequestStore = objectAssign({}, EventEmitter.prototype, {
    addChangeListener (cb) {
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener (cb) {
        this.removeListener(CHANGE_EVENT, cb);
    },
    getApiRequest (){
        return _store.apiRequest;
    }
});

module.exports = apiRequestStore;