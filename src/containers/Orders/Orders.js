import React, { Component } from 'react'

import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Order from '../../components/Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner'
import { connect } from 'react-redux'

import * as actions from '../../store/actions'



class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId)
    }


    render() {
        let totalPrice = 0
        let ordersList = (this.props.orders) ? Object.values(this.props.orders).reverse().map((order, i) => {
            const currentPrice = 30 + order.ingredients.reduce((prev, cur) => prev + this.props.ingredients_prices[cur], 0)
            totalPrice += currentPrice
            return <Order key={i} ingredients={order.ingredients} price={currentPrice} />
        }) : null
        return (
            <div>
                <p style={{ textAlign: 'center' }}> <strong>Total Price: {totalPrice.toFixed(2)}</strong></p>
                {this.props.isLoading ? <Spinner />
                    :
                    <ul>
                        {ordersList}
                    </ul>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        isLoading: state.reqToServer.loading,
        ingredients_prices: state.burgerBuilder.ingredients_prices,
        token: state.auth.idToken,
        userId: state.auth.localId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.tryFetchOrders(token, userId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
