import React, { Component } from 'react';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import classes from './Auth.module.css'

import * as actions from '../../store/actions/index'
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';
import { checkValidity } from '../../shared/utility'

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
    // switchModeHandler = () => {
    //     this.setState(prevState => { return { isSignIn: !prevState.isSignIn } })
    // }
    inputChangedHandler = (event, inputId) => {
        const { updatedFrom, formIsValid } = checkValidity(event.target.value, inputId, this.state.controls)
        this.setState({ controls: updatedFrom, formIsValid: formIsValid })
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
                        {this.props.errorMessage ? <h3 style={{ color: 'red' }}>{ERRORS[this.props.errorMessage] ? ERRORS[this.props.errorMessage] : this.props.errorMessage}</h3> : null}

                        <Button disabled={!this.state.formIsValid} btnType='Success' >SUBMIT</Button>
                    </form>}
                {/* <Button
                    btnType='Danger'
                    clicked={this.switchModeHandler}>
                    SWITCH TO {this.state.isSignIn ? 'SIGN UP' : 'SIGN IN'}
                </Button> */}
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