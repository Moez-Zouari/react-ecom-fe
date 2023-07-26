import React from 'react';
import Table from 'react-bootstrap/Table';
const ProductList = ({ products, deleteProduct }) => {

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Référence</th>
                        <th>designation</th>
                        <th>Marque</th>
                        <th>Prix</th>
                        <th>Qtestock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((pr, index) =>
                        <tr key={index}>
                            <td><img src={pr.imageart} alt={pr.designation} width={80} height={80} /></td>
                            <td>{pr.reference}</td>
                            <td>{pr.designation}</td>
                            <td>{pr.marque}</td>
                            <td>{pr.prix}</td>
                            <td>{pr.qtestock}</td>
                            <td>Action</td>
                        </tr>
                    )}

                </tbody>
            </Table>
        </div>
    )
}


export default ProductList;

