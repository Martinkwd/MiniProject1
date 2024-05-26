// fetch("HardwareStore.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const inventory = data.inventory; // Assuming products are stored under a key named "products"
//     const template = document.getElementById("cards-template");
//     for (let product of inventory) {
//       const card = template.content.cloneNode(true);
//       card.querySelector(".card-title").innerText = product.name;
//       card.querySelector(".card-price").innerText = "$" + product.price;
//       card.querySelector(".card-description").innerText = product.description;
//       card
//         .querySelector(".card-img-top")
//         .setAttribute("src", product.thumbnail);
//       document.getElementById("cards").appendChild(card);
//     }
//   });

function fetchData(filter) {
  fetch("HardwareStore.json")
    .then((response) => response.json())
    .then((data) => {
      let items = data.inventory;
      if (filter) {
        items = items.filter((item) => item.category === filter);
      }
      const template = document.getElementById("cards-template");
      for (let product of items) {
        const card = template.content.cloneNode(true);
        card.querySelector(".card-title").innerText = product.name;
        card.querySelector(".card-price").innerText = "$" + product.price;
        card.querySelector(".card-description").innerText = product.description;
        card
          .querySelector(".card-img-top")
          .setAttribute("src", product.thumbnail);
        document.getElementById("cards").appendChild(card);
      }
    });
}
