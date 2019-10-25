import React from 'react';
import '../App.css';

class Summary extends React.Component {
  render() {
    return (
        <div className="Summary">
          Your principal Amount is:
          {this.props.principal} <br/>
          Your interest rate is:
          {this.props.interestRate}
          <br/>
          Your pre EMI is:
          {this.props.preEMI}
          <br/>
          Your Tenure is:
          {this.props.tenure}
          <br/>
          Your Installment date is:
          {this.props.installmentDate}
          <br/>
          Your emi is:
          {this.props.emi}
        </div>
      );
  }
}
export default Summary;

