function isEnoughCapacity(products, containerSize) {
  const totalAmount = Object.values(products).reduce(
    (sum, amount) => sum + amount,
    0
  );

  return totalAmount <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

document.getElementById("task-1-output").innerHTML = `
  <p>${isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)}</p>
  <p>${isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)}</p>
  <p>${isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)}</p>
  <p>${isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)}</p>
`;