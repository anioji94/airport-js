const { expect } = require('@jest/globals');
const Airport = require('../src/airport');
const airport = require('../src/airport')

// Airports
const testAirport = new Airport
const smallAirport = new Airport(1, 1)
const stormyAirport = new Airport()

// Weather Mocks
const badWeather = {
	report: 'stormy',
}
const clearWeather = {
	report: 'clear',
}

// **********
// TESTS
// **********

// .INITIALIZE
test('airport capacity can be overriden', () => {
	const newAirport = new Airport
	expect(newAirport.capacity).toBe(5)
	newAirport.capacity = 6
	expect(newAirport.capacity).toBe(6)
});

test('airport can be made with alternative cap but default num', () => {
	const isoAirport = new Airport(3)
	expect(isoAirport.capacity).toBe(3)
})

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

test('airports refuse take off if weather is stormy', () => {
	expect()
});
