import React from 'react';
import '../App.css';

class Principal extends React.Component {
    constructor(props) {
        super(props);
        this.updatePrincipal = this.updatePrincipal.bind(this);
    }
    updatePrincipal(e) {
        this.props.onSet(e.target.value);
    }
    render() {
        return (
            <div className="Principal">
            Enter You principal Amount:
            <input type='text' onChange={this.updatePrincipal}></input>
            </div>
        );
    }
}

export default Principal;
