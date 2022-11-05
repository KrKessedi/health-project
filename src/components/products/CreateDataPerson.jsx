import React from 'react'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import '../../styles/CRUD.css'

const lightTheme = createTheme({
	palette: {
		text: {
			color: '#871',
		},
		primary: {
			main: '#000',
		},
	},
})

const CreateDataPerson = () => {
	const [bloodType, setBloodType] = React.useState('')

	const handleChange = event => {
		setBloodType(event.target.value)
	}
	return (
		<div
			className='crud-block'
			style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<div className='crud-form'>
				<div className='crud-input-block1'>
					<input type='text' className='age' />
					<input type='text' className='height' />
					<input type='text' className='weight' />
				</div>
				<div className='crud-input-block2'>
					<FormControl>
						<InputLabel id='demo-simple-select-standard-label'>
							Blood Type
						</InputLabel>
						<Select
							labelId='demo-simple-select-standard-label'
							id='demo-simple-select-standard'
							value={bloodType}
							onChange={handleChange}
							label='Age'
						>
							<MenuItem value=''>
								<em>None</em>
							</MenuItem>
							<MenuItem value={1}>I</MenuItem>
							<MenuItem value={2}>II</MenuItem>
							<MenuItem value={3}>III</MenuItem>
							<MenuItem value={4}>IV</MenuItem>
						</Select>
					</FormControl>
					<input type='text' />
				</div>
				<input type='text' />
				<div className='crud-input-block'>
					<input type='text' />
					<input type='text' />
				</div>
				<input type='text' />
				<input type='text' />
				<input type='text' />
			</div>
			<ThemeProvider theme={lightTheme}>
				<FormControl variant='standard' sx={{ m: 1, minWidth: 300 }}>
					<TextField id='standard-basic' label='Возраст' variant='standard' />
					<TextField id='standard-basic' label='Рост' variant='standard' />
					<TextField id='standard-basic' label='Вес' variant='standard' />
					<FormControl>
						<InputLabel id='demo-simple-select-standard-label'>
							Blood Type
						</InputLabel>
						<Select
							labelId='demo-simple-select-standard-label'
							id='demo-simple-select-standard'
							value={bloodType}
							onChange={handleChange}
							label='Age'
						>
							<MenuItem value=''>
								<em>None</em>
							</MenuItem>
							<MenuItem value={1}>I</MenuItem>
							<MenuItem value={2}>II</MenuItem>
							<MenuItem value={3}>III</MenuItem>
							<MenuItem value={4}>IV</MenuItem>
						</Select>
					</FormControl>

					<TextField id='standard-basic' label='Аллергии' variant='standard' />
					<TextField id='standard-basic' label='Симптомы' variant='standard' />
					<TextField
						id='standard-basic'
						label='Инвалидность'
						variant='standard'
					/>
					<TextField id='standard-basic' label='Травма' variant='standard' />
					<TextField id='standard-basic' label='Аллергии' variant='standard' />
					<TextField id='standard-basic' label='Аллергии' variant='standard' />
					<TextField id='standard-basic' label='Аллергии' variant='standard' />
				</FormControl>
			</ThemeProvider>
		</div>
	)
}

export default CreateDataPerson
