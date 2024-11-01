import React from 'react';
import './table.css'; // CSS dosyasını içe aktarıyoruz
import ProductsForm from './productsform';
import TableRowProducts from './tablerowproducts'

const ProductsTable = ({ products, categories, onProductCreate, onProductUpdate, onProductDelete}) => {
    return (
        <table className="categories-table"> {/* CSS sınıfı ekleniyor */}
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <TableRowProducts 
                        key={product.id} 
                        product={product} 
                        onProductUpdate={onProductUpdate} 
                        onProductDelete={onProductDelete} 
                    />
                ))}
                <ProductsForm
                    categories={categories}
                    onProductCreate={onProductCreate} 
                />
            </tbody>
        </table>
    );
};

export default ProductsTable;
