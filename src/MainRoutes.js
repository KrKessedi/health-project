import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import PasswordRecovery from './pages/PasswordRecovery'
import NotFoundPage from './pages/NotFoundPage'
import CreateDataPerson from './components/products/CreateDataPerson'
import HomePage from './pages/HomePage'
import Basket from './pages/Basket'
import Market from './pages/Market'

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='*' element={<NotFoundPage />} />
			<Route path='register' element={<RegistrationPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/recovery' element={<PasswordRecovery />} />
			<Route path='/create-data-person' element={<CreateDataPerson />} />
			<Route path='/basket' element={<Basket />} />
			<Route path='/market' element={<Market />} />
		</Routes>
	)
}

export default MainRoutes
