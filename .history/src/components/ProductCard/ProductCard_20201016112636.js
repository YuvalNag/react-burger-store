import React from 'react'

// import classes from './ProductCard.module.css'
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button, makeStyles, CardActions, Divider } from '@material-ui/core'

const useStyles = makeStyles({

    media: {
        height: '12rem',
        backgroundSize: 'contain',
        width: 151,
    },
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
});


const ProductCard = ({ title, description, price, imageSrc }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imageSrc}
                    title={title}
                />
                <CardContent>
                    <Typography variant="h4" component="he">
                        ₪{price}
                    </Typography>
                    <Divider />
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                    ORDER NOW
          </Button>
            </CardActions> */}
        </Card>
    )
}
export default ProductCard