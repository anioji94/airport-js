// As an air traffic controller 
// So I can get passengers to a destination 
// I want to instruct a plane to land at an airport

const { expect } = require('@jest/globals');
const Airport = require('../src/airport');
const airport = require('../src/airport')
const testAirport = new Airport
const smallAirport = new Airport(1, 1)

// .INITIALIZE
test('airport capacity can be overriden', () => {
	const newAirport = new Airport
	expect(newAirport.capacity).toBe(5)
	newAirport.capacity = 6
	expect(newAirport.capacity).toBe(6)
});

// .LAND(PLANE)
test('airports can instruct planes to land', () => {
	expect(testAirport.landPlane()).toBe('plane has landed');
});

test('airports can prevent landing when capacity is full', () => {
	expect(smallAirport.landPlane()).toBe('request denied, airport full')	
})

// .TAKEOFF(PLANE)
test('airports can instruct planes to take off', () => {
	expect(testAirport.takeOff()).toBe('plane has taken off')
});