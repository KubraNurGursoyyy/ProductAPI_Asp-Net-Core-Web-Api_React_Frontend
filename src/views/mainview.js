import React from 'react';
import CategoryList from '../components/categorieslist';
import ProductList from '../components/productlist';

const MainView = () => {
  return (
    <div style={{ display: 'flex' }}>
      <CategoryList />
      <ProductList />
    </div>
  );
};

export default MainView;
