// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import geocode from "../../lib/geocode"
import forecast from "../../lib/forecast"
export default function handler(req, res) {

	if (!req.query.address) {
		return res.status(400).json({
			error: 'You must provide an address!'
		})
	}

	geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
		if (error) {
			return res.status(400).json({ error })
		}

		forecast(latitude, longitude, (error, forecastData) => {
			if (error) {
				return res.status(400).json({ error })
			}

			res.status(200).json({
				forecast: forecastData,
				location,
				address: req.query.address
			})
		})
	})
}
