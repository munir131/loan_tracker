import React from 'react';
import '../App.css';

class Tenure extends React.Component {
  constructor(props) {
    super(props);
    this.updateTenure = this.updateTenure.bind(this);
}
updateTenure(e) {
    this.props.onSet(e.target.value);
}
render() {
    return (
      <div className="Tenure">
        Enter Your tenures in month:
        <input type='text' onChange={this.updateTenure}></input>
      </div>
    );
  }
}

export default Tenure;
