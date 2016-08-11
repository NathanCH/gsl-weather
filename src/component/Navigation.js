import React, { Component } from 'react';
import './Navigation.scss';

class Navigation extends Component{

	/**
	 * Pass clicked navigation item through callback.
	 */
	handleClick(e) {
		this.props.onUpdate(e.currentTarget.dataset.type);
	}

	/**
	 * Render navigation view.
	 * 
	 * @return <React DOM />
	 */
	render() {

		// Append active panel to Navigation class.
		var activePanelClass = 'Navigation ' + 'Navigation--' + this.props.activePanel;
		
		return (
			<ul className={activePanelClass}>
				<li className="Navigation__item" onClick={(e) => this.handleClick(e)} data-type="weather">Current</li>
				<li className="Navigation__item" onClick={(e) => this.handleClick(e)} data-type="forecast">Forecast</li>
			</ul>
		);
	}
}

export default Navigation;