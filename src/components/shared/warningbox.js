import React from 'react';

const WarningBox = ({ products, onConfirm, onCancel }) => {
    return (
        <div className="warning-box">
            <p>The category you are about to delete is associated with the following products:</p>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
            <p>Are you sure you want to delete this category and its associated products?</p>
            <button onClick={onConfirm}>Confirm</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
};

export default WarningBox;