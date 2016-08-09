import React, { Component } from 'react';
import './Hero.scss';

class Hero extends Component{
	render() {
		var weatherClass = 'Hero Hero--' + this.props.data.weather.toLowerCase();
		return(
			<div className={weatherClass}>
				<h2 className="Hero__weather">
					{this.props.data.weather}
				</h2>
				<span className="Hero__city">
					{this.props.data.city}
				</span>
				<h1 className="Hero__temperature">
					{this.props.data.temperature}
				</h1>
			</div>
		);
	}
}

export default Hero;