import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";
// import { Link } from "react-router-dom";

const orderSummary = (props) => {
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
        <Fragment>
            <h3>Your Order</h3>
            <p>Follwing ingredients included:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Burger Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button
                clicked={props.purchaseCancelled}
                btnType='Danger'>
                CANCEL
                </Button>
            <Button
                clicked={props.purchaseContinued}
                btnType='Success'>
                {/* <Link to={{ pathname: '/checkout', state: props.ingredients }}> */}
                    CONTINUE
                {/* </Link> */}
            </Button>

        </Fragment>
    )
}
export default orderSummary