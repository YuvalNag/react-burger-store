import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

import classes from './ContactData.module.css'

class ContactData extends Component {
    state = {
        orderFrom: {
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
                validationRules: null
            }
        },
        formIsValid: false,
        isLoading: false
    }
    orderHandler = (event) => {
        event.preventDefault()
        if (this.state.formIsValid) {

            this.setState({ isLoading: true })
            const fromData = {}
            for (const key in this.state.orderFrom) {
                fromData[key] = this.state.orderFrom[key].value
            }
            const order = {
                ingredients: this.props.ingredients,
                customer: fromData
            }
            axios.post('/orders.json', order)
                .then(response => {
                    this.setState({ isLoading: false })
                    this.props.history.replace('/')

                })
                .catch(error => { this.setState({ isLoading: false }) })
        }
    }
    inputChangedHandler = (event, inputId) => {
        const updatedOrderFrom = { ...this.state.orderFrom }
        const updatedFromElement = { ...updatedOrderFrom[inputId] }
        updatedFromElement.value = event.target.value
        const { isValid, validationError } = this.validator(updatedFromElement.value, updatedFromElement.validationRules)
        updatedFromElement.valid = isValid
        updatedFromElement.touched = true
        updatedFromElement.validationError = validationError

        updatedOrderFrom[inputId] = updatedFromElement

        let formIsValid = true

        for (const key in updatedOrderFrom) {
            formIsValid = formIsValid && updatedOrderFrom[key].valid && updatedOrderFrom[key].touched
        } 
        this.setState({ orderFrom: updatedOrderFrom, formIsValid: formIsValid })
    }

    validator = (value, validationRules) => {
        let isValid = true
        let validationError = null

        if (validationRules.required) {
            isValid = isValid && value.trim() !== ''
            if (!isValid) {
                validationError = "This field is required!"
            }
        }

        if (validationRules.between) {
            isValid = isValid && value.trim().length >= validationRules.between[0] && value.trim().length <= validationRules.between[1]
            if (!isValid) {

                if (value.trim().length > validationRules.between[1]) validationError = "This field is too long!"
                if (value.trim().length < validationRules.between[0]) validationError = "This field is too short!"
            }
        }

        // if (validationRules.intValue) {
        //     isValid = isValid && typeof value == 'number' && 0 === value % parseInt(value)
        // }

        if (validationRules.email) {
            isValid = isValid && this.validateEmail(value)
            if (!isValid) {
                validationError = "This email is not valid!"

            }
        }
        return { isValid: isValid, validationError: validationError }
    }

    validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    componentDidMount() {
        if (this.props.ingredients.length <= 0) {
            this.props.history.push('/burger-builder')
        }
    }
    
    render() {
        const formElementsArray = []
        for (const key in this.state.orderFrom) {
            formElementsArray.push({
                key: key,
                data: this.state.orderFrom[key]
            })

        }

        return (
            <div className={classes.ContactData}>
                {(this.state.isLoading) ? <Spinner /> :
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
export default withErrorHandler(ContactData, axios)
