import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} /> {/* Default route */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
