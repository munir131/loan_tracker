import React from 'react';
import '../App.css';

class Table extends React.Component {
    getTable() {
        let tableStart = '<table>';
        let tableEnd = '</table>';
        let content = '';
        let installments = this.props.calculatePerMonthInterest();
        for (let index = 0; index < installments.length; index++) {
            const { paidPrinicpal,
                remainingPrincipal,
                perMonthInterest } = installments[index];
            content += `<tr><td>${index}<td/><td>${perMonthInterest}<td/><td>${paidPrinicpal}<td/><td>${perMonthInterest + paidPrinicpal}<td/><td>${remainingPrincipal}<td/><tr/>`;
        }
        return `${tableStart}${content}${tableEnd}`;
    }
    render() {
        let table = '';
        if (this.props.show) {
            table = this.getTable(); 
        }
        return (
            <div className="Table"  dangerouslySetInnerHTML={{__html: table}}>
            </div>
        );
    }
}
export default Table;

