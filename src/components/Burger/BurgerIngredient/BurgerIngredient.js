import React, { Component } from 'react'
import classes from './BurgerIngredient.module.css'
import PropTypes from 'prop-types'
class BurgerIngredient extends Component {
    ingredient = null
    render() {
        switch (this.props.type) {
            case ('bread-bottom'):
                this.ingredient = <div className={classes.BreadBottom}> </div>
                break;
            case ('bread-top'):
                this.ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                )
                break;
            case ('meat'):
                this.ingredient = <div className={classes.Meat}> </div>
                break;
            case ('mushrooms'):
                this.ingredient = <div className={classes.Mushrooms}> </div>
                break;
            case ('salad'):
                this.ingredient = <div className={classes.Salad}> </div>
                break;
            case ('ketchup'):
                this.ingredient = <div className={classes.Ketchup}> </div>
                break;
            default:
                this.ingredient = null;
                break;
        }
        return this.ingredient
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}
export default BurgerIngredient