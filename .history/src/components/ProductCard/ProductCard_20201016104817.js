import React from 'react'

import classes from './ProductCard.module.css'



const ProductCard = ({ title, description, price, imageSrc }) => {
    return (
        <div class="card">
            <div class="content">
                <h2 class="title">{title}</h2>
                <p class="copy">{description}</p>
                <button class="btn">ORDER NOW</button>
            </div>
        </div>
    )
}
export default ProductCard