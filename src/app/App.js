import React, { Component } from 'react';
import WeatherRequest from '../helper/WeatherRequest';
import Loading from '../component/Loading';
import Hero from '../component/Hero';
import Table from '../component/Table';
import './App.scss';

class App extends Component{

	/**
	 * Store app state.
	 * 
	 * @return void
	 */
	constructor() {
		super();
		this.state = {
			data: null
		}
	}

	/**
	 * Request weather data when components mounts.
	 * 
	 * @return void
	 */
	componentDidMount() {
		var weatherRequest = new WeatherRequest();

		weatherRequest.getData(response => {
			this.setState({
				data: response
			});
		});
	}

	/**
	 * Render loading state or application.
	 * 
	 * @return <React DOM />
	 */
	render() {

		if(!this.state.data) {
			return <Loading />;
		}

		return (
			<div className="App">
				<Hero data={this.state.data} />
				<Table data={this.state.data} />
			</div>
		)
	}
}

export default App;