import React, { Component } from 'react';
import './Loading.scss';

class Loading extends Component{

	/**
	 * Render loading view.
	 * 
	 * @return <React DOM />
	 */
	render() {
		return (
			<div className="Loading">
				<i className="fa fa-cog fa-spin"></i>
			</div>
		);
	}
}

export default Loading;