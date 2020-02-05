import React, { Component } from 'react'

import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Order from '../../components/Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner'

const INGREDIENTS_PRICES = {
    'meat': 10,
    'mushrooms': 7,
    'salad': 7,
    'ketchup': 0.5
}

class Orders extends Component {

    state = {
        orders: null,
        isLoading: false
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        axios.get('orders.json')
            .then((response) => {
                this.setState({ isLoading: false })
                this.setState({ orders: response.data })
            })
            .catch(error => { this.setState({ isLoading: false }) })
    }


    render() {
        let totalPrice = 0
        let ordersList = (this.state.orders) ? Object.values(this.state.orders).reverse().map((order, i) => {
            const currentPrice = 30 + order.ingredients.reduce((prev, cur) => prev + INGREDIENTS_PRICES[cur], 0)
            totalPrice += currentPrice
            return <Order key={i} ingredients={order.ingredients} price={currentPrice} />
        }) : null
        return (
            <div>
                <p style={{ textAlign: 'center' }}> <strong>Total Price: {totalPrice.toFixed(2)}</strong></p>
                {this.state.isLoading ? <Spinner />
                    :
                    <ul>
                        {ordersList}
                    </ul>}
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios)
