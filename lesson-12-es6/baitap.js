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

// 1.
function taomang(n) {
  const array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  return array;
}
taomang(5);
taomang(50);
taomang(100);
console.log(taomang(5));

// 2.
function sumArray(array) {
  return array.reduce((result, item) => {
    result += item;
    return result;
  }, 0);
}
sumArray([5, 1, 8, 0, 4, 10]);
sumArray([1, 2, 3, 4]);
sumArray([3, 5, 7]);
console.log(sumArray([5, 1, 8, 0, 4, 10]));

// 3. cho mảng, tính tổng các số chia hết cho 3.
function sumArray3(array) {
  // cách 1: dùng biến sum
  // let sum = 0;
  // for (const element of array) {
  //   if (element % 3 === 0) {
  //     sum += element;
  //   }
  // }
  // return sum;
  // cách 2: dùng reduce
  return array.reduce((sum, element) => {
    if (element % 3 === 0) {
      sum += element;
    }
    return sum;
  }, 0);
}
sumArray3([1, 2, 3, 4]);
sumArray3([3, 5, 6, 8, 9, 10, 99]);

//4. cho mảng, tính tổng các số bình phương của mảng.
// vd: sumArray4([2,3,4]) => 2*2 + 3*3 + 4*4
function sumArray4(array) {
  // cách 1: dùng biến sum
  // let sum = 0;
  // for (const element of array) {
  //   sum += element*element;
  // }
  // return sum;
  // cách 2: dùng reduce & map
  // const newArr = array.map((element) => {
  //   return element * element;
  // }); // [2*2, 3*3, 4*4]
  // return newArr.reduce((sum, element)=>{
  //   sum += element
  //   return sum;
  // },0);

  // cách 3 rút gọn
  return array
    .map((element) => element * element)
    .reduce((sum, element) => {
      sum += element;
      return sum;
    }, 0);
}
sumArray4([1, 2, 3, 4]);

// 5. cho n, kiểm tra số nguyên tố.
function isPrimeNumber(n) {
  // số lớn hơn 1 // if n > 1
  // và không chia hết cho số khác ngoài nó (vòng lặp từ 2 -> n-1)
  if (n > 1) {
    for (let i = 2; i < n - 1; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
isPrimeNumber(1);
isPrimeNumber(3);
isPrimeNumber(7);
isPrimeNumber(9);

// 6. cho mảng, tính tổng các số nguyên tố trong mảng.
function sumArray6(array) {
  // cách 1: dùng biến sum
  // let sum = 0;
  // for (const element of array) {
  //   if (isPrimeNumber(i)) {
  //     sum += element;
  //   }
  // }
  // return sum;
  // cách 2: dùng reduce
  return array.reduce((sum, element) => {
    if (isPrimeNumber(element)) {
      sum += element;
    }
    return sum;
  }, 0);
}
sumArray6([3, 4, 5, 6, 7, 8, 9]);

// 7. cho n, vẽ hình vuông bằng * với độ dài là n.
function square(n) {
  for (let i = 1; i <= n; i++) {
    let sum = "";
    for (let j = 1; j <= n; j++) {
      console.log("*", "j");
      sum += "*";
    }
    console.log(sum);
  }
}
square(3);

// 8. cho n, vẽ hình tam giác vuông bằng * với độ dài n.
function triangle(n) {
  for (let i = 1; i <= n; i++) {
    let sum = "";
    for (let j = 1; j <= i; j++) {
      sum += "*";
    }
    console.log(sum);
  }
}
triangle(n);

// 9. cho object {price: 10, quantities: 2}, tính tiền của object
function calculatePriceItem(object) {}
calculatePriceItem({ price: 10, quantities: 2 });

// 10. cho array object
// [{price: 10, quantities: 2}, {price: 15, quantities: 5}]
// Tính tổng tiền.
function calculatePriceItems(productList) {}
calculatePriceItems([
  { price: 10, quantities: 2 },
  { price: 15, quantities: 5 },
]);

/**
 * tạo web site cho nhập 2 số a,b (a<b)
 * tính tổng các số nguyên tố từ a đến b
 * xuất kết quả ra web
 */
