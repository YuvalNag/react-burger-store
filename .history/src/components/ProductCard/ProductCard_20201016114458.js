import React from 'react'

// import classes from './ProductCard.module.css'
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button, makeStyles, CardActions, Divider, Theme, createStyles, useTheme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            margin: '1rem',
            width: 'fit-content'
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            backgroundSize: 'auto',
            width: '100%'
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            padding:'1rem'
        },
        playIcon: {
            height: 38,
            width: 38,
        },
    }),
);


const ProductCard = ({ title, description, price, imageSrc }) => {
    const classes = useStyles();
    const theme = useTheme();
    theme.direction = 'rtl'
    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {price}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <Typography variant="subtitle1" color="textSecondary">
                        {description}
                    </Typography>
                    {/* <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton> */}
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image={imageSrc}
                title={title}
            />
        </Card>
    );
}
export default ProductCard