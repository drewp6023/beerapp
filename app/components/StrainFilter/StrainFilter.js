var React = require('react');
var ReactDOM = require('react-dom');

// Components

// Models
var LeaflyRequest = require('../../models/LeaflyRequestModel.js');
console.log(LeaflyRequest);

var StrainFilter = React.createClass({
	render () {
		return (
			<form role="form">
 				<div className="form-group">
 					<label>Page</label>
 					<input type="" className="form-control" />
 				</div>
 				<div className="form-group">
 					<label>Take</label>
 					<input type="" className="form-control" />
 				</div> 				
			</form>
		);
	}
});

module.exports = StrainFilter;