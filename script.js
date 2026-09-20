let cart = [];
let total = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  total += price;

  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const totalElement = document.getElementById("total");

  cartItems.innerHTML = "";

  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(listItem);
  });

  cartCount.textContent = cart.length;
  totalElement.textContent = total;
}

document.getElementById("checkout").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  alert(`Order placed! Total: $${total}`);
  cart = [];
  total = 0;
  updateCart();
});