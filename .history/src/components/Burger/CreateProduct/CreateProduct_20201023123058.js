import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";
// import { Link } from "react-router-dom";

const CreateProduct = (props) => {
    // const countedIngredients = props.ingredients.reduce((ingredientsObj, ingredient) => {
    //     ingredientsObj[ingredient]++
    //     return ingredientsObj
    // }, {
    //     'meat': 0,
    //     'mushrooms': 0,
    //     'salad': 0,
    //     'ketchup': 0
    // })
    // const ingredientsSummary = Object.keys(countedIngredients).map(iKey => <li key={iKey}><span style={{ textTransform: 'capitalize' }}>{iKey}:</span> {countedIngredients[iKey]}</li>)
    return (
        <Fragment>
            <h3>Create Product</h3>
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Name" />
                <TextField id="standard-basic" label="Price"  />
                <TextField id="standard-basic" label="Description" />

            </form>
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
export default CreateProduct