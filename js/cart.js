const cartProductsDiv = document.getElementById("cart-products");
const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

function displayProducts(products) {
  let str = "";
  products.forEach((product) => {
    str += `
             <div class='card w-25 p-3'>
               <img style='height: 200px; width: 300px; object-fit: contain' src='${product.images[0]}' alt='${product.title}' />
              <h3>${product.title}</h3>
              <h3>${product.price}$</h3>
              <p>${product.brand}</p>
              <div class=''>
                  <a href='/pages/product-details.html?id=${product.id}' class='btn btn-dark btn-sm'>Details</a>
                  <button onclick='addToCart(${product.id})' class='btn btn-dark btn-sm'>Add to cart</button>
              </div>
               </div>
          `;
  });
  cartProductsDiv.innerHTML = str;
}

displayProducts(cartProducts);
