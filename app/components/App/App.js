// Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

// Style sheets
require('./app.css');

// Component Registry
var Main = require('../Main/Main')

// Models

// Other Dependencies
var moment = require('moment');
var _ = require('underscore');

var App = React.createClass({
	getInitialState () {
		return {

		}
	},
    render () {
    	return (
            <div>
                <Main />
            </div>
    	);
    }
});

// Rendering
ReactDOM.render(<App />, document.getElementById('app-container'));
