import React from 'react'
import { Card, Button } from 'react-bootstrap'



const ProductCard = ({ title, description, price, imageSrc }) => {
    return (
        <Card  style={{ width: 'fit-content' }} class="text-right">
            <Card.Img variant="top" src={imageSrc} />
            <Card.Body>
                <Card.Title class="text-right">{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-right">{price}</Card.Subtitle>
                <Card.Text class="text-right">
                    {description}
                </Card.Text>
                <Button variant="primary">ORDER NOW</Button>
            </Card.Body>
        </Card>)
}
export default ProductCard