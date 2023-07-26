import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React from 'react'

const Itemcard = ({ pr }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pr.imageart} />
                <Card.Body>
                    <Card.Title>{pr.designation}</Card.Title>
                    <Card.Text>
                        {pr.prix}
                    </Card.Text>
                    <Button variant="primary">Add To Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Itemcard
