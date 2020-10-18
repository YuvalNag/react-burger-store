import React from 'react'

// import classes from './ProductCard.module.css'
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button, makeStyles, CardActions } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: '12rem',
        backgroundSize: 'contain',
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
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    ORDER NOW
          </Button>
            </CardActions>
        </Card>
    )
}
export default ProductCard