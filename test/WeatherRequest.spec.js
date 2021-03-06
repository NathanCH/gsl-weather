import chai from 'chai';
import path from 'path';
import WeatherRequest from '../src/helper/WeatherRequest';

chai.should();

describe('WeatherRequestTest', function() {

	let weatherRequest;
	let latlng = {
		lat: 29,
		lng: -122
	};
	let expect = chai.expect;

	beforeEach(function() {
		weatherRequest = new WeatherRequest(latlng);
	});

	it('Should have a location set.', function() {
		expect(function() {
			new WeatherRequest();
		}).to.throw(Error);
	});

	it('Should have an end point and API key.', function() {
		weatherRequest.endPoint.should.exist;
		weatherRequest.key.should.exist;
	});

	it('Should build an HTTP request.', function() {
		var request = weatherRequest.buildHttpRequest();

		request.should.be.a('string');
	});

	it('Should make an XHR request.', function() {
		weatherRequest.makeRequest().then(function(response) {
			response.should.be.a('string');
		});
	});
});