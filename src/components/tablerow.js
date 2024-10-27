import React, {useState} from 'react';
import categoriesApi from '../service/categoriesapi';

const TableRow = ({ category, onCategoryUpdate, onCategoryDelete }) => {
    
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(category.name);
    
    const handleUpdate = async () => {
        if(isEditing) {
            await categoriesApi.updateCategory(category.id, {name: editedName}).then(() => {
                onCategoryUpdate();//listeyi güncelle
                setIsEditing(false);
            }).catch(error => console.error("Update failed", error));
        }else {
            setIsEditing(true);
        }
    };
    const handleDelete = async () => {
        await categoriesApi.deleteCategory(category.id)
            .then(() => {
                onCategoryDelete(); // Listeyi güncelle
            })
            .catch(error => console.error("Delete failed", error));
    };
    return (
        <tr>
            <td>{category.id}</td>
            <td>
                {isEditing ? (
                    <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        />
                ):(category.name)
                }
            </td>
            <td>
                <button onClick={handleUpdate}>
                    {isEditing ? 'Kaydet' : 'Güncelle'}
                </button>
                <button onClick={handleDelete}>Sil</button>
            </td>
        </tr>
    );
};

export default TableRow;