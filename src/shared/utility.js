export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}
export const removeItem = (array, index) => {
    if (index > -1)
        return [
            ...array.slice(0, index),
            ...array.slice(index + 1)
        ];
    else
        return array
}

export const checkValidity = (updatedValue, inputId, controls) => {
    const formValidator = (formControls) => {
        let formIsValid = true
        for (const key in formControls) {
            formIsValid = formIsValid && formControls[key].valid && formControls[key].touched
        }
        return formIsValid
    }
    const elementValidator = (value, validationRules) => {
        const validatePassword = (password) => {
            var re = /^[A-Za-z]\w{7,14}$/
            return re.test(password)
        }
        const validateEmail = (email) => {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return re.test(email)
        }
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
                if (value.trim().length > validationRules.between[1])
                    validationError = "This field is too long!"
                if (value.trim().length < validationRules.between[0])
                    validationError = "This field is too short!"
            }
        }
        if (validationRules.isPassword) {
            isValid = isValid && validatePassword(value)
            if (!isValid) {
                validationError = "This password is not strong enough!"
            }
        }
        if (validationRules.isEmail) {
            isValid = isValid && validateEmail(value)
            if (!isValid) {
                validationError = "This email is not valid!"
            }
        }
        return { isValid: isValid, validationError: validationError }
    }
    const { isValid, validationError } = elementValidator(updatedValue, controls[inputId].validationRules)
    const updatedFromElement = updateObject(controls[inputId], {
        value: updatedValue,
        valid: isValid,
        touched: true,
        validationError: validationError
    })
    const updatedFrom = updateObject(controls, { [inputId]: updatedFromElement })
    const formIsValid = formValidator(updatedFrom)
    return { updatedFrom, formIsValid }
}