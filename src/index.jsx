// index.js
import React from 'react';
import {createRoot} from 'react-dom/client';
import AppRoutes from './routes';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot ile oluştur

root.render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>
);
