const BASE_URL = 'https://product-api-aspnetcore.fly.dev/API';

const fetchCategories = async () => {
    try {
        const response = await fetch(`${BASE_URL}/categories`);
        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

const createCategory = async (category) => {
    try {
        const response = await fetch(`${BASE_URL}/categories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category),
        });
        if (!response.ok) {
            throw new Error('Failed to create category');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating category:', error);
    }
};

const updateCategory = async (categoryId, updatedCategory) => {
    try {
        const response = await fetch(`${BASE_URL}/categories/${categoryId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCategory),
        });
        if (!response.ok) {
            throw new Error('Failed to update category');
        }
        return await response.json();
    } catch (error) {
        console.error('Error updating category:', error);
    }
};

const deleteCategory = async (categoryId) => {
    try {
        const response = await fetch(`${BASE_URL}/categories/${categoryId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete category');
        }
        if (response.status !== 204) {
            return await response.json();
        } else {
            return;
        } 
    } catch (error) {
        console.error('Error deleting category:', error);
    }
};

export default {
    fetchCategories,
    updateCategory,
    deleteCategory,
    createCategory
}