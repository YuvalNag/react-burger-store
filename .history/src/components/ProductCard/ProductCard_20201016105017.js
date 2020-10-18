import React from 'react'

import classes from './ProductCard.module.css'



const ProductCard = ({ title, description, price, imageSrc }) => {
    return (
        <div className={classes.card}>
            <div className={classes.content}>
                <h2 className={classes.title}>{title}</h2>
                <p className={classes.copy}>{description}</p>
                <button className={classes.btn}>ORDER NOW</button>
            </div>
        </div>
    )
}
export default ProductCard