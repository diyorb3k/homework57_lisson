const productDetailsDiv = document.getElementById("product-details");
const productId = new URLSearchParams(location.search).get("id");
const product = products.find((p) => p.id == productId) || {};

productDetailsDiv.innerHTML = `
<div class='card p-3 d-flex'>
  <img style='height: 200px; width: 300px; object-fit: contain' src='${product.images[0]}' alt='${product.title}' />
  <div>
    <h3>${product.title}</h3>
    <h3>${product.price}$</h3>
    <p>${product.brand}</p>
    <div class=''>
        <a href='/pages/product-details.html?id=${product.id}' class='btn btn-dark btn-sm'>Details</a>
        <button class='btn btn-dark btn-sm'>Add to cart</button>
    </div>
  </div>
</div>
`;
