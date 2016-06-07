var React = require('react');

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
            serverResponse: '',
            beerAbv: '',
            beerIbu: '',
            beerName: '',
            loading: false,
            loadingMessage: ''
        };  
    },
    submit (e) {
        e.preventDefault();
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
                    numberOfPages: response.numberOfPages,
                    serverResponse: response.data
                });
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
    endpointChange (str) {
        if (typeof str !== 'string') return;

        this.setState({
            endpoint: str
        })
    },
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
                        <span>Number of pages: {this.state.numberOfPages}</span>
                    </div>
                </div>
            </form>
        );
    }
});

module.exports = BeerFilter;