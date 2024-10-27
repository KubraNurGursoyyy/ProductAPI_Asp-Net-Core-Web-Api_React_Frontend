import React from 'react';
import CategoryTable from '../components/categoriestable';
import ProductTable from '../components/productstable';

const MainView = () => {
  return (
    <div style={{ display: 'flex' }}>
      <CategoryTable />
      <ProductTable />
    </div>
  );
};

export default MainView;
