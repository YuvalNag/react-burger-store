import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
    orders: {},
    purchased: false
}


const purchaseBurgerSuccess = (state, action) => {
    const orders = updateObject(state.orders, { [action.orderId]: { ...action.orderData } })
    return updateObject(state, {
        orders: orders,
        loading: false,
        purchased: true
    });

}
const purchaseBurgerFinish = (state, action) => {
    return updateObject(state, {
        purchased: false
    });
}
const fetchOrdersSuccess = (state, action) => {
    const newOrders = updateObject(state.orders, action.orders);
    return updateObject(state, {
        orders: newOrders,
        loading: false,
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action)
        case actionTypes.PURCHASE_BURGER_FINISH: return purchaseBurgerFinish(state, action)
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action)
        default: return state;
    }

}

export default reducer