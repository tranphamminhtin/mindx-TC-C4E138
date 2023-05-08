/**
 * 1. cho n, tạo mảng từ 1-n. // for
 * 2. cho mảng, tính tổng của mảng. // reduce
 * 3. cho mảng, tính tổng các số chia hết cho 3.
 * 4. cho mảng, tính tổng các số bình phương của mảng.
 * vd: [2,3,4] => 2*2 + 3*3 + 4*4
 *
 * 5. cho n, kiểm tra số nguyên tố.
 * 6. cho mảng, tính tổng các số nguyên tố trong mảng.
 * 7. cho n, vẽ hình vuông với độ dài là n.
 * 8. cho n, vẽ hình tam giác vuông với độ dài n.
 * 9. cho object {price: 10, quantities: 2}, tính tiền của object
 * 10. cho array object
 * [{price: 10, quantities: 2}, {price: 15, quantities: 5}]
 * Tính tổng tiền.
 */

const array = [1, 2, 3, 4, 5]; // [1, 4, 9, 16, 25]

/**
 * 1 => 1 * 1
 * 2 => 2 * 2
 * 3 => 3 * 3
 * number => number * number
 *
 */

// const array2 = array.map((number) => number * number); //
// const array3 = array.map(function (number) {
//   return number * number;
// });

// const b = ["coffee", "tea", "milk"];
// /**
//  * coffee => <li>coffee</li>
//  * tea => <li>tea</li>
//  * milk => <li>milk</li>
//  * value => <li>value</li>
//  */
// b.map((value) => `<li>${value}</li>`); // "<li>" + value + "</li>"

// const arr = [1, 2, 3, 4, 5];
// /**
//  * số lẻ thì giữ nguyên // value % 2 !== 0
//  * số chẳn thì bình phương // else
//  */
// arr.map((value) => {
//   if (value % 2 !== 0) {
//     return value;
//   } else {
//     return value * value;
//   }
// });

// //
// const students = [
//   { name: "a", gender: "male" },
//   { name: "b", gender: "female" },
//   { name: "c", gender: "female" },
//   { name: "d", gender: "male" },
//   { name: "e", gender: "female" },
//   { name: "f", gender: "male" },
// ];
// const feStudents = students.filter((student) => {
//   // luôn luôn return dạng boolean (true or false)
//   if (student.gender === "female") {
//     return true;
//   } else {
//     return false;
//   }
// });

// //
// const products = [
//   { name: "gà", group: "2-chân" },
//   { name: "vịt", group: "2-chân" },
//   { name: "chó", group: "4-chân" },
//   { name: "mèo", group: "4-chân" },
// ];
// // lấy các con 2 chân ra
// function getAnimalByGroup(products, group) {
//   // group: 2-chân or 4-chân
//   return products.filter((product) => product.group === group);
// }

// const animal2chan = getAnimalByGroup(products, "2-chân"); // []
// const animal4chan = getAnimalByGroup(products, "4-chân");

// function renderAnimal(animals){
//   for (const animal of animals) {
//     // renderItem
//   }
// }
// renderAnimal(animal2chan)
// renderAnimal(animal4chan)

//
const arr = [1, 2, 3, 4, 5, 6]; // 0

arr.reduce((result, item) => {
  if (item % 2 === 0) {
    result += item;
  }
  return result;
}, 0);

const array2 = [1, 4, 7, 9, 2, 5, 6, 8]; // => {sochan: 10, sole: 30}
const asd = array2.reduce(
  (result, item) => {
    // console.log("trước", result, item);
    if (item % 2 === 0) {
      result.sochan++;
    } else {
      result.sole++;
    }
    // console.log("sau", result, item);
    return result;
  },
  { sochan: 0, sole: 0 }
);
