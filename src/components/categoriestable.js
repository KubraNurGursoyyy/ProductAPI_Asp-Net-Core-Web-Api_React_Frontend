import React from 'react';
import './table.css'; // CSS dosyasını içe aktarıyoruz
import TableRowCategories from './tablerowcategories';
import CategoriesForm from './categoriesform';

const CategoriesTable = ({ categories, onCategoryCreate, onCategoryUpdate, onCategoryDelete  }) => {
    return (
        <table> {/* CSS sınıfı ekleniyor */}
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Category Name</th>
                </tr>
            </thead>
            <tbody>
                {categories.map((category) => (
                    <TableRowCategories 
                        key={category.id} 
                        category={category} 
                        onCategoryUpdate={onCategoryUpdate} 
                        onCategoryDelete={onCategoryDelete} 
                    />
                ))}
                <CategoriesForm
                     onCategoryCreate={onCategoryCreate} 
                />
            </tbody>
        </table>
    );
};

export default CategoriesTable;
