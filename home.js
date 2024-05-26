fetch("HardwareStore.json")
  .then((response) => response.json())
  .then((data) => {
    const inventory = data.inventory; // Assuming products are stored under a key named "inventory"

    inventory.sort((a, b) => b.sales - a.sales);

    const top10Items = inventory.slice(0, 10);

    const template = document.getElementById("cards-template");
    for (let product of top10Items) {
      const card = template.content.cloneNode(true);
      card.querySelector(".card-title").innerText = product.name;
      card.querySelector(".card-price").innerText = "$" + product.price;
      //   card.querySelector(".card-description").innerText = product.description;
      card
        .querySelector(".card-img-top")
        .setAttribute("src", product.thumbnail);
      document.getElementById("cardss").appendChild(card);
    }
  });
