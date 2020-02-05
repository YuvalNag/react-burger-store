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
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: ''
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'City'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                }
            }
        },
        isLoading: false
    }
    orderHandler = (event) => {
        event.preventDefault()
        this.setState({ isLoading: true })
        const fromData = {}
        for (const key in this.state.orderFrom) {
            fromData[key]=this.state.orderFrom[key].value
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
    inputChangedHandler = (event,inputId) => {
        const updatedOrderFrom={...this.state.orderFrom}
        const updatedFromElement={...updatedOrderFrom[inputId]}
        updatedFromElement.value=event.target.value
        updatedOrderFrom[inputId]=updatedFromElement
        this.setState({orderFrom:updatedOrderFrom})
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
                        {formElementsArray.map(formElement => <Input key={formElement.key} {...formElement.data} changed={(event) => { this.inputChangedHandler(event,formElement.key) }} />)}
                        <Button btnType='Success' >ORDER</Button>
                    </form>
                }
            </div>
        )

    }
}
export default withErrorHandler(ContactData, axios)
