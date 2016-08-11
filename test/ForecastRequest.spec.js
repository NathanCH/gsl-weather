import chai from 'chai';
import path from 'path';
import ForecastRequest from '../src/helper/ForecastRequest';

chai.should();

describe('ForecastRequestTest', function() {

	let forecastRequest;
	let latlng = {
		lat: 29,
		lng: -122
	};
	let expect = chai.expect;

	beforeEach(function() {
		forecastRequest = new ForecastRequest(latlng);
	});

	it('Should have a location set.', function() {
		expect(function() {
			new ForecastRequest();
		}).to.throw(Error);
	});

	it('Should have an end point and API key.', function() {
		forecastRequest.endPoint.should.exist;
		forecastRequest.key.should.exist;
	});

	it('Should build an HTTP request.', function() {
		var request = forecastRequest.buildHttpRequest();

		request.should.be.a('string');
	});

	it('Should make an XHR request.', function() {
		forecastRequest.makeRequest().then(function(response) {
			response.should.be.a('string');
		});
	});
});