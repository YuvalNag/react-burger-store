import * as actionTypes from '../actions/actionTypes';
import { updateObject, removeItem } from '../../shared/utility'

// const INGREDIENTS_PRICES = {
//     'meat': 10,
//     'mushrooms': 7,
//     'salad': 7,
//     'ketchup': 0.5
// }

const initialState = {
    selectedProducts: [],
    totalPrice: 30,
    disabledProducts: {
        'meat': true,
        'mushrooms': true,
        'salad': true,
        'ketchup': true
    },
    products: [],
    error: false,
    regions:[]

};
const addProduct = (state, action) => {
    const updatedProducts = state.products.slice()
    updatedProducts.push(action.product)
    const disabledProducts = updateObject(state.disabledProducts, {
        [action.product]: false
    })
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
const fetchProductsSuccess = (state, action) => {
    return updateObject(state, {
        products: action.products,
        error: false
    });
}
const fetchProductsFailed = (state, action) => {
    return updateObject(state, {
        error: action.error,
    });
}
const fetchRegionsSuccess = (state, action) => {
    return updateObject(state, {
        regions: action.regions,
        error: false
    });
}
const fetchRegionsFailed = (state, action) => {
    return updateObject(state, {
        error: action.error
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT: return addProduct(state, action)
        case actionTypes.REMOVE_PRODUCT: return removeProduct(state, action)
        case actionTypes.FETCH_PRODUCTS_SUCCESS: return fetchProductsSuccess(state, action)
        case actionTypes.FETCH_PRODUCTS_FAILED: return fetchProductsFailed(state, action)
        case actionTypes.FETCH_REGIONS_SUCCESS: return fetchRegionsSuccess(state, action)
        case actionTypes.FETCH_REGIONS_FAILED: return fetchRegionsFailed(state, action)
        default: return state;
    }
};

export default reducer;

