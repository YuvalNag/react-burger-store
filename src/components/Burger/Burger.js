import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const borger = (props) => {
    let ingredients
    if (props.ingredients.length !== 0) {
        ingredients = props.ingredients.map((ingredient, index) => <BurgerIngredient key={index} type={ingredient} />)
    } else {
        ingredients = <p>Please add some ingredients.</p>
    }
    return (
        <div className={classes.Burger} style={props.style}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>)

}
export default borger