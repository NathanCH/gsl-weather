import React, { Component } from 'react';
import WeatherRequest from './WeatherRequest';
import './App.scss';

class App extends Component{
	constructor() {
		super();
		this.state = {
			city: '',
			temperature: '',
			weather: '',
			desc: ''
		}
	}
	componentDidMount() {
		new WeatherRequest(response => {
			this.setState({
				city: response.name,
				temperature: response.main.temp,
				weather: response.weather[0].main,
				desc: response.weather[0].description
			});
		});
	}
	render() {

		return (
			<div className="App">
				<ul>
					<li>{this.state.city}</li>
					<li>{this.state.temperature}</li>
					<li>{this.state.weather}</li>
					<li>{this.state.desc}</li>
				</ul>
			</div>
		)
	}
}

export default App;