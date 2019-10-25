import React from 'react';
import '../App.css';

class PreEMI extends React.Component {
  constructor(props) {
    super(props);
    this.updatePreEMI = this.updatePreEMI.bind(this);
}
updatePreEMI(e) {
    this.props.onSet(e.target.value);
}
render() {
    return (
      <div className="PreEMI">
        Enter Your Pre EMI %:
        <input type='text' onChange={this.updatePreEMI}></input>
      </div>
    );
  }
}

export default PreEMI;
