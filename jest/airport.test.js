// As an air traffic controller 
// So I can get passengers to a destination 
// I want to instruct a plane to land at an airport

const { expect } = require('@jest/globals');
const Airport = require('../src/airport');
const airport = require('../src/airport')

test('airports can instruct planes to land', () => {
	testAirport = new Airport
	expect(testAirport.landPlane()).toBe('plane has landed');
});