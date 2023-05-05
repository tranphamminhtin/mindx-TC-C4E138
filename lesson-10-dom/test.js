// setTimeout(() => {
//   console.log("set timeout");
// }, 5000); // 2s

// let time = 10;
// const a = setInterval(() => {
//   console.log(time--);
//   if (time <= 0) {
//     clearInterval(a);
//   }
// }, 1000);

// sessionStorage
// reload trang thì mất

// localStorage
// reload trang không mất
localStorage.clear(); // xóa toàn bộ
localStorage.setItem("carts", "value"); // key và value đều là kiểu string
const value = localStorage.getItem("carts");
console.log(value);

// json
const carts = [{ name: "quần" }, { name: "áo" }];
const b = JSON.stringify(carts); // biến đổi giá trị thành kiểu string
console.log(b);
const c = JSON.parse(b); // biến đổi string thành 1 giá trị
console.log(c);
localStorage.setItem("carts", JSON.stringify(carts));

// ứng dụng
function UpdateCarts() {
  const carts2 = JSON.parse(localStorage.getItem("carts"));
  carts2.push({ name: "vớ" });
  localStorage.setItem("carts", JSON.stringify(carts2));
}
