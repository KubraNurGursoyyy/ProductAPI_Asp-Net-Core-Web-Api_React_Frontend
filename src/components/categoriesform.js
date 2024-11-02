//bu listenin sonundaki component olacak burada yeni category ekleyebileceğiz.
import React, {useState} from 'react';
import categoriesApi from '../service/categoriesapi';
import { CiCirclePlus } from "react-icons/ci";

const CategoriesForm = ({ onCategoryCreate }) => { //cretaede liste güncelle
    
    const [categoryName, setCategoryName] = useState('');
    
    const handleCreate = async () => {
        if(!categoryName) return;
        try {
            await categoriesApi.createCategory({name: categoryName});
            onCategoryCreate();//listeyi güncelle
            setCategoryName('');
        } catch (error) {
            console.error("Error adding category:", error);
        }
    };
    
    return (
        <tr>
            <td></td>
            <td>
                <input
                    type='text'
                    placeholder='Yeni Kategori Ekleyin'
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                ></input>
            </td>
            <td>
                <button onClick={handleCreate}>
                <CiCirclePlus size={25} />
                </button>
            </td>
        </tr>
    );
};

export default CategoriesForm;
