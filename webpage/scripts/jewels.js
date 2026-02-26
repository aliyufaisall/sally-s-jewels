console.log('hey')
const products = [
  {
    id: 1,
    image: "images/first-image.jpeg",
    description: "Elegant gold necklace and rings",
    price: "250,000 Naira"
  },
  {
    id: 2,
    image: "images/second-image.jpeg",
    description: "Luxury gold jewelry set",
    price: "500,000 Naira"
  },
  {
    id: 3,
    image: "images/third-image.jpeg",
    description: "Beautiful Gold rings",
    price: "120,000 Naira"
  }
];

function updateCartCount() {

  const cartCount =
    document.querySelector(".cart-count");

  if (!cartCount) return;

  let total = 0;

  cart.forEach(item => {
    total += item.quantity;
  });

  cartCount.textContent = total;
}

const container = document.querySelector("#product");

products.forEach(function(product) {

  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <img src="${product.image}">
    <p>${product.description}</p>
    <h3>${product.price}</h3>
    <label>Quantity: 
    <select class="quantity">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </label>
    <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
  
  `;
  const button = card.querySelector(".add-to-cart");
  button.addEventListener("click", function() {
    let matchingItem = undefined;
    const productId = parseInt(this.getAttribute("data-product-id"));
    const quantity = parseInt(card.querySelector(".quantity").value);

    // Find if the item already exists in the cart
    cart.forEach(function(item) {
      if (item.id === productId) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      cart.push({id: productId, quantity: quantity});
    }

    // UPDATE UI: This must be inside the click function to run every time
    updateCartCount();
    
    console.log("Current Cart:", cart);
  });

  container.appendChild(card);
});

// Run once on load to show existing cart count if any
updateCartCount(); 
