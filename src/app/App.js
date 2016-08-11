import React, { Component } from 'react';
import Location from '../helper/Location';
import WeatherRequest from '../helper/WeatherRequest';
import ForecastRequest from '../helper/ForecastRequest';
import Loading from '../component/Loading';
import Hero from '../component/Hero';
import Table from '../component/Table';
import Navigation from '../component/Navigation';
import './App.scss';

class App extends Component{

	/**
	 * Store app state.
	 */
	constructor() {
		super();
		this.state = {
			panel: null,
			weather: null,
			forecast: null
		}
		this.location = new Location();
	}

	/**
	 * Get location, then serve weather.
	 */
	componentDidMount() {
		this.location.getLatLng().then(() => {
			this.getWeather();
		})		
	}

	/**
	 * Make a weather request.
	 */
	getWeather() {
		var weatherRequest = new WeatherRequest(this.location.latlng);
		weatherRequest.getData(response => {
			this.setState({
				panel: 'weather',
				weather: response
			});
		});
	}

	/**
	 * Make a forecast request.
	 */
	getForecast() {
		var forecastRequest = new ForecastRequest(this.location.latlng);
		forecastRequest.getData(response => {
			this.setState({
				panel: 'forecast',
				forecast: response
			});
		});
	}

	/**
	 * Handle state change.
	 */
	handleUpdate(type) {
		this.setState({ panel: null });

		if(type == 'weather') {
			this.getWeather();
		}

		else{
			this.getForecast();
		}
	}

	/**
	 * Render loading state or application.
	 * 
	 * @return <React DOM />
	 */ 
	render() {

		var panel;

		if(this.state.panel == null) {
			panel = <Loading />;
		}

		else if(this.state.panel == 'weather') {
			panel = <Table data={this.state.weather} title="Current Conditions" />;
		}

		else if(this.state.panel == 'forecast') {
			panel = <Table data={this.state.forecast} title="7 Day Forecast" />;
		}

		if(!this.state.weather) {
			return <Loading />;
		}

		return (
			<div className="App">
				<Hero data={this.state.weather} />
				<Navigation onUpdate={(e) => this.handleUpdate(e)} activePanel={this.state.panel} />
				<div className="Data">
					{panel}
				</div>
			</div>
		)
	}
}

export default App;