import { InputAdornment, List, ListItem, TextField } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import Button from "../UI/Button/Button";
// import { Link } from "react-router-dom";

const CreateRegion = (props) => {
    const [city, setCity] = useState('');
    const [location, setLocation] = useState('');





    return (
        <div style={{ direction: 'rtl' }}>
            <h3>הוסף אזור חלוקה</h3>
            <List noValidate autoComplete="off">
                <ListItem>
                    <TextField id="city"
                        label="עיר"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                        variant="outlined" />
                </ListItem>
                <ListItem>
                    <TextField
                        label="מיקום"
                        id="location"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                        variant="outlined"
                    />
                </ListItem>
            </List>
            <Button
                clicked={() => props.continued(
                    {
                        city,
                        location,
                    })}
                btnType='Success'>
                {/* <Link to={{ pathname: '/checkout', state: props.ingredients }}> */}
                    המשך
                {/* </Link> */}
            </Button>
            <Button
                clicked={props.cancelled}
                btnType='Danger'>
                בטל
                </Button>


        </div>
    )
}
export default CreateRegion