import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const addProduct = (newProduct) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        Product: newProduct
    }
}


export const removeProduct = (removedProduct) => {
    return {
        type: actionTypes.REMOVE_PRODUCT,
        Product: removedProduct
    }
}
const setPrices = (prices) => {
    return {
        type: actionTypes.SET_PRICES,
        prices: prices
    }
}
const fetchPricesFailed = (error) => {
    return {
        type: actionTypes.FETCH_PRICES_FAILED,
        error: error

    }
}
export const fetchProducts = () => {
    return dispatch => {

        axios.get('/products.json')
            .then(response => {
                dispatch(fetchProductsSuccess(Object.values(response.data)[0]))
            })
            .catch(error => {
                dispatch(fetchPricesFailed(error.message));

            })
    }
}