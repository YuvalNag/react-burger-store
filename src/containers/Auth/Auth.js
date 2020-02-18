import React, { Component } from 'react';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import classes from './Auth.module.css'

import * as actions from '../../store/actions/index'
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';

const ERRORS = {
    EMAIL_NOT_FOUND: 'There is no user record corresponding to this identifier.The user may have been deleted.',
    INVALID_PASSWORD: 'The password is invalid or the user does not have a password.',
    USER_DISABLED: 'The user account has been disabled by an administrator.',
    EMAIL_EXISTS: 'The email address is already in use by another account.',
    OPERATION_NOT_ALLOWED: 'Password sign-in is disabled for this project.',
    TOO_MANY_ATTEMPTS_TRY_LATER: 'We have blocked all requests from this device due to unusual activity. Try again later.'
}
class Auth extends Component {
    state = {
        controls: {
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
                    isEmail: true
                },
                validationError: null
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                touched: false,
                valid: true,
                validationRules: {
                    required: true,
                    isPassword: true
                },
                validationError: null
            }
        },
        formIsValid: false,
        isSignIn: true
    }
    submitHandler = (event) => {
        event.preventDefault()
        if (this.state.formIsValid) {
            this.props.onTryAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignIn)
        }
    }
    switchModeHandler = () => {
        this.setState(prevState => { return { isSignIn: !prevState.isSignIn } })
    }
    inputChangedHandler = (event, inputId) => {
        const updatedFrom = { ...this.state.controls }
        const updatedFromElement = { ...updatedFrom[inputId] }
        updatedFromElement.value = event.target.value
        const { isValid, validationError } = this.validator(updatedFromElement.value, updatedFromElement.validationRules)
        updatedFromElement.valid = isValid
        updatedFromElement.touched = true
        updatedFromElement.validationError = validationError

        updatedFrom[inputId] = updatedFromElement

        let formIsValid = true

        for (const key in updatedFrom) {
            formIsValid = formIsValid && updatedFrom[key].valid && updatedFrom[key].touched
        }
        this.setState({ controls: updatedFrom, formIsValid: formIsValid })
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

        if (validationRules.isPassword) {
            isValid = isValid && this.validatePassword(value)
            if (!isValid) {
                validationError = "This password is not strong enough!"

            }
        }
        if (validationRules.isEmail) {
            isValid = isValid && this.validateEmail(value)
            if (!isValid) {
                validationError = "This email is not valid!"

            }
        }

        return { isValid: isValid, validationError: validationError }
    }
    validatePassword = (password) => {
        var re = /^[A-Za-z]\w{7,14}$/;
        return re.test(password);
    }
    validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
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
            <div className={classes.Auth}>
                {this.props.isLoading ? <Spinner /> :
                    <form onSubmit={this.submitHandler}>
                        <h1>Welcome <br></br> {this.state.isSignIn ? 'Sign in' : 'Sing up'} please</h1>
                        {formElementsArray.map(formElement => <Input key={formElement.key} {...formElement.data} changed={(event) => { this.inputChangedHandler(event, formElement.key) }} />)}
                        {this.props.errorMessage ? <h3 style={{ color: 'red' }}>{ERRORS[this.props.errorMessage]?ERRORS[this.props.errorMessage]:this.props.errorMessage}</h3> : null}

                        <Button disabled={!this.state.formIsValid} btnType='Success' >SUBMIT</Button>
                    </form>}
                <Button
                    btnType='Danger'
                    clicked={this.switchModeHandler}>
                    SWITCH TO {this.state.isSignIn ? 'SIGN UP' : 'SIGN IN'}
                </Button>
                {this.props.isAuth ? <Redirect to='/checkout' /> : null}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        isLoading: state.reqToServer.loading,
        errorMessage: state.reqToServer.error,
        isAuth: state.auth.idToken !== null
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onTryAuth: (email, password, isSignIn) => dispatch(actions.tryAuth(email, password, isSignIn))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);