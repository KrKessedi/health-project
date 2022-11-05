import React, { createContext, useContext, useReducer } from 'react'

function getCountPostsInBasket() {
	const basket = JSON.parse(localStorage.getItem('basket'))

	// return basket ? basket.products.length : 0
}

const calcSubPrice = (product) => +product.count * product.item.price

const calcTotalPrice = (products) => {
	return products.reduce((prev, cur) => {
		return (prev += cur.subPrice)
	}, 0)
}

const basketContext = createContext()
export const useBasket = () => useContext(basketContext)

const INIT_STATE = {
	basket: JSON.parse(localStorage.getItem('basket')),
	basketLength: getCountPostsInBasket(),
}

function reducer(state = INIT_STATE, action) {
	switch (action.type) {
		case 'GET_BASKET':
			return { ...state, basket: action.payload }
		case 'GET_BASKET_LENGTH':
			return { ...state, basketLength: action.payload }
		default:
			return state
	}
}

const BasketContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INIT_STATE)

	const getBasket = () => {
		let basket = JSON.parse(localStorage.getItem('basket'))

		if (!basket) {
			localStorage.setItem(
				'basket',
				JSON.stringify({
					products: [],
					totalPrice: 0,
				})
			)
			basket = {
				products: [],
				totalPrice: 0,
			}
		}

		dispatch({
			type: 'GET_BASKET',
			payload: basket,
		})
	}

	const addPostToBasket = (product) => {
		let basket = JSON.parse(localStorage.getItem('basket'))

		if (!basket) {
			basket = {
				products: [],
				totalPrice: 0,
			}
		}

		let newPost = {
			item: product,
			count: 1,
			subPrice: +product.price,
		}

		let postToFind = basket.products.filter(
			(elem) => elem.item.id === product.id
		)

		if (postToFind.length === 0) {
			basket.products.push(newPost)
		} else {
			basket.product = basket.products.filter(
				(elem) => elem.item.id !== product.id
			)
		}

		basket.totalPrice = calcTotalPrice(basket.products)

		localStorage.setItem('basket', JSON.stringify(basket))

		dispatch({
			type: 'GET_BASKET',
			payload: basket,
		})
	}

	function changeProductCount(count, id) {
		let basket = JSON.parse(localStorage.getItem('basket'))

		basket.products = basket.products.map((product) => {
			if (product.item.id === id) {
				product.count = count

				product.subPrice = calcSubPrice(product)
			}
			return product
		})

		basket.totalPrice = calcTotalPrice(basket.products)

		localStorage.setItem('basket', JSON.stringify(basket))

		dispatch({
			type: 'GET_BASKET',
			payload: basket,
		})
	}

	function deleteProductInBasket(id) {
		let basket = JSON.parse(localStorage.getItem('basket'))

		basket.products = basket.products.filter((elem) => elem.item.id !== id)

		basket.totalPrice = calcTotalPrice(basket.products)

		localStorage.setItem('basket', JSON.stringify(basket))

		getBasket()

		dispatch({
			type: 'GET_BASKET_LENGTH',
			payload: basket,
		})
	}

	const values = {
		basket: state.basket,
		basketLength: state.basketLength,

		getBasket,
		addPostToBasket,
		changeProductCount,
		deleteProductInBasket,
	}
	return (
		<basketContext.Provider value={values}>{children}</basketContext.Provider>
	)
}

export default BasketContextProvider
