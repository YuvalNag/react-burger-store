import React from 'react'
import { Card, Button } from 'react-bootstrap'



const ProductCard = ({ title, description, price, imageSrc }) => {
    return (
        <Card style={{ width: '18rem' }} className="float-right">
            <Card.Img variant="top" src={imageSrc} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary">ORDER NOW</Button>
            </Card.Body>
        </Card>)
}
export default ProductCard