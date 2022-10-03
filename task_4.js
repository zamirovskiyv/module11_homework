// Задание 4
let i = 5,
  b = 15;

function printToConsole(a, b) {
  if (i > b) {
    clearInterval(id);
  } else {
    console.log(i);
    i++;
  }
}

let id = setInterval(printToConsole, 1000, i, b);
