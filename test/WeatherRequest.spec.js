import chai from 'chai';
import path from 'path';
import WeatherRequest from '../src/helper/WeatherRequest';

chai.should();

describe('WeatherRequestTest', function() {

	let weatherRequest;
	let position = {
		coords: {
			latitude: 29,
			longitude: -122
		}
	};

	beforeEach(function() {
		weatherRequest = new WeatherRequest();
	});

	it('Should have an end point and API key.', function() {
		weatherRequest.endPoint.should.exist;
		weatherRequest.key.should.exist;
	});

	it('Should build an HTTP request.', function() {
		var request = weatherRequest.buildHttpRequest(position);

		request.should.be.a('string');
	});

	it('Should make an XHR request.', function() {
		weatherRequest.makeRequest(position).then(function(response) {
			response.should.be.a('string');
		});
	});
});