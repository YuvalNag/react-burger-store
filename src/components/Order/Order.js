import React from 'react'
import Burger from '../Burger/Burger'
import classes from './Order.module.css'
const Order = (props) => {
    const countedIngredients = props.ingredients.reduce((ingredientsObj, ingredient) => {
        ingredientsObj[ingredient]++
        return ingredientsObj
    }, {
        'meat': 0,
        'mushrooms': 0,
        'salad': 0,
        'ketchup': 0
    })
    const ingredientsSummary = Object.keys(countedIngredients).map(iKey => <li key={iKey}><span style={{ textTransform: 'capitalize' }}>{iKey}:</span> {countedIngredients[iKey]}</li>)

    return (
        <div style={{ display:'inline-flex' }}>
            <div className={classes.Order}>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Burger Price: {props.price.toFixed(2)}</strong></p>
            </div>
            <Burger style={{ height: '30vh', width: '40vw' }}
                    ingredients={props.ingredients} />
        </div>
    )
}

export default Order