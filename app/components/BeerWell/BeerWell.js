var React = require('react');

// Styles
require('./beerWell.css');

var BeerWell = React.createClass({
	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="text-center"><strong>{this.props.beerObject.name}</strong></div>
					</div>
				</div>	
				<div className="row text-center">
					<div className="col-md-6">
						<span>{this.props.beerObject.abv ? this.props.beerObject.abv + "%" : "?"}</span>
						<br />
						<span>ABV</span>
					</div>
					<div className="col-md-6">
						<span>{this.props.beerObject.ibu}</span>
						<br />
						<span>IBU</span>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = BeerWell;