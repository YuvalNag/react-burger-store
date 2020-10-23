import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";
// import { Link } from "react-router-dom";

const orderSummary = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [place, setPlace] = useState('');



    return (
        <div style={{ direction: 'rtl' }}>
            <h3>הוסף מוצר</h3>
            <List noValidate autoComplete="off">
                <ListItem>
                    <TextField id="standard-basic"
                        label=" שם פרטי ומשפחה"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        variant="outlined" />
                </ListItem>
                <ListItem>
                    <TextField
                        label="טלפון"
                        id="outlined-start-adornment"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        variant="outlined"
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        id="standard-basic"
                        label="עיר/ישוב"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                        variant="outlined" />
                </ListItem>
                <ListItem>
                    <TextField
                        id="standard-basic"
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
export default orderSummary