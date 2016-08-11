import Request from 'superagent';

class WeatherRequest {

	/**
	 * Set API config
	 * 
	 * @param  function  callback
	 * @return void
	 */
	constructor(location) {
		if(typeof location === 'undefined') {
			throw new Error('Location must be set.');
		}

		this.location = location;
		this.endPoint = 'http://api.openweathermap.org/data/2.5/weather';
		this.key = '345dcf974d1485b4f8fc57cbb8f7a44d';
	}

	/**
	 * Handle request response.
	 * 
	 * @param  function  callback
	 * @return void
	 */
	getData(callback) {
		this.makeRequest()
			.then((response) => {
				callback(this.parseResponse(response));
			})
			.catch(() => {
				throw new Error('Could not make weather request.');
			});
	}

	/**
	 * Make HTTP request to API end point.
	 * 
	 * @return Promise
	 */
	makeRequest() {
		return new Promise((resolve, reject) => {
			Request
				.get(this.buildHttpRequest())
				.end((error, response) => {
					if(error !== null) {
						reject();
					}

					resolve(response);
				});
		});
	}

	/**
	 * Build HTTP request.
	 * 
	 * @return string  request URL
	 */
	buildHttpRequest() {
		return this.endPoint + `?lat=${this.location.lat}&lon=${this.location.lng}&units=metric&appid=` + this.key;
	}

	/**
	 * Parse API response for easier consumption.
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
					value: Math.round(response.body.main.temp_max) + '° C'
				},
				{ 
					label: 'Low',
					value: Math.round(response.body.main.temp_min) + '° C'
				},
				{ 
					label: 'Humidity',
					value: response.body.main.humidity + '%'
				},
				{
					label: 'Wind Speed',
					value: response.body.wind.speed	
				},
				{
					label: 'Cloud Coverage',
					value: response.body.clouds.all + '%'
				}
			]
		}
	}
}

export default WeatherRequest;