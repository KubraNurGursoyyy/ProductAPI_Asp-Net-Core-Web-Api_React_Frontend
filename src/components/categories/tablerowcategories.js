import React, {useState} from 'react';
import categoriesApi from '../../service/categoriesapi';
import productsApi from '../../service/productsapi';
import { CiTrash, CiSaveDown1, CiEdit, CiCircleRemove } from "react-icons/ci";
import WarningBox from '../shared/warningbox';

const TableRowCategories = ({ category, onCategoryUpdate, onCategoryDelete }) => {
    
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(category.name);
    const [showWarning, setShowWarning] = useState(false);
    const [relatedProducts, setRelatedProducts] = useState([]);

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
    const handleDeleteClick = async () => {
        const products = await productsApi.fetchFilteredProducts(category.id);
        if (products.length > 0) {
            setRelatedProducts(products);
            setShowWarning(true);
        } else {
            handleDeleteConfirmed();
        }
    };

    const handleDeleteConfirmed = async () => {
        setShowWarning(false);
        
        for (const product of relatedProducts) {
            await productsApi.deleteProduct(product.id);
        }
        
        await categoriesApi.deleteCategory(category.id)
            .then(() => {
                setRelatedProducts([]); // Listeyi temizle
                onCategoryDelete(); // Listeyi güncelle
            })
            .catch(error => console.error("Delete failed", error));
    };

    const handleCancel = () => {
        setShowWarning(false);
    };

    return (
        <>
            <tr>
                <td>{category.id}</td>
                <td>
                    {isEditing ? (
                        <input
                            type="text"
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                        />
                    ) : (
                        category.name
                    )}
                </td>
                <td>
                    <button onClick={handleUpdate}>
                        {isEditing ? <CiSaveDown1 size={25}/> : <CiEdit size={25} />}
                    </button>
                </td>
                <td>
                    {isEditing ? (
                        <button onClick={() => setIsEditing(false)}>
                            <CiCircleRemove size={25} />
                        </button>
                    ) : (
                        <button onClick={handleDeleteClick}>
                            <CiTrash size={25} />
                        </button>
                    )}
                </td>
            </tr>
            {showWarning && (
                <tr>
                    <td colSpan="4">
                        <WarningBox
                            products={relatedProducts}
                            onConfirm={handleDeleteConfirmed}
                            onCancel={handleCancel}
                        />
                    </td>
                </tr>
            )}
        </>
    );
};

export default TableRowCategories;
