const { expect } = require('@jest/globals');
const Weather = require('../src/weather');
const weather = require('../src/weather')

// Weather
const todaysWeather = new Weather

// **********
// TESTS
// **********

// .REPORT
test('should report the current weather', () => {
	expect(todaysWeather.report()).toEqual(expect.any(String))
});