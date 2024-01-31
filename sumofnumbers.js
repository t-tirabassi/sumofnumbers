const numbers = [1, 2, 3, 4, 5];

function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; ++i) {
    sum += list[i];
  }

  return sum;
}

console.log(sumFor(numbers));

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    ++i;
  }

  return sum;
}

console.log(sumWhile(numbers));

function sumRecursionWay(list, index = 0) {
  if (index === list.length) {
    return 0;
  }
  return list[index] + sumRecursionWay(list, index + 1);
}

console.log(sumRecursionWay(numbers));

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(numbers));
