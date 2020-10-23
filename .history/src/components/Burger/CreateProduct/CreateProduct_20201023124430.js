import { InputAdornment, List, ListItem, TextField } from "@material-ui/core";
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
        <div  style={{ direction: 'rtl' }}>
            <h3>הוסף מוצר</h3>
            <List noValidate autoComplete="off">
                <ListItem>
                    <TextField id="standard-basic" label="שם"  variant="outlined" />
                </ListItem>
                <ListItem>
                <TextField
          label="מחיר"
          id="outlined-start-adornment"
        //   className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">₪</InputAdornment>,
          }}
          variant="outlined"
        />
                </ListItem>
                <ListItem>
                    <TextField id="standard-basic" label="תיאור נוסף"  variant="outlined" />
                </ListItem>

            </List>
            <Button
                clicked={props.purchaseCancelled}
                btnType='Danger'>
                בטל
                </Button>
            <Button
                clicked={props.purchaseContinued}
                btnType='Success'>
                {/* <Link to={{ pathname: '/checkout', state: props.ingredients }}> */}
                    המשך
                {/* </Link> */}
            </Button>

        </div>
    )
}
export default CreateProduct