// Smooth scroll to products
document.getElementById("get-started").addEventListener("click", () => {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

// Scroll to top
const scrollTopBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Chat button
document.getElementById("chatBtn").addEventListener("click", () => {
  alert("Live chat coming soon!");
});

// CART SYSTEM
const cartCount = document.getElementById("cart-count");
const cartPopup = document.getElementById("cart-popup");
const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");
const closeCart = document.getElementById("close-cart");

let cart = [];

document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", e => {
    const card = e.target.closest(".product-card");
    const name = card.dataset.name;
    const price = parseInt(card.dataset.price.replace(/[₹,]/g, ""));
    cart.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} — ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  totalEl.textContent = `Total: ₹${total}`;
}

document.querySelector(".cart-icon").addEventListener("click", () => {
  cartPopup.style.display = "block";
});

closeCart.addEventListener("click", () => {
  cartPopup.style.display = "none";
});
// PRODUCT POPUP
const popup = document.getElementById("product-popup");
const popupImg = document.getElementById("popup-img");
const popupName = document.getElementById("popup-name");
const popupPrice = document.getElementById("popup-price");
const popupDesc = document.getElementById("popup-desc");
const popupAdd = document.getElementById("popup-add");
const popupClose = document.getElementById("popup-close");

document.querySelectorAll(".product-card img").forEach(img => {
  img.addEventListener("click", e => {
    const card = e.target.closest(".product-card");
    const name = card.dataset.name;
    const price = card.dataset.price;
    const desc = getDescription(name);
    popupImg.src = card.querySelector("img").src;
    popupName.textContent = name;
    popupPrice.textContent = price;
    popupDesc.textContent = desc;
    popup.style.display = "flex";
  });
});

popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

popupAdd.addEventListener("click", () => {
  const name = popupName.textContent;
  const price = parseInt(popupPrice.textContent.replace(/[₹,]/g, ""));
  cart.push({ name, price });
  updateCart();
  popup.style.display = "none";
});

// Sample descriptions
function getDescription(name) {
  const descriptions = {
    "Wireless Headphones": "Experience immersive sound and deep bass with 30-hour battery life.",
    "Smart Watch": "Track your fitness, heart rate, and notifications in style.",
    "Bluetooth Speaker": "Portable speaker with crisp sound and LED glow effect.",
    "Gaming Mouse": "Precision tracking with RGB lighting and ergonomic design.",
    "Phone Stand": "Sturdy adjustable aluminum stand for your desk or nightstand.",
    "VR Headset": "Dive into virtual worlds with 360° panoramic view and comfort fit."
  };
  return descriptions[name] || "Premium tech gadget for modern users.";
}
