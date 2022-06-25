const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${process.env.MAPBOX_API}&limit=1`;

    fetch(url)
        .then(res => res.json())
        .then((res) => {
            if (res.features.length === 0) {
                callback('Unable to find location. Try another search.', undefined)
            } else {
                callback(undefined, {
                    latitude: res.features[0].center[1],
                    longitude: res.features[0].center[0],
                    location: res.features[0].place_name
                })
            }
        })
        .catch(() => {
            callback('Unable to connect to location services!', undefined)
        })
}

module.exports = geocode