import * as actionTypes from './actions';

const INGREDIENTS_PRICES = {
    'meat': 10,
    'mushrooms': 7,
    'salad': 7,
    'ketchup': 0.5
}

const initialState = {
    ingredients: [],
    totalPrice: 30,
    disabledIngredients: {
        'meat': true,
        'mushrooms': true,
        'salad': true,
        'ketchup': true
    }
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: {
            const updatedIngredients = state.ingredients.slice()
            updatedIngredients.push(action.ingredient)

            return {
                ...state,
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredient],
                disabledIngredients: {
                    ...state.disabledIngredients,
                    [action.ingredient]: false
                }
            }
        }
        case actionTypes.REMOVE_INGREDIENT: {
            const updatedIngredients = removeItem(state.ingredients, state.ingredients.findIndex(ingredient => action.ingredient === ingredient))
            const updatedDisabledIngredients = { ...state.disabledIngredients }
            const removeIndex = updatedIngredients.findIndex(ingredient => action.ingredient === ingredient)
            if (removeIndex === -1) {
                updatedDisabledIngredients[action.ingredient] = true
            }
            return {
                ...state,
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.ingredient],
                disabledIngredients:updatedDisabledIngredients
            };
        }
        default:
            return state;
    }
};

export default reducer;

const removeItem = (array, index) => {
    if (index > -1)
        return [
            ...array.slice(0, index),
            ...array.slice(index + 1)
        ];
    else
        return array
}