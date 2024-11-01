import React, {useState} from 'react';
import productsApi from '../service/productsapi';

const ProductsForm = ({ onProductCreate }) => { //cretaede liste güncelle
    
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [productCategoryId, setProductCategoryId] = useState('');
    
    const handleCreate = async () => {
        if(!productName) return;
        try {
            await productsApi.createProduct({name: productName, price: parseFloat(productPrice)});
            onProductCreate();//listeyi güncelle
            setProductName('');
            setProductPrice('');
            setErrorMessage('');

        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    const handlePriceChange = (e) => {
        const input = e.target.value;
        // Geçerli format kontrolü: #####.##
        const isValidFormat = /^(\d{0,5}(\.\d{0,2})?)?$/.test(input);
                
       if (isValidFormat) {
        setProductPrice(input);
    }
    };

    //ürün name, price, kategoriId var
    return (
        <tr>
            <td></td>
            <td>
                <input
                    type='text'
                    placeholder='Yeni Ürün Ekleyin'
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    placeholder="00000.00"
                    value={productPrice}
                    onChange={handlePriceChange}
                  />
                 
            </td>
            <td>
                <button onClick={handleCreate}>Ekle</button>
            </td>
        </tr>
    );
};

export default ProductsForm;
