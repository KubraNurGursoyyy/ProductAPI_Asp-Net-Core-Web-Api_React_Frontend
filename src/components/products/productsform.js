import React, {useState} from 'react';
import productsApi from '../../service/productsapi';
import PriceForm from '../shared/priceform';
import { CiCirclePlus } from "react-icons/ci";

const ProductsForm = ({ categories, onProductCreate }) => { //cretaede liste güncelle
    
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategoryId, setProductCategoryId] = useState('');
    
    const handleCreate = async () => {
        if (!productName || !productPrice || !productCategoryId) {
            alert("Please Fill In All Fileds!"); // Uyarı mesajı
            return;
        }
        try {
            await productsApi.createProduct({
                name: productName, 
                price: parseFloat(productPrice),
                categoryID: productCategoryId
            });
            onProductCreate();//listeyi güncelle
            setProductName('');
            setProductPrice('');
            setProductCategoryId('');

        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    //ürün name, price, kategoriId var
    return (
        <tr>
            <td></td>
            <td>
                <input
                    type='text'
                    placeholder='Add Product'
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                ></input>
            </td>
            <td>
                <PriceForm value={productPrice} onChange={setProductPrice} /> {/* PriceForm componenti */}
            </td>
            <td>
            <select value={productCategoryId}
                    onChange={(e) => setProductCategoryId(e.target.value)}>
                        <option value="" disabled>Category</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}

            </select>
            </td>
            <td>
                <button onClick={handleCreate}>
                    <CiCirclePlus size={25}/>
                </button>
            </td>
        </tr>
    );
};

export default ProductsForm;
