// Задание 1
let arrFun = [4, 2, null, 7, "a", ""];

verifyCounts(arrFun);

function verifyCounts(arr2) {
  let evenCount = 0,
    oddCount = 0,
    otherValues = 0;

  for (let i = 0; i < arr2.length; i++) {
    if (isNamber(arr2[i])) {
      if (arr2[i] % 2 == 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    } else {
      otherValues++;
    }
  }

  console.log("Event:" + evenCount);
  console.log("Odd:" + oddCount);
  console.log("Other:" + otherValues);
}

function isNamber(value) {
  if (value instanceof Number) value = value.valueOf();

  return isFinite(value) && value === parseInt(value, 10);
}
