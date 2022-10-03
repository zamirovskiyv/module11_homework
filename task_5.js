// Задание 5
let x = 3,
  n = 3;

const arrow = (x, n) => {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
};

console.log(arrow(x, n));
