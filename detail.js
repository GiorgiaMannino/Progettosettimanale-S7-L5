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
  <div class="col-md-7 text-center">
    <img src="${product.imageUrl}" class="img-fluid rounded w-75" alt="${product.name}">
  </div>
  <div class="col-md-8 text-start">
    <div class="product-info">
      <h2 class="fw-bold mt-5">${product.name}</h2>
      <p class="text-muted mt-3">${product.description} <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio quibusdam, reprehenderit, quaerat delectus beatae nemo inventore voluptatum cumque laboriosam consequuntur, error porro totam cum suscipit quidem eos dolorum. Expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio quibusdam, reprehenderit, quaerat delectus beatae nemo inventore voluptatum cumque laboriosam consequuntur, error porro totam cum suscipit quidem eos dolorum. Expedita.</p>
         <div class="mt-4">
          <h5 class="fw-bold">Caratteristiche Tecniche</h5>
          <ul class="text-muted fs-6">
            <li>Display: Lorem ipsum dolor sit amet
            <li>Memoria: Lorem ipsum dolor sit amet</li>
            <li>Fotocamera: Lorem ipsum dolor sit amet</li>
            <li>Processore: Lorem ipsum dolor sit amet</li>
          </ul>
        </div>

      <div class="d-flex justify-content-between align-items-center mt-3">
        <span class="fs-5 fw-bold mb-5 bg-secondary text-white px-3 py-2 rounded">€${product.price}</span>
        <div class="d-flex">
          <a href="backoffice.html?productId=${product._id}" class="btn btn-primary me-2 my-5">Modifica</a>
        </div>
      </div>
    </div>
  </div>
</div>

    `;
  })
  .catch((err) => {
    console.error("Errore nel recupero dei dettagli del prodotto:", err);
    const productDetail = document.getElementById("product-detail");
    productDetail.innerHTML = `<p class="text-danger">Errore nel caricare i dettagli del prodotto. Riprova più tardi.</p>`;
  });
