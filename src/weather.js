class Weather {
	report() {
		const weather = ['stormy', 'clear', 'overcast', 'rainy']
		const randIndex = Math.floor(Math.random() * weather.length)
		return weather[randIndex]
	}
}

module.exports = Weather;