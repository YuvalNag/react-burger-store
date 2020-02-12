import React, { Component } from 'react'

import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery'
import ContactData from './ContactData/ContactData'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

export class Checkout extends Component {
    state = {
        ingredients: []
    }
    componentDidMount() {
        if (this.props.location.state) {
            this.setState({ ingredients: this.props.location.state })
        }
    }
    checkoutCancelledHandler = () => {
        this.props.history.goBack()
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummery ingredients={this.props.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route path={this.props.match.path + '/contact-data'}>
                    <ContactData history={this.props.history} />
                </Route>
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return {
        ingredients:state.ingredients
    }
}
export default connect(mapStateToProps)(Checkout)

