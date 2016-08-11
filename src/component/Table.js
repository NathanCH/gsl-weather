import React, { Component } from 'react';
import TableRow from './TableRow';
import './Table.scss';

class Table extends Component{

	/**
	 * Render table view.
	 * 
	 * @return <React DOM />
	 */
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
				<thead>
					<TableRow label={this.props.title} />
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}
}

export default Table;