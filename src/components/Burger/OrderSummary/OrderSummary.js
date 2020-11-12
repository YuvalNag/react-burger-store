import { FormControl, InputLabel, List, ListItem, MenuItem, Select, TextField } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import Button from "../../UI/Button/Button";
// import { Link } from "react-router-dom";

const OrderSummary = (props) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [region, setRegion] = useState('');
    console.log('regions', props.regions);

    const validPhone = (phone.length === 10 && /^\d+$/.test(phone));
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
                        required
                        error={!validPhone}
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        variant="outlined"
                        helperText="שדה זה חובה"
                    />
                </ListItem>
                <ListItem>
                    <FormControl variant="outlined" style={{ width: '225.76px' }}>
                        <InputLabel id="region">אזור חלוקה</InputLabel>
                        <Select
                            labelId="region"
                            id="region"
                            value={region}
                            onChange={(event) => setRegion(event.target.value)}
                            label="אזור חלוקה"
                        >
                            {props.regions && Object.keys(props.regions).map(regionKey => <MenuItem value={regionKey}>{props.regions[regionKey].city} {props.regions[regionKey].location}</MenuItem>)}
                        </Select>
                    </FormControl>
                </ListItem>
            </List>
            <Button
                disabled={!validPhone}
                clicked={() => props.continued(
                    {
                        name,
                        phone,
                        region,
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
export default OrderSummary