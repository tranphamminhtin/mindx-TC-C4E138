function taomang(a, b) {
  const array = [];
  for (let i = a; i <= b; i++) {
    console.log(i);
    array.push(i);
  }

  return array;
}

function sumArray(array) {
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

function getNumberA() {
  const soAElement = document.getElementById("soA");
  return soAElement.value;
}

function getNumberB() {
  const soAElement = document.getElementById("soB");
  return soAElement.value;
}

function clickBtn() {
  const soA = +getNumberA();
  const soB = +getNumberB();
  // cách 1
  // const array = taomang(soA, soB);
  // const sum = sumArray(array);
  // console.log(soA, soB, array, sum);

  // cách 2
  let sum = 0;
  for (let i = soA; i <= soB; i++) {
    if (isPrimeNumber(i)) {
      sum += i;
    }
  }
  const sumElement = document.getElementById("sum");
  sumElement.innerHTML = sum;
}
