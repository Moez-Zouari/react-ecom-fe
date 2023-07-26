import React from 'react'
import Itemcard from './Itemcard'

const ProductItemsCard = ({ products }) => {
    return (

        <div className="container">
            <div style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "left" }}>
                {products.map((pr, index) =>
                    <Itemcard pr={pr} />
                )}

            </div>
        </div>
    )
}

export default ProductItemsCard
