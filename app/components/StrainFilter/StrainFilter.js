var React = require('react');
var ReactDOM = require('react-dom');

// Components

// Models	

var StrainFilter = React.createClass({
	getInitialState () {
		return {
			noValidate: false
		};	
	},
	componentDidMount () {
		this.setState({
			noValidate: true
		});
	},
	handleChange (field, event) {
		this.props.formData[field] = event.target.value;
	},
	handleSubmit (event) {
		event.preventDefault();
		console.log(this.props);
	},
	render () {
		return (
			<form role="form" className="form-horizontal" noValidate={this.state.noValidate}>
 				<div className="form-group">
 					<label className="control-label col-md-2">Page</label>
 					<div className="col-md-10"><input type="number" defaultValue={this.props.formData.page} onChange={this.handleChange.bind(this, "page")} className="form-control" /></div>
 				</div>
 				<div className="form-group">
 					<label className="control-label col-md-2">Take</label>
 					<div className="col-md-10"><input type="number" defaultValue={this.props.formData.take} onChange={this.handleChange.bind(this, "take")} className="form-control" /></div>
 				</div> 
 				<div className="form-group">
 					<label className="control-label col-md-2">Flavors</label>
 					<div className="col-md-10">
 						<select className="form-control">
 							{
 								this.props.formData.filters.flavors.map(function(item, index) {
 									return <option key={index} value={item}></option>
 								});
 							}
 						</select>
 					</div>
 				</div>  	
 				<div className="form-group">
 					<label className="control-label col-md-2">Categories</label>
 					<div className="col-md-10">
 						<select className="form-control">

 						</select>
 					</div>
 				</div>  	
 				<div className="form-group">
 					<label className="control-label col-md-2">Conditions</label>
 					<div className="col-md-10">
 						<select className="form-control">

 						</select>
 					</div>
 				</div>  	 
 				<div className="form-group">
 					<label className="control-label col-md-2">Tags</label>
 					<div className="col-md-10">
 						<select className="form-control">

 						</select>
 					</div>
 				</div>  	
 				<div className="form-group">
 					<label className="control-label col-md-2">Symptoms</label>
 					<div className="col-md-10">
 						<select className="form-control">

 						</select>
 					</div>
 				</div>  	
 				<button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Search</button> 				 								 											
			</form>
		);
	}
});

module.exports = StrainFilter;