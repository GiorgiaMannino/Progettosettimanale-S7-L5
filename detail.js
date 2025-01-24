window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("productId");

  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNTk1M2I3NDcwMTAwMTU4YjJhZWUiLCJpYXQiOjE3Mzc3MDk5MDcsImV4cCI6MTczODkxOTUwN30.g7gXcWHRw5mGDwLujK5yhwG2f2uYNMCmJqjYdQCei8s",
    },
  })
    .then((resp) => resp.json())
    .then((product) => {
      const productDetailContainer = document.getElementById("product-detail");

      productDetailContainer.innerHTML = `
          <div class="card mb-4">
            <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text">€${product.price}</p>
              <button class="btn btn-warning" id="editBtn">Modifica</button>
              <button class="btn btn-danger" id="deleteBtn">Elimina</button>
            </div>
          </div>
        `;

      //    Evento bottone modifica
      const editBtn = document.getElementById("editBtn");
      editBtn.addEventListener("click", () => {
        window.location.href = `backoffice.html?productId=${product._id}`;
      });
    })
    .catch((error) => {
      console.error("Errore nel recupero dei dettagli del prodotto:", error);
      alert("C'è stato un errore nel caricare i dettagli del prodotto.");
    });
});
