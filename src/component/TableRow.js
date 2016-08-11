import React, { Component } from 'react';
import './Table.scss';

class TableRow extends Component{

	/**
	 * Render table row.
	 * 
	 * @return <React DOM />
	 */
	render() {
		return(
			<tr>
				<td className="Table__cell">{this.props.label}</td>
				<td className="Table__cell Table__cell--right">{this.props.value}</td>
			</tr>
		)
	}
}

export default TableRow;