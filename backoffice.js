const form = document.getElementById("product-form");
const submitBtn = document.getElementById("submit-btn");
const params = new URLSearchParams(window.location.search);
const productId = params.get("productId");

window.addEventListener("DOMContentLoaded", () => {
  if (productId) {
    submitBtn.innerText = "Modifica prodotto";
    fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNTk1M2I3NDcwMTAwMTU4YjJhZWUiLCJpYXQiOjE3Mzc3MDk5MDcsImV4cCI6MTczODkxOTUwN30.g7gXcWHRw5mGDwLujK5yhwG2f2uYNMCmJqjYdQCei8s",
      },
    })
      .then((resp) => resp.json())
      .then((product) => {
        form.elements.nomeProdotto.value = product.name;
        form.elements.descrizioneProdotto.value = product.description;
        form.elements.nomeBrand.value = product.brand;
        form.elements.immagineProdotto.value = product.imageUrl;
        form.elements.prezzoProdotto.value = product.price;
      });
  }
});

form.onsubmit = function (event) {
  event.preventDefault();

  const newProduct = {
    name: form.elements.nomeProdotto.value,
    description: form.elements.descrizioneProdotto.value,
    brand: form.elements.nomeBrand.value,
    imageUrl: form.elements.immagineProdotto.value,
    price: form.elements.prezzoProdotto.value,
  };

  console.log(newProduct);

  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId || ""}`, {
    method: productId ? "PUT" : "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNTk1M2I3NDcwMTAwMTU4YjJhZWUiLCJpYXQiOjE3Mzc3MDk5MDcsImV4cCI6MTczODkxOTUwN30.g7gXcWHRw5mGDwLujK5yhwG2f2uYNMCmJqjYdQCei8s",
    },
  })
    .then((resp) => {
      console.log("Response:", resp);
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Errore nella creazione o modifica del prodotto");
      }
    })
    .then((product) => {
      console.log("Product:", product);
      if (!productId) {
        alert(`Prodotto con id ${product._id} creato correttamente!`);

        form.reset();
      } else {
        alert(`Prodotto con id ${product._id} modificato correttamente!`);
      }
    })
    .catch((error) => {
      console.error(error);
      alert("C'è stato un errore. Riprova.");
    });
};
