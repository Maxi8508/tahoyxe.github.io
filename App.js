// Sample data for products
const products = [
    { id: 1, name: 'Strawberry Taho', price: 20, image: 'src/images.jpg' },
    { id: 2, name: 'Mango Taho', price: 20, image: 'src/images.jpg' },
    { id: 3, name: 'Classic Taho', price: 20, image: 'src/images.jpg' }
];

// Initialize an empty cart
let cart = [];

// Counter for items in the cart
let cartItemCount = 0;

// Function to display products
function displayProducts() {
    const productsContainer = document.querySelector('.products-container');
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Function to handle adding items to cart
function addToCart(id) {
    const productToAdd = products.find(product => product.id === id);
    if (productToAdd) {
        cart.push(productToAdd);
        updateCartDisplay();
        updateCartItemCount();
    }
}

// Function to update cart display
function updateCartDisplay() {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.innerHTML = '';
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Cart is empty</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${item.name} - $${item.price}</p>
            `;
            cartContainer.appendChild(cartItem);
        });
    }
}

// Function to update cart item count
function updateCartItemCount() {
    cartItemCount++;
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.textContent = `Cart (${cartItemCount})`;
}

// Function to display cart modal
function openCartModal() {
    const cartModal = document.getElementById('cartModal');
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartModal && cartOverlay) {
        cartModal.classList.add('active');
        cartOverlay.classList.add('active');
    }
}

// Function to close cart modal
function closeCartModal() {
    const cartModal = document.getElementById('cartModal');
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartModal && cartOverlay) {
        cartModal.classList.remove('active');
        cartOverlay.classList.remove('active');
    }
}

// Event listener for add to cart buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        addToCart(productId);
    }
});

// Event listener for cart button
document.addEventListener('DOMContentLoaded', function() {
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', openCartModal);
    }
});

// Event listener for close button
// Event listener for close button
document.addEventListener('DOMContentLoaded', function() {
    const closeCartButton = document.querySelector('.close-cart');
    if (closeCartButton) {
        closeCartButton.addEventListener('click', closeCartModal);
    }
});


// Event listener for overlay click
const cartOverlay = document.getElementById('cartOverlay');
if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCartModal);
}

// Initialize
displayProducts();
