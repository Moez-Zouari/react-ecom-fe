import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React from 'react'

const Itemcard = ({ pr }) => {
    return (
        <div>
            <Card style={{ width: '20rem', margin: 2 }}>
                <Card.Img variant="top" src={pr.imageart} width={100} height={320} />
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
