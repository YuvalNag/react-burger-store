import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger'

import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENTS_PRICES = {
    'meat': 10,
    'mushrooms': 7,
    'salad': 7,
    'ketchup': 0.5
}
class BurgerBuilder extends Component {
    state = {
        ingredients: [
        ],
        totalPrice: 30,
        disabledIngredients: {
            'meat': true,
            'mushrooms': true,
            'salad': true,
            'ketchup': true
        },
        disabledPurchaseButton: true,
        showModal: false
    }

    updatePurchaseState = (ingredients) => {
        const disabledIngredients = Object.values(ingredients)
        const disabledPurchaseButton = disabledIngredients.reduce((prevDisabledIgredient, disabledIgredient) => prevDisabledIgredient * disabledIgredient)
        this.setState({ disabledPurchaseButton: disabledPurchaseButton })
    }
    lessButtonClickedHandler = (type) => {

        const ingredients = [...this.state.ingredients]
        let newPrice = this.state.totalPrice + 0
        const disabledIngredients = { ...this.state.disabledIngredients }

        let removeIndex = ingredients.findIndex(ingredient => ingredient === type)
        if (removeIndex > -1) {
            ingredients.splice(removeIndex, 1)

            const priceDeduction = INGREDIENTS_PRICES[type]
            newPrice = this.state.totalPrice - priceDeduction
        }
        removeIndex = ingredients.findIndex(ingredient => ingredient === type)
        if (removeIndex === -1) {

            disabledIngredients[type] = true
        }
        this.setState({ ingredients: ingredients, totalPrice: newPrice, disabledIngredients: disabledIngredients })
        this.updatePurchaseState(disabledIngredients)

    }
    moreButtonClickedHandler = (type) => {
        const ingredients = [...this.state.ingredients]
        ingredients.push(type)
        const disabledIngredients = { ...this.state.disabledIngredients }
        disabledIngredients[type] = false
        const priceAddition = INGREDIENTS_PRICES[type]
        const newPrice = this.state.totalPrice + priceAddition

        this.setState({ ingredients: ingredients, totalPrice: newPrice, disabledIngredients: disabledIngredients })
        this.updatePurchaseState(disabledIngredients)

    }
    purchaseHandler = () => {
        this.setState({ showModal: true })
    }
    purchaseCancelHandler = () => {
        this.setState({ showModal: false })
    }
    purchaseContinueHandler = () => {
        this.props.history.push('./checkout', this.state.ingredients)
    }
    render() {
        return (
            <Fragment>
                <Modal
                    show={this.state.showModal}
                    modelClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.state.totalPrice} />
                </Modal>
                <Burger
                    ingredients={this.state.ingredients} />
                <BuildControls
                    disabledIngredients={this.state.disabledIngredients}
                    less={this.lessButtonClickedHandler}
                    more={this.moreButtonClickedHandler}
                    price={this.state.totalPrice}
                    purchase={this.purchaseHandler}
                    disable={this.state.disabledPurchaseButton} />
            </Fragment>
        );
    }
}
export default BurgerBuilder