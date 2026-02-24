console.log('hey')
const products = [
  {
    image: "images/first-image.jpeg",
    description: "Elegant gold necklace",
    price: "250,000 Naira"
  },
  {
    image: "images/second-image.jpeg",
    description: "Luxury diamond ring",
    price: "500,000 Naira"
  },
  {
    image: "images/third-image.jpeg",
    description: "Classic silver bracelet",
    price: "120,000 Naira"
  }
];

const container = document.querySelector("#product");

products.forEach(function(product) {

  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <img src="${product.image}">
    <p>${product.description}</p>
    <h3>${product.price}</h3>
    <button>Add to Cart</button>
  `;

  container.appendChild(card);

});