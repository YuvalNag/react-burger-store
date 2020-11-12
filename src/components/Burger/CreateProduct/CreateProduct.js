import { InputAdornment, List, ListItem, TextField } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import Button from "../../UI/Button/Button";
// import { Link } from "react-router-dom";

const CreateProduct = (props) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageSrc, setImageSrc] = useState('');




    return (
        <div style={{ direction: 'rtl' }}>
            <h3>הוסף מוצר</h3>
            <List noValidate autoComplete="off">
                <ListItem>
                    <TextField id="title"
                        label="שם"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        variant="outlined" />
                </ListItem>
                <ListItem>
                    <TextField
                        label="מחיר"
                        id="price"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}

                        InputProps={{
                            startAdornment: <InputAdornment position="start">₪</InputAdornment>,
                        }}
                        variant="outlined"
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        id="description"
                        label="תיאור נוסף"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        variant="outlined" />
                </ListItem>
                <ListItem>
                    <TextField
                        id="imageSrc"
                        label="קישור לתמונה"
                        value={imageSrc}
                        onChange={(event) => setImageSrc(event.target.value)}
                        variant="outlined" />
                </ListItem>

            </List>
            <Button
                clicked={() => props.continued(
                    {
                        title,
                        description,
                        price,
                        imageSrc,
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
export default CreateProduct