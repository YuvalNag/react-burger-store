import React from 'react'

// import classes from './ProductCard.module.css'
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button, makeStyles, CardActions, Divider,Theme, createStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
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
      
        <CardMedia
          className={classes.cover}
          image={imageSrc}
          title={title}
        />
      </Card>
    );
  }
export default ProductCard