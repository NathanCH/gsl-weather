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
			.end(function(error, response) {
				if(error !== null) {
					return false;
				}

				callback(response.body);
			});
	}
	buildRequest(position) {
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;

		return this.endPoint + `?lat=${lat}&lon=${lon}&units=metric&appid=` + this.key;
	}
}

export default WeatherRequest;