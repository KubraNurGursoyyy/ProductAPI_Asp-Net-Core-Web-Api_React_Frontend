const BASE_URL = 'https://product-api-aspnetcore.fly.dev/API';

const fetchProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products`);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};


const createProduct = async (product) => {
    try {
        const response = await fetch(`${BASE_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
        if (!response.ok) {
            throw new Error('Failed to create product');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating product:', error);
    }
};

const updateProduct = async (productId, updatedProduct) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        });
        if (!response.ok) {
            throw new Error('Failed to update product');
        }
        return await response.json();
    } catch (error) {
        console.error('Error updating product:', error);
    }
};

const deleteProduct = async (productId) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${productId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete product');
        }
        return await response.json();
    } catch (error) {
        console.error('Error deleting product:', error);
    }
};

const fetchFilteredProducts = async (categoryId = null, maxPrice = null) => {
    try {
        const queryParams = new URLSearchParams();
        if (categoryId) queryParams.append('categoryId', categoryId);
        if (maxPrice) queryParams.append('maxPrice', maxPrice);

        const response = await fetch(`${BASE_URL}/products/filter?${queryParams}`);
        if (!response.ok) {
            throw new Error('Failed to fetch filtered products');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching filtered products:', error);
    }
};

export default {
    fetchProducts,
    updateProduct,
    deleteProduct,
    createProduct,
    fetchFilteredProducts
}