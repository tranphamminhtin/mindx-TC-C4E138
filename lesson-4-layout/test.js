function renderProductItem(product) {
  const item = `
  <div class="product-item">
    <img src="./burger.jpg" alt="" />
    <div class="product-detail">
      <h2 class="product-name">${product.name}</h2>
      <div class="product-price">$${product.price}</div>
    </div>
  </div>`;
  const col = document.createElement("div");
  col.classList.add("col");
  col.innerHTML = item;
  return col;
}

function renderProductList(products) {
  const productListElement = document.getElementById("product-list");
  for (let i = 0; i < products.length; i++) {
    const item = renderProductItem(products[i]);
    // productListElement.innerHTML += item;
    productListElement.appendChild(item);
  }
}

const productList = [
  { name: "burger", price: 4 },
  { name: "burger2", price: 5 },
  { name: "burger3", price: 6 },
  { name: "burger4", price: 7 },
  { name: "burger5", price: 8 },
  { name: "burger6", price: 9 },
];

renderProductList(productList);
