import React, { useContext, createContext, useState } from 'react'
import axios from 'axios'

const personContext = createContext()
export const usePerson = () => useContext(personContext)

const API = 'http://34.28.220.66/'

export const PersonContextProvider = ({ children }) => {
	const [persons, setPerson] = useState([])

	async function addPerson(
		age,
		height,
		weight,
		bloodType,
		disability,
		allergy,
		inijury,
		illness,
		symptoms
	) {
		let formData = new FormData()
		formData.append('age', age)
		formData.append('height', height)
		formData.append('weight', weight)
		formData.append('blood_type', bloodType)
		formData.append('disability', disability)
		formData.append('allergy', allergy)
		formData.append('inijury', inijury)
		formData.append('illness', illness)
		formData.append('symptoms', symptoms)

		try {
			const tokens = JSON.parse(localStorage.getItem('token'))
			const Authorization = `Bearer ${tokens.access}`

			const config = {
				headers: {
					Authorization,
				},
			}

			const res = await axios.post(`${API}api/v1/crud/`, formData, config)
			setPerson(formData)
		} catch (err) {
			console.error(err)
		}
	}

	async function updatePerson() {}

	async function deletePerson(id) {
		try {
			const tokens = JSON.parse(localStorage.getItem('token'))
			const Authorization = `Bearer ${tokens.access}`

			const config = {
				headers: {
					Authorization,
				},
			}

			await axios.delete(`${API}/${id}`, config)
		} catch (err) {
			console.error(err)
		}
	}

	const values = {
		addPerson,

		persons,
	}
	return (
		<personContext.Provider value={values}>{children}</personContext.Provider>
	)
}
