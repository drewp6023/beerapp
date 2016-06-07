var React = require('react');

// Components

var OutputBox = React.createClass({
	getInitialState () {
		return {

		}
	},
	render () {
		return (
			<section>
				{
					this.props.response.map(function(obj, index) {

					});
				}
			</section>
		);
	}
});

module.exports = OutputBox;