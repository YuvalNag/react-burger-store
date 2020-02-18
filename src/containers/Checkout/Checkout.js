import React, { Component } from 'react'

import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery'
import ContactData from './ContactData/ContactData'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack()
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summery = <Redirect to='/' />
        if (this.props.ingredients.length > 0) {
            summery = <div>
                <CheckoutSummery ingredients={this.props.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route path={this.props.match.path + '/contact-data'}>
                    <ContactData history={this.props.history} />
                </Route>
            </div>
        }
        return (this.props.isAuth ? summery : <Redirect to='/' />)
    }
}
const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        isAuth: state.auth.idToken !== null
    }
}
export default connect(mapStateToProps)(Checkout)

