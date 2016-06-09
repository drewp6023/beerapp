var React = require('react');
var beerStore = require('../../stores/beerStore');

// Components
var BeerWell = require('../BeerWell/BeerWell');

var OutputBox = React.createClass({
	getInitialState () {
		return {
			beers: []
		}
	},
	componentDidMount () {
		beerStore.addChangeListener(this._onChange);
	},
	componentWillUnmount () {
		beerStore.removeChangeListener(this._onChange);
	},
	_onChange () {
		this.setState({
			beers: beerStore.getBeers()
		});
	},
	displayBeers () {
		console.log(this.state.beers);
	},
	render () {
		return (
			<section>
				{
					this.state.beers.map(function(obj, index) {
						return <BeerWell key={index} beerObject={obj} />
					})
				}
			</section>
		);
	}
});

module.exports = OutputBox;