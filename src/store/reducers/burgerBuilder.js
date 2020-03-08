import * as actionTypes from '../actions/actionTypes';
import { updateObject, removeItem } from '../../shared/utility'

// const INGREDIENTS_PRICES = {
//     'meat': 10,
//     'mushrooms': 7,
//     'salad': 7,
//     'ketchup': 0.5
// }

const initialState = {
    ingredients: [],
    totalPrice: 30,
    disabledIngredients: {
        'meat': true,
        'mushrooms': true,
        'salad': true,
        'ketchup': true
    },
    ingredients_prices: null,
    error: false

};
const addIngredient = (state, action) => {
    const updatedIngredients = state.ingredients.slice()
    updatedIngredients.push(action.ingredient)
    const disabledIngredients = updateObject(state.disabledIngredients, {
        [action.ingredient]: false
    })
    return updateObject(state, {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + state.ingredients_prices[action.ingredient],
        disabledIngredients: disabledIngredients
    });
}
const removeIngredient = (state, action) => {
    const updatedIngredients = removeItem(state.ingredients, state.ingredients.findIndex(ingredient => action.ingredient === ingredient))
    const updatedDisabledIngredients = { ...state.disabledIngredients }
    const removeIndex = updatedIngredients.findIndex(ingredient => action.ingredient === ingredient)
    if (removeIndex === -1) {
        updatedDisabledIngredients[action.ingredient] = true
    }
    return updateObject(state, {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice - state.ingredients_prices[action.ingredient],
        disabledIngredients: updatedDisabledIngredients
    });
}
const setPrice = (state, action) => {
    return updateObject(state, {
        ingredients_prices: action.prices,
        error: false
    });
}
const fetchPricesFailed = (state, action) => {
    return updateObject(state, {
        error: action.error,
        ingredients_prices: {
            'meat': 0,
            'mushrooms': 0,
            'salad': 0,
            'ketchup': 0
        },
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action)
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action)
        case actionTypes.SET_PRICES: return setPrice(state, action)
        case actionTypes.FETCH_PRICES_FAILED: return fetchPricesFailed(state, action)
        default: return state;
    }
};

export default reducer;

