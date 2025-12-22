document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Milk", price: 29.99 },
    { id: 2, name: "Bread", price: 19.99 },
    { id: 3, name: "Wine", price: 59.999 },
  ];

  /* OLD CODE: const cart = []; */
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span> 
    <button data-id="${product.id}">Add to cart</button> 
    `; //product is from forEach
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    saveCart();
    renderCart();
  }

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function renderCart() {
    cartItems.innerText = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)}
        `;
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      });
    } else {
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }

  checkOutBtn.addEventListener("click", () => {
    cart.length = 0;
    saveCart();
    alert("Checkout successfully");
    renderCart();
  });
  renderCart();
});

//Understanding
// Wait until the entire HTML document is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Array acting as product data (like a small database)
  const products = [
    { id: 1, name: "Milk", price: 29.99 }, // product object with id, name, price
    { id: 2, name: "Bread", price: 19.99 },
    { id: 3, name: "Wine", price: 59.999 },
  ];

  // Empty array to store products added to the cart
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Grabbing required DOM elements by their IDs
  const productList = document.getElementById("product-list"); // container for products
  const cartItems = document.getElementById("cart-items"); // container for cart items
  const emptyCartMessage = document.getElementById("empty-cart"); // "cart is empty" message
  const cartTotalMessage = document.getElementById("cart-total"); // total price section
  const totalPriceDisplay = document.getElementById("total-price"); // total price value
  const checkOutBtn = document.getElementById("checkout-btn"); // checkout button

  // Loop through each product and display it on the page
  products.forEach((product) => {
    // Create a div for each product
    const productDiv = document.createElement("div");

    // Add CSS class to the product div
    productDiv.classList.add("product");

    // Insert product name, price and button inside the div
    // product comes from the forEach loop
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span> 
    <button data-id="${product.id}">Add to cart</button> 
    `;

    // Add the product div to the product list container
    productList.appendChild(productDiv);
  });

  // Event delegation: listen for clicks inside the product list
  productList.addEventListener("click", (e) => {
    // Check if the clicked element is a button
    if (e.target.tagName === "BUTTON") {
      // Get product id from data-id attribute and convert it to number
      const productId = parseInt(e.target.getAttribute("data-id"));

      // Find the matching product from products array
      const product = products.find((p) => p.id === productId);

      // Add the selected product to the cart
      addToCart(product);
    }
  });

  // Function to add a product to the cart
  function addToCart(product) {
    // Push the product object into cart array
    cart.push(product);
    saveCart();

    // Re-render the cart UI after adding product
    renderCart();
  }

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Function to display cart items and total price
  function renderCart() {
    // Clear existing cart items before re-rendering
    cartItems.innerText = "";

    // Variable to calculate total price
    let totalPrice = 0;

    // If cart has items
    if (cart.length > 0) {
      // Hide "cart empty" message
      emptyCartMessage.classList.add("hidden");

      // Show total price section
      cartTotalMessage.classList.remove("hidden");

      // Loop through each item in the cart
      cart.forEach((item, index) => {
        // Add item price to total price
        totalPrice += item.price;

        // Create a div for cart item
        const cartItem = document.createElement("div");

        // Display item name and price
        cartItem.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)}
        `;

        // Add cart item to cart container
        cartItems.appendChild(cartItem);

        // Update total price on UI
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      });
    } else {
      // If cart is empty, show empty cart message
      emptyCartMessage.classList.remove("hidden");

      // Reset total price display
      totalPriceDisplay.textContent = `$0.00`;
    }
  }

  // Handle checkout button click
  checkOutBtn.addEventListener("click", () => {
    // Clear the cart by resetting its length
    cart.length = 0;

    // Show success message
    alert("Checkout successfully");

    // Re-render cart after checkout
    renderCart();
  });
  renderCart();
});

/*Summary for your Developer Journey
When you are deciding whether to put a loop inside a 
render
 function, ask yourself:

"Will this list change after the page loads?"
No (like a blog post, or a fixed product catalog) -> Just loop once at the start.
Yes (like a Todo list, Shopping Cart, or Chat messages) -> Put the loop inside a 
render function so you can call it whenever the data update*/
