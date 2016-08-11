import Request from 'superagent';

class Location {

	constructor() {
		this.latlng;
	}

	/**
	 * Get lat/long via HTML Geolocation.
	 * 
	 * @return Promise
	 */
	getLatLng() {
		return new Promise((resolve, reject) => {

			// Check for HTML5 geolocation api.
			if(!navigator.geolocation) {
				reject('Geolocation not supported.');
			}

			// Make request using geolocation latitude/longitude.
			navigator.geolocation.getCurrentPosition(
				position => {
					this.latlng = {
						lat: position.coords.latitude.toFixed(1),
						lng: position.coords.longitude.toFixed(1)
					}
					resolve();
				},
				error => {
					this.latlng = {
						lat: 49.25,
						lng: -123.1
					}
					resolve();
				}
			);
		});
	}
}

export default Location;