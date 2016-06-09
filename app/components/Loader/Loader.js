var React = require('react');

var Loader = React.createClass({
    render () {
        return (
            <div>
                <div className={{this.props.loaderClass, }}></div>
            </div>
        )
    }
});

module.exports = Loader;