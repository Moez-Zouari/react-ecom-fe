import React from 'react'
import Itemcard from './Itemcard'

const ProductItemsCard = ({ products }) => {
    return (
        <div>
            {products.map((pr, index) =>
                <Itemcard pr={pr} />
            )}
        </div>
    )
}

export default ProductItemsCard
