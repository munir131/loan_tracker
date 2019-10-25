import React from 'react';
import './App.css';
import Principal from './components/Principal';
import InterestRate from './components/InterestRate';
import Summary from './components/Summary';
import PreEMI from './components/PreEMI';
import Tenure from './components/Tenure';
import InstallmentDate from './components/InstallmentDate';
import Table from './components/Table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      principal: 0,
      interestRate: 0,
      preEMI: 0,
      tenure: 0,
      installmentDate: 0,
      emi: 0,
      perMonthInterest: 0,
      remainingPrincipal: 0,
      showTable: false
    };
    this.setPrincipal = this.setPrincipal.bind(this);
    this.setInterestRate = this.setInterestRate.bind(this);
    this.setPreEMI = this.setPreEMI.bind(this);
    this.setTenure = this.setTenure.bind(this);
    this.setInstallmentDate = this.setInstallmentDate.bind(this);
    this.showTable = this.showTable.bind(this);
    this.calculatePerMonthInterest = this.calculatePerMonthInterest.bind(this);
  }
  setPrincipal(principal) {
    this.setState(state => ({
      principal: principal,
      remainingPrincipal: principal,
    }));
    this.calculateEMI();
  }
  setInterestRate(interestRate) {
    this.setState(state => ({
      interestRate: interestRate
    }));
    this.calculateEMI();
  } 
  setPreEMI(preEMI) {
    this.setState(state => ({
      preEMI: preEMI
    }));
    this.calculateEMI();
  } 
  setTenure(tenure) {
    this.setState(state => ({
      tenure: tenure
    }));
    this.calculateEMI();
  } 
  setInstallmentDate(date) {
    this.setState(state => ({
      installmentDate: date
    }));
    this.calculateEMI();
  }

  calculateEMI() {
    let p = parseFloat(this.state.principal);
    let r = parseFloat(this.state.interestRate) / 1200;
    let t = parseFloat(this.state.tenure);
    this.setState(state => ({
      emi: p*r*((Math.pow(1+r,t))/(Math.pow(1+r,t)-1))
    }));
  }
  calculatePerMonthInterest() {
    let r = parseFloat(this.state.interestRate);
    let t = 1;
    let emi = this.state.emi;
    var remainingPrincipal = this.state.principal;
    let installments = [];
    while (remainingPrincipal > 0) {
      let p = remainingPrincipal;
      let perMonthInterest = (p * r * t / 1200);
      let paidPrinicpal = emi - perMonthInterest;
      remainingPrincipal = Math.round(remainingPrincipal - paidPrinicpal);
      installments.push({
        paidPrinicpal: Math.round(emi - perMonthInterest),
        remainingPrincipal,
        perMonthInterest: Math.round(perMonthInterest)
      });
    }
    return installments;
  }
  showTable() {
    this.setState(state => ({
      showTable: true
    }));
  }
  render() {
    return (
      <div className="App">
        <Principal onSet={this.setPrincipal.bind(this)}/> 
        <InterestRate onSet={this.setInterestRate.bind(this)}/>
        <PreEMI onSet={this.setPreEMI.bind(this)}/>
        <Tenure onSet={this.setTenure.bind(this)}/>
        <InstallmentDate onSet={this.setInstallmentDate.bind(this)}/>
        <Summary 
          principal={this.state.principal}
          interestRate={this.state.interestRate}
          preEMI={this.state.preEMI}
          tenure={this.state.tenure} 
          installmentDate={this.state.installmentDate}
          emi={this.state.emi}
        />
        <input type='button' onClick={this.showTable.bind(this)} value='calculate'/>
        <Table 
          show={this.state.showTable}
          emi={this.state.emi}
          calculatePerMonthInterest={this.calculatePerMonthInterest.bind(this)}
          />
      </div>
    );
  }
}

export default App;
