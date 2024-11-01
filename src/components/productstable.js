import React from 'react';
import './table.css'; // CSS dosyasını içe aktarıyoruz
import ProductsForm from './productsform';

const ProductsTable = ({ products, categories, onProductCreate }) => {
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
                <ProductsForm
                    categories={categories}
                    onProductCreate={onProductCreate} 
                />
            </tbody>
        </table>
    );
};

export default ProductsTable;
