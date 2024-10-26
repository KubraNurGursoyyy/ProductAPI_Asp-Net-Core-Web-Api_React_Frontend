import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsView from '../views/ProductsView';
import CategoriesView from '../views/CategoriesView';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/products" element={<ProductsView />} />
                <Route path="/categories" element={<CategoriesView />} />
                <Route path="/" element={<ProductsView />} /> {/* Default route */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
