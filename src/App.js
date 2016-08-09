import React, { Component } from 'react';
import WeatherRequest from './WeatherRequest';
import Loading from './Loading';
import Hero from './Hero';
import Table from './Table';
import './App.scss';

class App extends Component{
	constructor() {
		super();
		this.state = {
			data: null
		}
	}
	componentDidMount() {
		new WeatherRequest(response => {
			this.setState({
				data: response
			});
		});
	}
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