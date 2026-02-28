export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function updateCartCount() {

  const cartCount =
    document.querySelector(".cart-count");

  if (!cartCount) return;

  let total = 0;

  cart.forEach(item => {
    total += item.quantity;
  });

  cartCount.textContent = total;
}

export function addToCart(productId, quantity) {
  let matchingItem;

  cart.forEach(function(item) {
    if (item.id === productId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      id: productId, 
      quantity: quantity
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}
