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
const fetchProductsSuccess = (products) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        products: products
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
                dispatch(fetchProductsSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchProductsFailed(error.message));

            })
    }
}