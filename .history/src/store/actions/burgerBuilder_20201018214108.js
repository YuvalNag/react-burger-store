import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const addIngredient = (newIngredient) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredient: newIngredient
    }
}


export const removeIngredient = (removedIngredient) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredient: removedIngredient
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
export const initPrices = () => {
    return dispatch => {

        axios.get('/prices.json')
            .then(response => {
                dispatch(setPrices(Object.values(response.data)[0]))
            })
            .catch(error => {
                dispatch(fetchPricesFailed(error.message));

            })
    }
}
export const fetchProducts = () => {
    return dispatch => {
        axios.get('/products.json')
            .then(response => {
                // dispatch(setPrices(Object.values(response.data)[0]))
                console.log(response.data);
            })
            .catch(error => {
                // dispatch(fetchPricesFailed(error.message));
                console.log(error.message);

            })
    }
}