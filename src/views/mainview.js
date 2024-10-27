import React, { useState, useEffect } from 'react';
import CategoriesTable from '../components/categoriestable';
import categoriesApi from '../service/categoriesapi';

const MainView = () => {

  const [categories, setCategories] = useState([]);//en başta boş

  useEffect(() => {
    const loadCategories = async() => {
      const fetchedCategories = await categoriesApi.fetchCategories();
      if(fetchedCategories)
        setCategories(fetchedCategories);
    };
    loadCategories();
  }, []);//yalnızca ilk yüklendiğinde çalıştır

  const handleCategoryUpdate = async () => {
    // Kategorileri yeniden yükle
    const fetchedCategories = await categoriesApi.fetchCategories();
    if (fetchedCategories) setCategories(fetchedCategories);
  };

  const handleCategoryDelete = async () => {
      const fetchedCategories = await categoriesApi.fetchCategories();
      if (fetchedCategories) setCategories(fetchedCategories);
  };

  return (
    <div style={{ display: 'flex' }}>
      <CategoriesTable
        categories = {categories}
        onCategoryUpdate={handleCategoryUpdate} 
        onCategoryDelete={handleCategoryDelete} 
       />{/* categories propu */} 
    </div>
  );
};

export default MainView;

