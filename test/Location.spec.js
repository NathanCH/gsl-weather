import chai from 'chai';
import path from 'path';
import Location from '../src/helper/Location';

chai.should();

describe('LocationTest', function() {

	let location;

	beforeEach(function() {
		location = new Location();
	});

	it('Should return a location.', function() {
		location.getLatLng().then(() => {
			location.latlng.should.be.an('object');
		});
	});
});
