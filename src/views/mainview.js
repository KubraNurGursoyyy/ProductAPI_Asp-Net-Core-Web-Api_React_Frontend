import React, { useState, useEffect } from 'react';
import CategoriesTable from '../components/categories/categoriestable';
import categoriesApi from '../service/categoriesapi';
import productsapi from '../service/productsapi';
import ProductsTable from '../components/products/productstable';

const MainView = () => {

  const [categories, setCategories] = useState([]);//en başta boş
  const [products, setProducts] = useState([]);//en başta boş

  useEffect(() => {
    const load = async() => {
      handleCategoryChanges();
      handleProductChanges();
    };
    load();    
  }, []);//yalnızca ilk yüklendiğinde çalıştır

  const handleCategoryChanges = async () => {
    // Kategorileri yeniden yükle
    const fetchedCategories = await categoriesApi.fetchCategories();
    if (fetchedCategories) setCategories(fetchedCategories);
  };  

  const handleCategoryDelete = async () => {
    handleCategoryChanges();
    handleProductChanges();
  };  
  
  const handleProductChanges = async () => {
    const fetchedProducts = await productsapi.fetchProducts();
    if (fetchedProducts) setProducts(fetchedProducts);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <CategoriesTable
        categories={categories}
        onCategoryCreate={handleCategoryChanges}
        onCategoryUpdate={handleCategoryChanges}
        onCategoryDelete={handleCategoryDelete}
      />
      <ProductsTable
        products={products}
        categories={categories}
        onProductCreate={handleProductChanges}
        onProductUpdate={handleProductChanges}
        onProductDelete={handleProductChanges}
      />
    </div>
  );
};

export default MainView;

