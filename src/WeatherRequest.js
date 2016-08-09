import Request from 'superagent';

class WeatherRequest {
	constructor(callback) {
		this.endPoint = 'http://api.openweathermap.org/data/2.5/weather';
		this.key = '345dcf974d1485b4f8fc57cbb8f7a44d';

		if(!navigator.geolocation) {
			return false;
		}

		navigator.geolocation.getCurrentPosition(position => {
			this.makeRequest(position, callback);
		});
	}
	makeRequest(position, callback) {
		Request
			.get(this.buildRequest(position))
			.end((error, response) => {
				if(error !== null) {
					return false;
				}

				callback(this.parseResponse(response));
			});
	}
	buildRequest(position) {
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;

		return this.endPoint + `?lat=${lat}&lon=${lon}&units=metric&appid=` + this.key;
	}
	parseResponse(response) {
		return {
			city: response.body.name,
			weather: response.body.weather[0].main,
			temperature: response.body.main.temp,
			table: [
				{ 
					label: 'High',
					value: response.body.main.temp_max
				},
				{ 
					label: 'Low',
					value: response.body.main.temp_min
				},
				{ 
					label: 'Humidity',
					value: response.body.main.humidity
				}
			]
		}
	}
}

export default WeatherRequest;