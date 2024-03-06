document.addEventListener("alpine:init", () => {
  Alpine.data("supplier", () => ({
    items: [
      { id: 1, name: "BOGOR GAYA", img: "Bogor-gaya.webp", deskripsi:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus praesentium veritatis obcaecati sit? Ipsa aspernatur fugit rem vel, sapiente eos culpa eveniet minima nobis cum assumenda itaque tempore dignissimos unde." },
      { id: 2, name: "Pabrik Baju Muslim", img: "Pabrik-Baju-Muslim.webp", deskripsi:"cek" },
      { id: 3, name: "Toko Romantis Elektrik", img: "Toko-Romantis-Elektrik.webp", deskripsi:"cek" },
     
    ],
  }));
});