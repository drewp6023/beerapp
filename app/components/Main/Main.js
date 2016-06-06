var React = require('react');

// Style sheets
require('./main.css');

// Components
var BeerFilter = require("../BeerFilter/BeerFilter");

var Main = React.createClass({
    getInitialState () {
        return {

        }
    },
    render () {
        return (
            <section>
                <div className="section-container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src="/app/components/Main/beerbadge.png" className="img-responsive center-block"></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Search for Beer:</h3>
                            <div className="beer-filter-container">
                                <BeerFilter />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3>Output</h3>
                            <div className="beer-filter-container">

                            </div>                            
                        </div>                    
                    </div>
                </div>
            </section>            
        );
    }
});

module.exports = Main;