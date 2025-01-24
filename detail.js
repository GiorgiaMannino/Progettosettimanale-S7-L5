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
  <div class="d-flex justify-content-center align-items-center mt-3">
            <a 
              href="backoffice.html?productId=${product._id}" 
              class="btn btn-primary btn-sm px-3 py-2 shadow-sm"
              style="transition: background-color 0.3s ease;">
              Modifica
            </a>
          </div>
  <div class="col-md-8 text-start">
    <div class="product-info">
      <h2 class="fw-bold mt-5">${product.name}</h2>
      <p class="text-muted mt-3">${product.description} <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio quibusdam, reprehenderit, quaerat delectus beatae nemo inventore voluptatum cumque laboriosam consequuntur, error porro totam cum suscipit quidem eos dolorum. Expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio quibusdam, reprehenderit, quaerat delectus beatae nemo inventore voluptatum cumque laboriosam consequuntur, error porro totam cum suscipit quidem eos dolorum. Expedita.</p>
         <div class="mt-4">
        
      <div class="mt-4">
          <hr class="my-4">
        <a href="#" class="text-decoration-none text-primary" data-bs-toggle="collapse" data-bs-target="#productSpecs" aria-expanded="false" aria-controls="productSpecs">
          Visualizza tutte le specifiche ⬇
      
        </a>
            <hr class="my-4">
        <div class="collapse" id="productSpecs">
          <h5 class="fw-bold">Caratteristiche Tecniche</h5>
          <ul class="text-muted fs-6">
            <li>Display: Lorem ipsum dolor</li>
            <li>Memoria: Lorem ipsum dolor</li>
            <li>Fotocamera: Lorem ipsum dolor</li>
            <li>Processore: Lorem ipsum dolor</li>
          </ul>
          <hr class="my-4">

          <div class="d-flex justify-content-between align-items-center mt-4">
            <div class="d-flex align-items-center">
              <h5 class="fw-bold mb-0 me-2">Disponibilità:</h5>
              <span class="badge bg-success">Disponibile</span>
            </div>
            <span class="fs-4 fw-bold text-success px-4 py-2 rounded-5 shadow-sm"> € ${product.price}</span>
          </div>
          <hr class="my-4">
        </div>
      </div>
      <div class="mt-5">
        <h3 class="fw-bold mb-4">Recensioni</h3>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card bg-light text-dark">
              <div class="card-body">
                <h6 class="card-title">Recensione 1</h6>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet eros sit amet ipsum egestas cursus. Quisque ac metus et velit consequat."</p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card bg-light text-dark">
              <div class="card-body">
                <h6 class="card-title">Recensione 2</h6>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet eros sit amet ipsum egestas cursus. Quisque ac metus et velit consequat."</p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card bg-light text-dark">
              <div class="card-body">
                <h6 class="card-title">Recensione 3</h6>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet eros sit amet ipsum egestas cursus. Quisque ac metus et velit consequat."</p>
              </div>
            </div>
          </div>
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
