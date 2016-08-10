import React, { Component } from 'react';
import TableRow from './TableRow';
import './Table.scss';

class Table extends Component{
	render() {
		var rows = [];

		// Build table rows.
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