// Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

// Style sheets
require('./app.css');

// Component Registry

// Models

// Other Dependencies
var moment = require('moment');
var _ = require('underscore');

var App = React.createClass({
    // mixins: [ReactFireMixin],
	getInitialState () {
		return {
            formData: {}
		}
	},
	componentWillMount () {
		// var peopleRef = new Firebase("https://blazing-dtp.firebaseio.com/people");
  //       this.bindAsArray(peopleRef, "people");
    },
    addPerson (event) {
        event.preventDefault();

        // this.firebaseRefs['people'].push({
        //     ID: parseInt(_.uniqueId()),
        //     name: 'Drew',
        //     birthday: moment(new Date('1986/10/03')).format('LL'),
        //     age: moment().diff(new Date('1986/10/03'), 'years')
        // });
	},
    render () {
    	return (
            <div>
        		<section>
                    <div className="section-container">
                        <div className="row">
                            <div className="col-md-12">
                                <img src="/app/components/App/beerbadge.png" className="img-responsive center-block"></img>
                            </div>
                        </div>
            			<div className="row">
                            <div className="col-md-6">
                                <h3>Search for beer:</h3>
                                <div className="beer-filter-container">
                                    
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
            </div>
    	);
    }
});

// Rendering
ReactDOM.render(<App />, document.getElementById('app-container'));
