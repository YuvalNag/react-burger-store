import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

import classes from './ContactData.module.css'
import { connect } from 'react-redux'

import * as orderActions from '../../../store/actions/index'

import { checkValidity } from '../../../shared/utility'

class ContactData extends Component {
    state = {
        controls: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: '',
                touched: false,
                valid: true,
                validationRules: {
                    required: true,
                    between: [2, 20]
                },
                validationError: null
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                touched: false,
                valid: true,
                validationRules: {
                    required: true,
                    email: true
                },
                validationError: null
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'City'
                },
                value: '',
                touched: false,
                valid: true,
                validationRules: {
                    required: true,
                    between: [2, 10]
                },
                validationError: null
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                touched: false,
                valid: true,
                validationRules: {
                    required: true,
                    between: [2, 30]
                },
                validationError: null
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: 'fastest',
                touched: true,
                valid: true,
                validationRules: {}
            }
        },
        formIsValid: false
    }
    orderHandler = (event) => {
        event.preventDefault()
        if (this.state.formIsValid) {

            const fromData = {}
            for (const key in this.state.controls) {
                fromData[key] = this.state.controls[key].value
            }
            const order = {
                ingredients: this.props.ingredients,
                customer: fromData,
                userId: this.props.userId
            }

            this.props.onPurchase(order, this.props.token)

        }
    }
    inputChangedHandler = (event, inputId) => {
        const { updatedFrom, formIsValid } = checkValidity(event.target.value, inputId, this.state.controls)
        this.setState({ controls: updatedFrom, formIsValid: formIsValid })
    }



    componentDidUpdate() {
        if (this.props.purchased) {
            this.props.onPurchaseFinish()
            this.props.history.push('/burger-builder')
        }
    }

    render() {
        const formElementsArray = []
        for (const key in this.state.controls) {
            formElementsArray.push({
                key: key,
                data: this.state.controls[key]
            })

        }

        return (
            <div className={classes.ContactData}>
                {(this.props.isLoading) ? <Spinner /> :
                    <form onSubmit={this.orderHandler}>
                        <h4>Enter your Contact Data</h4>
                        {formElementsArray.map(formElement => <Input key={formElement.key} {...formElement.data} changed={(event) => { this.inputChangedHandler(event, formElement.key) }} />)}
                        <Button disabled={!this.state.formIsValid} btnType='Success' >ORDER</Button>
                    </form>
                }
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        isLoading: state.reqToServer.loading,
        purchased: state.order.purchased,
        token: state.auth.idToken,
        userId: state.auth.localId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onPurchase: (order, token) => dispatch(orderActions.tryPurchaseBurger(order, token)),
        onPurchaseFinish: () => dispatch(orderActions.purchaseBurgerFinish())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios))
