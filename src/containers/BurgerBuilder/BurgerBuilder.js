import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger'

import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import { connect } from 'react-redux';

import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

import * as burgerBuilderActions from '../../store/actions/index'

export class BurgerBuilder extends Component {
    state = {
        disabledPurchaseButton: true,
        showModal: false
    }

    updatePurchaseState = (ingredients) => {
        const disabledIngredients = Object.values(ingredients)
        const disabledPurchaseButton = disabledIngredients.reduce((prevDisabledIngredient, disabledIngredient) => prevDisabledIngredient * disabledIngredient)
        return disabledPurchaseButton
    }

    purchaseHandler = () => {
        this.setState({ showModal: true })
    }
    purchaseCancelHandler = () => {
        this.setState({ showModal: false })
    }
    purchaseContinueHandler = () => {
        this.props.history.push('./checkout')
    }
    render() {
        return (
            <Fragment>
                <Modal
                    show={this.state.showModal}
                    modelClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.props.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.props.totalPrice} />
                </Modal>
                <Burger
                    ingredients={this.props.ingredients} />
                <BuildControls
                    disabledIngredients={this.props.disabledIngredients}
                    removeIngredient={this.props.onRemoveIngredient}
                    addIngredient={this.props.onAddIngredient}
                    price={this.props.error ? <strong style={{ color: 'red' }}>{this.props.error}</strong> : this.props.totalPrice}
                    purchase={this.purchaseHandler}
                    disable={this.updatePurchaseState(this.props.disabledIngredients)} />
            </Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        disabledIngredients: state.burgerBuilder.disabledIngredients,
        error: state.burgerBuilder.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: (newIngredient) => dispatch(burgerBuilderActions.addIngredient(newIngredient)),
        onRemoveIngredient: (removedIngredient) => dispatch(burgerBuilderActions.removeIngredient(removedIngredient))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))