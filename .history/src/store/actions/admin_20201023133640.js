import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'
import { reqToServerStart, reqToServerFail, reqToServer } from './reqToServer'


const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}


export const tryAddProduct = (order, token) => {
    return dispatch => {
        dispatch(reqToServerStart())
        const queryParams = '?auth=' + token
        axios.post('/orders.json' + queryParams, order)
            .then(response => {
                dispatch(reqToServer(purchaseBurgerSuccess(response.data.name, order)))

            })
            .catch(error => { dispatch(reqToServerFail(error.message)) })
    }
}

export const purchaseBurgerFinish = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_FINISH
    }
}

const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

// const fetchOrdersFail = (error) => {
//     return {
//         type: actionTypes.FETCH_ORDERS_FAIL,
//         error: error
//     }
// }
export const tryFetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(reqToServerStart())
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/orders.json' + queryParams)
            .then(response => {
                dispatch(reqToServer(fetchOrdersSuccess(response.data)))
            })
            .catch(error => { dispatch(reqToServerFail(error.message)) })
    }
}