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
const fetchProductsSuccess = (prices) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        prices: prices
    }
}
const fetchProductsFailed = (error) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAILED,
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
                dispatch(fetchProductsFailed(error.message));

            })
    }
}