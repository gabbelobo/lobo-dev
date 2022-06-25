
const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API}&query=${latitude},${longitude}`;
    
    fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                callback("Unable to find forecast for location", undefined)
            }
            else {
                callback(undefined, {
                    temperature: res.current.temperature,
                    feelslike: res.current.feelslike,
                    weather: res.current.weather_descriptions[0],
                    icon: res.current.weather_icons
                })
            }
        })
        .catch(e => {
            console.log(e);
            callback("Unable to connect to weather service", undefined)
        })

}

module.exports = forecast