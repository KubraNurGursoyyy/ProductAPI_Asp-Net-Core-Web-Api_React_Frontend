import React, {useState, useEffect} from 'react';
import '../table.css';
import ProductsForm from './productsform';
import TableRowProducts from './tablerowproducts';
import Filter from '../shared/filter';

const ProductsTable = ({ products, categories, onProductCreate, onProductUpdate, onProductDelete}) => {
    
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    const handleFilter = (data) => {
        console.log("data: " , data)
        if (data) {
            setFilteredProducts(data);
        } else {
            setFilteredProducts(products);
        }
    };

    return (
        <div>
            <Filter categories={categories} onFilter={handleFilter} />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product) => (
                        <TableRowProducts 
                            key={product.id} 
                            product={product} 
                            categories={categories}
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
        </div>
    );
};

export default ProductsTable;
