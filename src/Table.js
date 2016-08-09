import React, { Component } from 'react';
import './Table.scss';

class TableRow extends Component{
	render() {
		return(
			<tr>
				<td>{this.props.label}</td>
				<td>{this.props.value}</td>
			</tr>
		)
	}
}

export default TableRow;

class Table extends Component{
	render() {
		var rows = [];
		this.props.data.table.forEach((row, key) => {
			rows.push(
				<TableRow key={key} label={row.label} value={row.value} />
			);
		});
		return (
			<table className="Table">
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}
}

export default Table;