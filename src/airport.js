const Weather = require('./weather')
const newWeather = new Weather

class Airport {
	constructor(cap = 5, num = 0, weather = newWeather) {
		this.capacity = cap,
		this.hangar = num
		this.weather = weather.report
	}

	landPlane(plane = "plane") {
		if(this.weather == 'stormy') {
			throw 'request denied, stormy weather'; 
		} else if (this.hangar < this.capacity) {
			this.hangar += 1
			return `${plane} has landed`
		} else {
			return 'request denied, airport full'
		}
	}

	takeOff(plane = "plane") {
		if(this.weather == 'stormy') {
			throw 'request denied, stormy weather'; 
		} else {
		return `${plane} has taken off`
		}
	}
}

module.exports = Airport;

