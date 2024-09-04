// Function to add item to the cart
function addToCart(name, price) {
    const item = { name, price };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
    displayCart(); // Update cart display after adding item
    displayTotalPrice(); // Update total price display after adding item
}

// Function to remove item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove item from cart array
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); // Update cart display after removing item
    displayTotalPrice(); // Update total price display after removing item
}

// Function to calculate total price
function calculateTotalPrice() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price;
    });
    return totalPrice;
}

// Function to display total price
function displayTotalPrice() {
    const totalPriceContainer = document.getElementById('total-price');
    const totalPrice = calculateTotalPrice();
    totalPriceContainer.textContent = `Your total price comes to: $${totalPrice.toFixed(2)}`;
}

// Function to display cart items
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    
    cartContainer.innerHTML = ''; // Clear existing items

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>No items in the cart.</p>';
    } else {
        cart.forEach((item, index) => {
            cartContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${getImageUrl(item.name)}" width="100">
                    <p>${item.name} - $${item.price}</p>
                    <button onclick="removeFromCart(${index})">Remove from Cart</button>
                </div>
            `;
        });
    }
}

function getImageUrl(gameName) {
    if (gameName === "Crafting") {
        return "pictures/crafting.jpeg";
    } else if (gameName === "The One Ring") {
        return "pictures/The one ring.jpeg";
    } else if (gameName === "Western Shooter") {
        return "pictures/western shooter.jpeg";
    } else if (gameName === "Slay Them All") {
        return "pictures/slay them all.jpeg";
    } else if (gameName === "Prestrike") {
        return "pictures/Prestirke.jpeg";
    } else if (gameName === "Uplifted Order") {
        return "pictures/uplifted order.jpeg";
    }
    // Default to a placeholder image if no match is found
    return "pictures/placeholder.jpeg"; 
}


// Call the function to display cart items and total price when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    displayCart();
    displayTotalPrice();
});


