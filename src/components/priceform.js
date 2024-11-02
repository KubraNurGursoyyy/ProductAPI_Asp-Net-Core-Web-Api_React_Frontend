import React from 'react';

const PriceForm = ({ value, onChange }) => {
    const handlePriceChange = (e) => {
        const input = e.target.value;

        // Geçerli format kontrolü: #####.##
        const isValidFormat = /^(\d{0,5}(\.\d{0,2})?)?$/.test(input);

        if (isValidFormat) {
            onChange(input); // Fiyatı üst bileşene gönder
        }
    };

    return (
        <input
            type="text"
            placeholder="00000.00"
            value={value}
            onChange={handlePriceChange}
        />
    );
};


export default PriceForm;