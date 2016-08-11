import React, { Component } from 'react';
import './Hero.scss';

class Hero extends Component{

	/**
	 * Render hero view.
	 * 
	 * @return <React DOM />
	 */ 
	render() {
		
		// Append current weather name to Hero class.
		var weatherClass = 'Hero Hero--' + this.props.data.weather.toLowerCase();

		// Round temperatures.
		var roundedTemperature = Math.round(this.props.data.temperature);

		return(
			<div className={weatherClass}>
				<h1 className="Hero__temperature">
					{roundedTemperature}
				</h1>
				<div className="Hero__weather">
					{this.props.data.weather}
				</div>
				<div className="Hero__city">
					{this.props.data.city}
				</div>
			</div>
		);
	}
}

export default Hero;