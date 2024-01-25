// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar slidebar untuk menghilangkan navbarnhya
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});
// filtering Menu Food

// const menuBtns = document.querySelectorAll(".menu-btn");
// const foodItems = document.querySelectorAll(".menu-card");

// let activeBtn = "geprek";

// showFoodMenu(activeBtn);

// menuBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     resetActiveBtn();
//     showFoodMenu(btn.id);
//     btn.classList.add("active-btn");
//   });
// });

// function resetActiveBtn() {
//   menuBtns.forEach((btn) => {
//     btn.classList.remove("active-btn");
//   });
// }

// function showFoodMenu(newMenuBtn) {
//   activeBtn = newMenuBtn;
//   foodItems.forEach((item) => {
//     if (item.classList.contains(activeBtn)) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });
// }

// fitur alpine.js

document.addEventListener("alpine:init", () => {
  Alpine.data("menu", () => ({
    items: [
      { id: 1, name: "Geprek Sambal Ijo", img: "ijo.jpg", price: 15000 },
      { id: 2, name: "Geprek Sambal Pete", img: "pete.jpg", price: 15000 },
      { id: 3, name: "Geprek Sambal Terasi", img: "terasi.jpg", price: 15000 },
      { id: 4, name: "Geprek Sambal Matah", img: "matah.jpg", price: 15000 },
      { id: 5, name: "Geprek Sambal Jontor", img: "jontor.jpg", price: 15000 },
      { id: 6, name: "Geprek Sambal Ijo", img: "ijo.jpg", price: 15000 },
      { id: 7, name: "Geprek Sambal Pete", img: "pete.jpg", price: 15000 },
      { id: 8, name: "Geprek Sambal Terasi", img: "terasi.jpg", price: 15000 },
      { id: 9, name: "Geprek Sambal Matah", img: "matah.jpg", price: 15000 },
      { id: 10, name: "Geprek Sambal Jontor", img: "jontor.jpg", price: 15000 },
    ],
  }));
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);

      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.items = this.items.map((item) => {
          if (item.id !== newItem.id) {
            return item;
          } else {
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);
      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// konkonverensi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
