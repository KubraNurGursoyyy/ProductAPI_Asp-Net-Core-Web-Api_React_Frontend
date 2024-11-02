import React, {useState} from 'react';
import productsapi from '../service/productsapi';
import PriceForm from './priceform';
import { CiTrash, CiSaveDown1, CiEdit } from "react-icons/ci";

const TableRowProducts = ({ product, onProductUpdate, onProductDelete }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(product.name);
    const [editedPrice, setEditedPrice] = useState(product.price);
    
    
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
            <td>{product.categoryID}</td>
            <td>
                <button onClick={handleUpdate}>
                    {isEditing ? 
                    <CiSaveDown1 size={25}/> 
                    :<CiEdit size={25} />
                    }
                </button>
                <button onClick={handleDelete}>
                    <CiTrash size={25} />
                </button>
            </td>
        </tr>
    );
};

export default TableRowProducts;
