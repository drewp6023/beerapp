var React = require('react');

var BeerWell = React.createClass({
	getInitialState () {
		return {

		}
	},
	render () {
		<div>
			{
				this.props.beerObject(function(obj, index) {
					<div className="well well-lg">
						<strong>{obj.nameDisplay}</strong>
					</div>
				});
			}
		</div>
	}
});

module.exports = BeerWell;