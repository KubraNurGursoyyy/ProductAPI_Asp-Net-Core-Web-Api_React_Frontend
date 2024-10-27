const BASE_URL = 'https://product-api-aspnetcore.fly.dev/API';

// Get all categories
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

// Create a new category
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

// Update a category
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

// Delete a category
const deleteCategory = async (categoryId) => {
    try {
        const response = await fetch(`${BASE_URL}/categories/${categoryId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete category');
        }
        return await response.json();
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