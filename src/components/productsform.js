import React, {useState} from 'react';
import productsApi from '../service/productsapi';

const ProductsForm = ({ categories, onProductCreate }) => { //cretaede liste güncelle
    
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategoryId, setProductCategoryId] = useState('');
    
    const handleCreate = async () => {
        if (!productName || !productPrice || !productCategoryId) {
            alert("Lütfen tüm alanları doldurun!"); // Uyarı mesajı
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
            <select value={productCategoryId}
                    onChange={(e) => setProductCategoryId(e.target.value)}>
                        <option value="" disabled>Lütfen Kategori Seçin</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}

            </select>
            </td>
            <td>
                <button onClick={handleCreate}>Ekle</button>
            </td>
        </tr>
    );
};

export default ProductsForm;
