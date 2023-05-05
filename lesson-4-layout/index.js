function renderProductItem(product) {
  const item = `
  <div class="col">
          <div class="product-item">
            <img src="${product.image}" alt="" />
            <div class="product-detail">
              <h2 class="product-name">${product.name}</h2>
              <div class="product-price">$${product.price}</div>
              <button onclick="AddProductToCarts('${product.id}')">Thêm</button>
            </div>
          </div>
        </div>
        `;
  return item;
}

const productList = [
  { id: "b1", image: "./burger.jpg", name: "Burger", price: 1 },
  { id: "b2", image: "./burger.jpg", name: "Burger 2", price: 2 },
  { id: "b3", image: "./burger.jpg", name: "Burger 3", price: 3 },
  { id: "b4", image: "./burger.jpg", name: "Burger 4", price: 4 },
  { id: "b5", image: "./burger.jpg", name: "Burger 5", price: 5 },
  { id: "b6", image: "./burger.jpg", name: "Burger 6", price: 6 },
];

function renderProductList() {
  const productListElement = document.getElementById("product-list");
  for (const product of productList) {
    const item = renderProductItem(product);
    productListElement.innerHTML += item;
  }

  // for (let j = 0; j < productList.length; j++) {
  //   const product = productList[j];
  //   const item = renderProductItem(product);
  //   productListElement.innerHTML += item;
  // }

  // for (let i = 0; i < 10; i++) {
  //   const product = { image: "./burger.jpg", name: "Burger", price: 4 };
  //   const item = renderProductItem(product);
  //   productListElement.innerHTML += item;
  // }
}
renderProductList();

const carts = [];

function AddProductToCarts(productId) {
  // array find - tìm 1 element ở trong array
  // const productItem = productList.find((product) => product.id === productId);
  // carts.push(productItem);
  // console.log(carts);

  // kiểm tra có sản phẩm trong carts không
  // nếu có thì cộng số lượng lên là 1
  // nếu không thì thêm thuộc tính số lượng là 1
  const cartItem = carts.find((item) => item.id === productId);
  if (cartItem) {
    // cartItem !== undefined
    cartItem.quantity++;
  } else {
    const productItem = productList.find((product) => product.id === productId);
    carts.push({ ...productItem, quantity: 1 });
  }
}
