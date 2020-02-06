import React from 'react'

import classes from './Input.module.css'

const Input = (props) => {
    let inputElmclass = [classes.InputElm]
    if (!props.valid) {
        inputElmclass.push(classes.InValid)
    }
    let inputElm;
    switch (props.elementType) {
        case 'input':
            inputElm = <input
                className={inputElmclass.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case 'textarea':
            inputElm = <textarea
                className={inputElmclass.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case 'select':
            inputElm = (<select
                className={inputElmclass.join(' ')}
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(option =>
                    <option
                        key={option.value}
                        value={option.value}>
                        {option.displayValue}
                    </option>)}
            </select>)
            break;
        default:
            inputElm = <input
                className={inputElmclass.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElm}
            {props.validationError ?
                <p className={classes.ValidationError}>{props.validationError}</p>
                : null
            }
        </div>
    )
}

export default Input