/* 
  querySelector 
  getElementById
  getElementsByTagName
  getElementsByClassName
  querySelectorAll
*/

const h2Tag = document.getElementById("titleh2");
h2Tag.innerHTML = "updated";

const input = document.getElementById("input"); // lấy element
input.value = "input changed";
input.style.backgroundColor = "red";

function hello(id) {
  // console.log(event);
  console.log(id); // lấy id của thẻ button
  // alert("hello");
}

const btn = document.getElementById("btn");
btn.onclick = hello;

function ThemSanPham(product) {
  const productListElement = document.getElementById("product-list");
  const item = document.createElement("li");
  item.id = product.id;
  item.onclick = hello;
  item.innerHTML = product.name;
  productListElement.appendChild(item); // removeChild
}

function ThemSanPham2(product) {
  const productListElement = document.getElementById("product-list");

  const item = `<li id="${product.id}" onclick="hello('${product.id}')">${product.name}</li>`;
  // const item = "<li>" + product + "</li>"; // <li>Water</li>
  productListElement.innerHTML += item;
}

// ThemSanPham();

const products = [
  { name: "Coffee", id: "cf" }, //0
  { name: "Tea", id: "tea" }, // 1
  { name: "Milk", id: "m" }, // 2
  { name: "Water", id: "w" },
  { name: "Ice-cream", id: "i" },
];

function TaoListSanPham(productList) {
  for (const p of productList) {
    ThemSanPham2(p); // { name: "Coffee", id: "cf" }
  }
}
TaoListSanPham(products);
