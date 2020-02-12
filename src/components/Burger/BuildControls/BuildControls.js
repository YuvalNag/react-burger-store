import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { type: 'meat', label: "Meat" },
    { type: 'mushrooms', label: "Mushrooms" },
    { type: 'salad', label: "Salad" },
    { type: 'ketchup', label: "Ketchup" }
]
const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Burger Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map((control, index) => {
                return <BuildControl
                    removeIngredient={() => props.removeIngredient(control.type)}
                    addIngredient={() => props.addIngredient(control.type)}
                    key={index}
                    label={control.label}
                    disable={props.disabledIngredients[control.type]}
                />
            })}
            <button className={classes.OrderButton}
                disabled={props.disable}
                onClick={props.purchase}
            >ORDER NOW</button>
        </div>)
}
export default buildControls