// Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;
var IndexLink = ReactRouter.IndexLink;

// Style sheets
require('./app.css');

// Component Registry
var Main = require('../Main/Main');
var Secondary = require('../Secondary/Secondary');

// Models

// Other Dependencies
var moment = require('moment');
var _ = require('underscore');

var App = React.createClass({
	getInitialState () {
		return {

		}
	},
    render() {
    	return (
            <section>
                <ul className="nav nav-pills">
                    <li className="active"><a href="#">Main</a></li>
                    <li><a href="/secondary">Secondary</a></li>
                </ul>            
                <Main />

                <Router>
                    <Route path="/" component={Main}>
                        <IndexRoute component={Main} />
                        <Route path="secondary" component={Secondary} />
                    </Route>
                </Router>

            </section>
    	);
    }
});

// Rendering
ReactDOM.render(<App />, document.getElementById('app-container'));
