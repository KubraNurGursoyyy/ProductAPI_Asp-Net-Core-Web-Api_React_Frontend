import React, {useState} from 'react';
import categoriesApi from '../service/categoriesapi';
import { CiTrash, CiSaveDown1, CiEdit, CiCircleRemove } from "react-icons/ci";

const TableRowCategories = ({ category, onCategoryUpdate, onCategoryDelete }) => {
    
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(category.name);
    
    const handleUpdate = async () => {
        if(isEditing) {
            console.log("update " + category.id , editedName)
            await categoriesApi.updateCategory(category.id, {id: category.id, name: editedName}).then(() => {
                onCategoryUpdate();//listeyi güncelle
                setIsEditing(false);
            }).catch(error => console.error("Update failed", error));
        }else {
            setIsEditing(true);
        }
    };
    const handleDelete = async () => {
        console.log("delete " + category.id)
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
                    {isEditing ? 
                    <CiSaveDown1 size={25}/> 
                    :<CiEdit size={25} />
                    }
                </button>
            </td>
            <td>
                {isEditing ? (
                    <button onClick={() => setIsEditing(false)}>
                        <CiCircleRemove size={25} />
                    </button>
                ) : (
                    <button onClick={handleDelete}>
                        <CiTrash size={25} />
                    </button>
                )}
            </td>
        </tr>
    );
};

export default TableRowCategories;
