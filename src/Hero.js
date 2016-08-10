import React, { Component } from 'react';
import './Hero.scss';

class Hero extends Component{
	render() {
		var weatherClass = 'Hero Hero--' + this.props.data.weather.toLowerCase();
		var roundedTemperature = Math.round(this.props.data.temperature);
		return(
			<div className={weatherClass}>
				<div className="Hero__weather">
					{this.props.data.weather}
				</div>
				<span className="Hero__city">
					{this.props.data.city}
				</span>
				<h1 className="Hero__temperature">
					{roundedTemperature}
				</h1>
			</div>
		);
	}
}

export default Hero;