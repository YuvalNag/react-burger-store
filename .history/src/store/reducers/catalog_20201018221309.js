import * as actionTypes from '../actions/actionTypes';
import { updateObject, removeItem } from '../../shared/utility'

// const INGREDIENTS_PRICES = {
//     'meat': 10,
//     'mushrooms': 7,
//     'salad': 7,
//     'ketchup': 0.5
// }

const initialState = {
    products: [],
    totalPrice: 30,
    disabledProducts: {
        'meat': true,
        'mushrooms': true,
        'salad': true,
        'ketchup': true
    },
    products_prices: null,
    error: false

};
const addProduct = (state, action) => {
    const updatedProducts = state.products.slice()
    updatedProducts.push(action.product)

    return updateObject(state, {
        products: updatedProducts,
        totalPrice: state.totalPrice + state.products_prices[action.product],
        disabledProducts: disabledProducts
    });
}
const removeProduct = (state, action) => {
    const updatedProducts = removeItem(state.products, state.products.findIndex(product => action.product === product))
    const updatedDisabledProducts = { ...state.disabledProducts }
    const removeIndex = updatedProducts.findIndex(product => action.product === product)
    if (removeIndex === -1) {
        updatedDisabledProducts[action.product] = true
    }
    return updateObject(state, {
        products: updatedProducts,
        totalPrice: state.totalPrice - state.products_prices[action.product],
        disabledProducts: updatedDisabledProducts
    });
}
const setPrice = (state, action) => {
    return updateObject(state, {
        products_prices: action.prices,
        error: false
    });
}
const fetchPricesFailed = (state, action) => {
    return updateObject(state, {
        error: action.error,
        products_prices: {
            'meat': 0,
            'mushrooms': 0,
            'salad': 0,
            'ketchup': 0
        },
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT: return addProduct(state, action)
        case actionTypes.REMOVE_PRODUCT: return removeProduct(state, action)
        case actionTypes.SET_PRICES: return setPrice(state, action)
        case actionTypes.FETCH_PRICES_FAILED: return fetchPricesFailed(state, action)
        default: return state;
    }
};

export default reducer;

