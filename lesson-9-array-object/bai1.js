/* 
1.
const array = [5, 3, 7, 9, 2, 6, 34, 0, 10];
Viết function:
a. thêm/ xóa 1 phần tử vào đầu, cuối. (đầu vào là 1 giá trị)
b. duyệt mảng, truy xuất 1 phần tử trong mảng (console.log ra giá trị)
c. tìm số lớn nhất (return ra max)
d. tìm số bé nhất (return ra min)
e. cho x, tìm x có trong mảng hay không. (return true or false)
f. viết hàm tính tổng 2 số. dùng hàm đó tính tổng của mảng (return tổng)

Homework
g. sắp xếp mảng theo lớn dần, bé dần.
h. thêm/ xóa 1 phần tử tại 1 vị trí bất kì. // splice
*/

const array = [5, 3, 7, 9, 2, 6, 34, 0, 10];

// a. thêm/ xóa 1 phần tử vào đầu, cuối. (đầu vào là 1 giá trị)
function themPToDau(x) {
  array.unshift(x);
}
themPToDau(20);
console.log(array);

function xoaPTODau() {
  array.shift();
}
xoaPTODau();
console.log(array);

function themPTOCuoi(x) {
  array.push(x);
}
themPTOCuoi(100);
console.log(array);

function xoaPTOCuoi() {
  array.pop();
}
xoaPTOCuoi();
console.log(array);

// b. duyệt mảng, truy xuất 1 phần tử trong mảng (console.log ra giá trị)

function consoleLogArray() {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
consoleLogArray();

// const array = [5, 3, 7, 9, 2, 6, 34, 0, 10];
// c. tìm số lớn nhất (return ra max)
function getMax() {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}
getMax();

// d. tìm số bé nhất (return ra min)
function getMin() {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
}
getMin();

// e. cho x, tìm x có trong mảng hay không. (return true or false)
function isExist(x) {
  for (let i = 0; i < array.length; i++) {
    if (x === array[i]) {
      return true;
    }
  }
  return false;
}
console.log("isExist", isExist(5));

// f. viết hàm tính tổng 2 số. dùng hàm đó tính tổng của mảng (return tổng)
function sum(a, b) {
  return a + b;
}

function kiemtrasole(x) {
  return x % 2 !== 0;
}

function sumArray() {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    // if (kiemtrasole(array[i])) {
    //   total = sum(total, array[i]);
    // }
    total = sum(total, array[i]);
  }

  return total;
}

console.log("sumArray", sumArray());
