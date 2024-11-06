import React, { useState } from 'react';
import productsApi from '../../service/productsapi';
import PriceForm from './priceform';
import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";

const Filter = ({ categories, onFilter }) => {

    const [selectedCategory, setSelectedCategory] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleFilter = async () => {
        console.log("filters: ", selectedCategory, maxPrice);
        productsApi.fetchFilteredProducts(selectedCategory, maxPrice).then(data => {
            onFilter(data); // API'den gelen veriyi güncelle
        });
    };

    const handleResetCategory = async () => {
        setSelectedCategory(''); // Kategoriyi sıfırla
        const data = await productsApi.fetchFilteredProducts(null, maxPrice); // Sadece fiyatı koruyarak filtrele
        onFilter(data); // Sadece fiyat filtresini koru
    };
    const handleResetPrice = async () => {
        setMaxPrice(''); // Fiyatı sıfırla
        const data = await productsApi.fetchFilteredProducts(selectedCategory, null); // Sadece kategoriyi koruyarak filtrele
        onFilter(data); // Sadece kategori filtresini koru
    };

    return (
        <div className="filter-container">
            <PriceForm value={maxPrice} onChange={setMaxPrice} />
            <button onClick={handleFilter}>
                <CiCircleCheck size={30}/>
            </button>
            <button onClick={handleResetPrice}>
                <CiCircleRemove size={30}/>
            </button>
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="" disabled>Categories</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
            <button onClick={handleFilter}>
                <CiCircleCheck size={30}/>
            </button>
            <button onClick={handleResetCategory}>
                <CiCircleRemove size={30}/>
            </button>
         </div>
    );

};


export default Filter;