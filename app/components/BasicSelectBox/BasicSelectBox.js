var React = require('react');

var BasicSelectBox = React.createClass({
	render () {
		<div>
			<select value={this.props.val}>
				<option value=""></option>
				{
					this.props.options.map(function(item, index) {
						return (
							<option key={index} value={item}></option>
						);
					});
				}
			</select>
		</div>
	}
});

module.exports = BasicSelectBox;