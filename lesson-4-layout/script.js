function renderProductItem(product) {
  const item = `<div class="col">
    <div class="product-item">
      <img src="./burger.jpg" alt="" />
      <div class="product-detail">
        <h2 class="product-name">${product.name}</h2>
        <div class="product-price">$${product.price}</div>
      </div>
    </div>
  </div>`;
  return item;
}

function renderProductList(products) {
  const productListElement = document.getElementById("product-list");
  for (const product of products) {
    const item = renderProductItem(product);
    productListElement.innerHTML += item;
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
