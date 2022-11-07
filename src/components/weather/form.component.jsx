import React from 'react'
import '../../styles/form.style.css'

const Form = props => {
	return (
		<div className='container h-100'>
			<form onSubmit={props.loadweather}>
				<div>{props.error ? error() : ''}</div>
				<div className='row'>
					<div className='col-md-3'>
						<input
							type='text'
							className='form-control'
							placeholder='Страна'
							name='country'
							autoComplete='off'
						/>
					</div>
					<div className='col-md-3 offset-md-2'>
						<input
							type='text'
							className='form-control'
							placeholder='Город'
							name='city'
							autoComplete='off'
						/>
					</div>
					<div className='col-md-3 mt-md-0 mt-2 text-md-left '>
						<button
							className='btn btn-warning'
							color='warning'
							// style={{ marginBottom: '20px' }}
							variant='contained'
							// disabled={!country.trim() || !city.trim() ? true : false}
						>
							Узнать погоду
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

const error = props => {
	return (
		<div
			className='alert alert-danger mx-5'
			style={{ color: 'white', fontSize: '1.6rem' }}
			role='alert'
		>
			Please Enter City and Country...!
		</div>
	)
}

export default Form
