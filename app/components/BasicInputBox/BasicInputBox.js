var React = require('react');

var BasicInputBox = React.createClass ({
  render: function (){
    return (
      <div>
        <label>{this.props.label}</label>
        <br/>
        <input type="text" className="form-control" onChange={this.props.valChange} value={this.props.val} />
        <br/> 
      </div>
    );
  }
 });

module.exports = BasicInputBox;