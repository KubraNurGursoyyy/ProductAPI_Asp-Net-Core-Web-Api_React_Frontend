import React from 'react';
import '../table.css';
import CategoriesForm from './categoriesform';
import TableRowCategories from './tablerowcategories'

const CategoriesTable = ({ categories, onCategoryCreate, onCategoryUpdate, onCategoryDelete  }) => {
    return (
        <table> {/* CSS sınıfı ekleniyor */}
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Category Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
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
