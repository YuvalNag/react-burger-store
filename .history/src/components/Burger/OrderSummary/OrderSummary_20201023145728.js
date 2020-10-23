import { List, ListItem, TextField } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import Button from "../../UI/Button/Button";
// import { Link } from "react-router-dom";

const OrderSummary = (props) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [place, setPlace] = useState('');



    return (
        <div style={{ direction: 'rtl' }}>
            <h3>פרטי משתמש</h3>
            <List noValidate autoComplete="off">
                <ListItem>
                    <TextField 
                        label=" שם פרטי ומשפחה"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        variant="outlined" />
                </ListItem>
                <ListItem>
                    <TextField
                        label="טלפון"
                       
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        variant="outlined"
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        
                        label="עיר/ישוב"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                        variant="outlined" />
                </ListItem>
                <ListItem>
                    <TextField
                       
                        label="נקודת חלוקה"
                        value={place}
                        onChange={(event) => setPlace(event.target.value)}
                        variant="outlined" />
                </ListItem>

            </List>
            <Button
                clicked={() => props.purchaseContinued(
                    {
                        name,
                        phone,
                        city,
                        place,
                    })}
                btnType='Success'>
                {/* <Link to={{ pathname: '/checkout', state: props.ingredients }}> */}
                    המשך
                {/* </Link> */}
            </Button>
            <Button
                clicked={props.purchaseCancelled}
                btnType='Danger'>
                בטל
                </Button>


        </div>
    )
}
export default OrderSummary