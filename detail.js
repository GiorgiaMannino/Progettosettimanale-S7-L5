const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("productId");

fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNTk1M2I3NDcwMTAwMTU4YjJhZWUiLCJpYXQiOjE3Mzc3MDk5MDcsImV4cCI6MTczODkxOTUwN30.g7gXcWHRw5mGDwLujK5yhwG2f2uYNMCmJqjYdQCei8s",
  },
})
  .then((response) => response.json())
  .then((product) => {
    const productDetail = document.getElementById("product-detail");

    productDetail.innerHTML = `
      <div class="row justify-content-center mt-5">
        <!-- Colonna per i dettagli del prodotto -->
        <div class="col-md-6">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th>Nome</th>
                <td>${product.name}</td>
              </tr>
              <tr>
                <th>Descrizione</th>
                <td>${product.description}</td>
              </tr>
              <tr>
                <th>Prezzo</th>
                <td>€${product.price}</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between">
            <a href="backoffice.html?productId=${product._id}" class="btn btn-primary">Modifica</a>
            <a href="index.html" class="btn btn-secondary">Torna alla homepage</a>
          </div>
        </div>
        
        <!-- Colonna per l'immagine -->
        <div class="col-md-6">
          <img src="${product.imageUrl}" class="img-fluid rounded" alt="${product.name}">
        </div>
      </div>
    `;
  })
  .catch((err) => {
    console.error("Errore nel recupero dei dettagli del prodotto:", err);
    const productDetail = document.getElementById("product-detail");
    productDetail.innerHTML = `<p class="text-danger">Errore nel caricare i dettagli del prodotto. Riprova più tardi.</p>`;
  });
