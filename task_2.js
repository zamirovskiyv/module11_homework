// Задание 2
let inNum = Math.round(Math.random() * 1100);

function isPrime(num) {
  if (num < 2 || num > 1000) return " данные неверны";

  let k = Math.sqrt(num);
  for (let i = 2; i <= k; i++)
    if (num % i === 0) return `Это число не простое: ${num}`;

  return `Это число простое: ${num}`;
}

console.log(isPrime(inNum));
