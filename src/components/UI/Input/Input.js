import React from 'react'

import classes from './Input.module.css'

const Input = (props) => {
    let inputElm;
    switch (props.elementType) {
        case 'input':
            inputElm = <input
                className={classes.InputElm}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case 'textarea':
            inputElm = <textarea
                className={classes.InputElm}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case 'select':
            inputElm = (<select
                className={classes.InputElm}
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
                className={classes.InputElm}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElm}
        </div>
    )
}

export default Input