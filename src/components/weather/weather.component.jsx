import React from 'react'
import '../../styles/weather.style.css'

const Weather = props => {
	return (
		<div className='weather-container text-light'>
			<div className='Card'>
				<h1 className='text-white weather-h1 py-3'>{props.cityname}</h1>
				<h5 className='py-4'>
					<i className={`wi ${props.weatherIcon} display-1`} />
				</h5>

				{/* Get Celsius */}
				{props.temp_celsius ? (
					<h1 className='py-2 celcium'>{props.temp_celsius}&deg;</h1>
				) : null}

				{/* show max and min temp */}
				{maxminTemp(props.temp_min, props.temp_max)}

				{/* Weather description */}
				<h4 className='py-3 clouds'>
					{props.description.charAt(0).toUpperCase() +
						props.description.slice(1)}
				</h4>
			</div>
		</div>
	)
}

export default Weather

function maxminTemp(min, max) {
	if (max && min) {
		return (
			<>
				<h3>
					<span className=' min px-4'>Минимум: {min}&deg;</span>
					<br />
					<span className=' max px-4'>Максимум: {max}&deg;</span>
				</h3>
				<br />
			</>
		)
	}
}
