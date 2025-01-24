window.addEventListener("DOMContentLoaded", () => {
  fetch("https://striveschool-api.herokuapp.com/api/product", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNTk1M2I3NDcwMTAwMTU4YjJhZWUiLCJpYXQiOjE3Mzc3MDk5MDcsImV4cCI6MTczODkxOTUwN30.g7gXcWHRw5mGDwLujK5yhwG2f2uYNMCmJqjYdQCei8s",
    },
  })
    .then((resp) => resp.json())

    .then((products) => {
      const productsList = document.getElementById("products-list");

      products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("col-md-4", "mb-4");

        productCard.innerHTML = `
            <div class="card">
              <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text">€${product.price}</p>
                  <a href="detail.html?productId=${product._id}" class="btn btn-link text-end d-block">Scopri di più</a>
                <a href="backoffice.html?productId=${product._id}" class="btn btn-primary ">Modifica</a>
              
            
              </div>
            </div>
          `;

        productsList.appendChild(productCard);
      });
    })

    .catch((error) => {
      console.error("Errore nel recupero dei prodotti:", error);
      alert("C'è stato un errore nel caricare i prodotti.");
    });
});
