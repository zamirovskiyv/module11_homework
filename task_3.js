// Задание 3
function getSumFunction(a) {
  return function (b) {
    return a + b;
  };
}

const sumFunction = getSumFunction(7);
const sum = sumFunction();
console.log(sum);
