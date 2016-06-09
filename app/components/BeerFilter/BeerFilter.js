var React = require('react');
var beerStore = require('../../stores/beerStore.js');
var beerActions = require('../../actions/beerActions');
var apiRequestStore = require('../../stores/apiRequestStore.js');

// Components
var BasicInputBox = require('../BasicInputBox/BasicInputBox');

// Models   

var BeerFilter = React.createClass({
    getInitialState () {
        return {
            noValidate: true,
            submissionUrl: 'http://api.brewerydb.com/v2/',
            apiKey: '17ec26c4245746fbc069e6f234fc67f1',
            endpoint: 'beers',
            numberOfPages: 0,
            totalResults: 0,
            serverResponse: '',
            beerAbv: '',
            beerIbu: '',
            beerName: '',
            loading: false,
            loadingMessage: '',
            beers: ''
        };  
    },
    componentDidMount () {
        beerStore.addChangeListener(this._onChange);
    },
    componentWillUnmount () {
        beerStore.removeChangeListener(this._onChange);
    },
    _onChange () {
        this.setState({
            beers: beerStore.getBeers()
        });
    },
    submit (e) {
        e.preventDefault();
        beerActions.clearBeers();
        var self = this;
        var _url = this.state.submissionUrl + this.state.endpoint;
        var data = {
            key: this.state.apiKey,
            format: 'json'
        };

        if (this.state.beerName) data.name = this.state.beerName;
        if (this.state.beerAbv) data.abv = this.state.beerAbv;
        if (this.state.beerIbu) data.ibu = this.state.beerIbu;


        $.ajax({
            type: 'GET',
            url: _url,
            data: data,
            success (response) {
                console.log("success", response);
                self.setState({
                    numberOfPages: response.numberOfPages ? response.numberOfPages : 0,
                    totalResults: response.totalResults ? response.totalResults : 0,
                    serverResponse: response.data
                });

                if (response.data) {
                    response.data.map(function(obj, index) {
                        beerActions.addBeer(obj);
                    });                   
                }
            },
            error (response) {
                console.log("fail", JSON.parse(response.responseText));
            }
        });
    },
    nameChange (e) {
        this.setState({
            beerName: e.target.value
        })
    },
    abvChange (e) {
        this.setState({
            beerAbv: e.target.value
        })
    },
    ibuChange (e) {
        this.setState({
            beerIbu: e.target.value
        })
    },
    // endpointChange (str) {
    //     if (typeof str !== 'string') return;

    //     this.setState({
    //         endpoint: str
    //     })
    // },
    render () {
        return (
            <form role="form" noValidate={this.state.noValidate} onSubmit={this.submit}>
                <div className="form-group">
                    <label className="control-label col-md-2">Name</label>
                    <div className="col-md-10"><BasicInputBox val={this.state.beerName} valChange={this.nameChange} /></div>
                </div>   
                <div className="form-group">
                    <label className="control-label col-md-2">ABV</label>
                    <div className="col-md-10"><BasicInputBox val={this.state.beerAbv} valChange={this.abvChange} /></div>
                </div>  
                <div className="form-group">
                    <label className="control-label col-md-2">IBU</label>
                    <div className="col-md-10"><BasicInputBox val={this.state.beerIbu} valChange={this.ibuChange} /></div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary pull-right">Search</button>                                                                                           
                        <div>Number of pages: {this.state.numberOfPages}</div>
                        <div>Total results: {this.state.totalResults}</div>
                    </div>
                </div>
            </form>
        );
    }
});

module.exports = BeerFilter;