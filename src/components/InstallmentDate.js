import React from 'react';
import '../App.css';

class InstallmentDate extends React.Component {
  constructor(props) {
    super(props);
    this.updateInstallmentDate = this.updateInstallmentDate.bind(this);
}
updateInstallmentDate(e) {
    this.props.onSet(e.target.value);
}
render() {
    return (
      <div className="InstallmentDate">
        Enter Your Installment Day only:
        <input type='text' onChange={this.updateInstallmentDate}></input>
      </div>
    );
  }
}

export default InstallmentDate;
