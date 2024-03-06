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
// // Toggle class active untuk shopping cart
// const shoppingCart = document.querySelector(".shopping-cart");
// document.querySelector("#shopping-cart-button").onclick = (e) => {
//   shoppingCart.classList.toggle("active");
//   e.preventDefault();
// };
// // togle
// function myFunction() {
//   var popup = document.getElementById("myPopup");
//   popup.classList.toggle("show");
// }
// Klik di luar elemen
// const sc = document.querySelector("#shopping-cart-button");

// document.addEventListener("click", function (e) {
//   if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
//     shoppingCart.classList.remove("active");
//   }
// });
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

// document.addEventListener("alpine:init", () => {
//   Alpine.data("supplier", () => ({
//     items: [
//       { id: 1, name: "BOGOR GAYA", img: "Bogor-gaya.webp", deskripsi:"cek" },
//       { id: 2, name: "Pabrik Baju Muslim", img: "Pabrik-Baju-Muslim.webp", deskripsi:"cek" },
//       { id: 3, name: "Toko Romantis Elektrik", img: "Toko-Romantis-Elektrik.webp", deskripsi:"cek" },
     
//     ],
//   }));
// });
// Alpine.store("cart", {
//   items: [],
//   total: 0,
//   quantity: 0,
//   add(newItem) {
//     const cartItem = this.items.find((item) => item.id === newItem.id);

//     if (!cartItem) {
//       this.items.push({ ...newItem, quantity: 1, total: newItem.price });
//       this.quantity++;
//       this.total += newItem.price;
//     } else {
//       this.items = this.items.map((item) => {
//         if (item.id !== newItem.id) {
//           return item;
//         } else {
//           item.quantity++;
//           item.total = item.price * item.quantity;
//           this.quantity++;
//           this.total += item.price;
//           return item;
//         }
//       });
//     }
//   },
//   remove(id) {
//     const cartItem = this.items.find((item) => item.id === id);
//     if (cartItem.quantity > 1) {
//       this.items = this.items.map((item) => {
//         if (item.id !== id) {
//           return item;
//         } else {
//           item.quantity--;
//           item.total = item.price * item.quantity;
//           this.quantity--;
//           this.total -= item.price;
//           return item;
//         }
//       });
//     } else if (cartItem.quantity === 1) {
//       this.items = this.items.filter((item) => item.id !== id);
//       this.quantity--;
//       this.total -= cartItem.price;
//     }
//   },
// });

// konkonverensi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
