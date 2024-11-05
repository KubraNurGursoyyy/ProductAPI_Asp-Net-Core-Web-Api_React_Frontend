import React, {useState} from 'react';
import productsapi from '../../service/productsapi';
import PriceForm from '../shared/priceform';
import { CiTrash, CiSaveDown1, CiEdit, CiCircleRemove } from "react-icons/ci";

const TableRowProducts = ({ product, categories, onProductUpdate, onProductDelete }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(product.name);
    const [editedPrice, setEditedPrice] = useState(product.price);
    
    const category = categories.find(cat => cat.id === product.categoryID);
    const categoryName = category ? category.name : "Unknown";

    
    const handleUpdate = async () => {
        if(isEditing) {
            await productsapi.updateProduct(
                product.id, 
                {id: product.id, name: editedName, price: editedPrice, categoryID: product.categoryID})
                .then(() => {
                onProductUpdate();//listeyi güncelle
                setIsEditing(false);
            }).catch(error => console.error("Update failed", error));
        }else {
            setIsEditing(true);
        }
    };
    const handleDelete = async () => {
        console.log("delete " + product.id)
        await productsapi.deleteProduct(product.id)
            .then(() => {
                onProductDelete(); // Listeyi güncelle
            })
            .catch(error => console.error("Delete failed", error));
    };
    return (
        <tr>
            <td>{product.id}</td>
            <td>
                {isEditing ? (
                    <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        />
                ):(product.name)
                }
            </td>
            <td>
                {isEditing ? (
                    <PriceForm value={editedPrice} onChange={setEditedPrice} /> 
                ):(product.price)
                }
            </td>
            <td>{categoryName}</td>
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

export default TableRowProducts;
