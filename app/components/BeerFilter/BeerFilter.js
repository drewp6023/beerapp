var React = require('react');

// Components

// Models   

var BeerFilter = React.createClass({
    getInitialState () {
        return {
            noValidate: true,
            submissionUrl: 'http://api.brewerydb.com/v2/beers',
            apikey: '17ec26c4245746fbc069e6f234fc67f1',
            numberOfPages: 0,
            formData: {},
            serverResponse: ''
        };  
    },
    loadServerData (e) {
        e.preventDefault();
        var self = this;

        $.ajax({
            type: 'GET',
            url: this.state.submissionUrl,
            data: {
                key: this.state.apikey,
                format: 'json',
                name: this.state.formData.name,
                abv: this.state.formData.abv,
                ibu: this.state.formData.ibu
            }
        })
        .done(function(response) {
            console.log("response", response);
            self.setState({
                numberOfPages: response.numberOfPages,
                serverResponse: response.data
            });
        })
        .fail(function(response) {
            console.log("fail", response);
        });
    },
    handleChange (field, event) {
        console.log()
        this.state.formData[field] = event.target.value;
    },
    render () {
        return (
            <form role="form" className="form-horizontal" noValidate={this.state.noValidate} onSubmit={this.loadServerData}>
                <div className="form-group">
                    <label className="control-label col-md-2">Name</label>
                    <div className="col-md-10"><input type="text" className="form-control" onChange={this.handleChange.bind(this, "name")} /></div>
                </div>   
                <div className="form-group">
                    <label className="control-label col-md-2">ABV</label>
                    <div className="col-md-10"><input type="text" className="form-control" onChange={this.handleChange.bind(this, "abv")} /></div>
                </div>  
                <div className="form-group">
                    <label className="control-label col-md-2">IBU</label>
                    <div className="col-md-10"><input type="text" className="form-control" onChange={this.handleChange.bind(this, "ibu")} /></div>
                </div>
                <button type="submit" className="btn btn-primary pull-right">Search</button>                                                                                           
                <span>Number of pages: {this.state.numberOfPages}</span>
            </form>
        );
    }
});

module.exports = BeerFilter;