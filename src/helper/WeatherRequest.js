import Request from 'superagent';

class WeatherRequest {

	/**
	 * Set API config
	 * 
	 * @param  function  callback
	 * @return void
	 */
	constructor() {
		this.endPoint = 'http://api.openweathermap.org/data/2.5/weather';
		this.key = '345dcf974d1485b4f8fc57cbb8f7a44d';
	}

	/**
	 * Get location and make request.
	 * 
	 * @param  function  callback
	 * @return void
	 */
	getData(callback) {

		// Check for HTML5 geolocation api.
		if(!navigator.geolocation) {
			return false;
		}

		// Make request using geolocation latitude/longitude.
		navigator.geolocation.getCurrentPosition(position => {
			this.makeRequest(position, callback);
		});
	}

	/**
	 * Make HTTP request to API end point.
	 * 
	 * @param  object    position
	 * @param  function  callback
	 * @return void
	 */
	makeRequest(position, callback) {
		Request
			.get(this.buildHttpRequest(position))
			.end((error, response) => {
				if(error !== null) {
					return false;
				}

				callback(this.parseResponse(response));
			});
	}

	/**
	 * Build HTTP request.
	 * 
	 * @param  object  position
	 * @return string  request URL
	 */
	buildHttpRequest(position) {
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;

		return this.endPoint + `?lat=${lat}&lon=${lon}&units=metric&appid=` + this.key;
	}

	/**
	 * Parse API response for easier consumption
	 * 
	 * @param  object  JSON response from API
	 * @return object  parsed response
	 */
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