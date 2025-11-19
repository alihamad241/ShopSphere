export const getProducts = (req, res) => {
    const products = [
        { id: 1, name: 'Product A', price: 29.99, imageUrl: '/assets/img/product/product1.jpg' },
        { id: 2, name: 'Product B', price: 39.99, imageUrl: '/assets/img/product/product2.jpg' },
        { id: 3, name: 'Product C', price: 49.99, imageUrl: '/assets/img/product/product3.jpg' },
    ];
    res.status(200).json(products);
};