import React, { useState, useEffect } from 'react';
import CategoriesTable from '../components/categoriestable';
import categoriesApi from '../service/categoriesapi';

const MainView = () => {

  const [categories, setCategories] = useState([]);//en başta boş

  useEffect(() => {
    const loadCategories = async() => {
      handleChanges();
    };
    loadCategories();
  }, []);//yalnızca ilk yüklendiğinde çalıştır

  const handleChanges = async () => {
    // Kategorileri yeniden yükle
    const fetchedCategories = await categoriesApi.fetchCategories();
    if (fetchedCategories) setCategories(fetchedCategories);
  };

  return (
    <div style={{ display: 'flex' }}>
      <CategoriesTable
        categories = {categories}
        onCategoryCreate={handleChanges}
        onCategoryUpdate={handleChanges} 
        onCategoryDelete={handleChanges} 
       />{/* categories propu */} 
    </div>
  );
};

export default MainView;

