import React from 'react';
import './categories.css'; // CSS dosyasını içe aktarıyoruz
import TableRow from './tablerow';

const CategoriesTable = ({ categories, onCategoryUpdate, onCategoryDelete  }) => {
    return (
        <table className="categories-table"> {/* CSS sınıfı ekleniyor */}
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Category Name</th>
                </tr>
            </thead>
            <tbody>
                {categories.map((category) => (
                    <TableRow 
                        key={category.id} 
                        category={category} 
                        onCategoryUpdate={onCategoryUpdate} 
                        onCategoryDelete={onCategoryDelete} 
                    />
                ))}
            </tbody>
        </table>
    );
};

export default CategoriesTable;
