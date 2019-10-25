import React from 'react';
import '../App.css';

class InterestRate extends React.Component {
  constructor(props) {
    super(props);
    this.updateInterestRate = this.updateInterestRate.bind(this);
}
updateInterestRate(e) {
    this.props.onSet(e.target.value);
}
render() {
    return (
      <div className="InterestRate">
        Enter Your Interest Amount in %:
        <input type='text' onChange={this.updateInterestRate}></input>
      </div>
    );
  }
}

export default InterestRate;
