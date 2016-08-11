import Request from 'superagent';
import moment from 'moment';

class ForecastRequest {

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
		this.endPoint = 'http://api.openweathermap.org/data/2.5/forecast/daily';
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
				throw new Error('Could not make forecast request.');
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

		var formatted = [];
		
		response.body.list.forEach((elm, index) => {
			formatted.push({
				label: this.convertDate(elm.dt),
				value: elm.weather[0].main + ' with a high of ' + Math.round(elm.temp.max) + '°'
			})
		});

		return {
			table: formatted
		};
	}

	/**
	 * Convert timestamp using Moment JS
	 * 
	 * @param  string timestamp
	 * @return string 
	 */
	convertDate(timestamp) {
		return moment.unix(timestamp).format('MMM D');
	}
}

export default ForecastRequest;