var add = function (num1, num2) {
  return num1 + num2;
};

var multiply = function (num1, num2) {
  return num1 * num2;
};

var result = add(multiply(36325, 9824), 777);
console.log(result);

//ARE ARRAYS THE SAME
array1 = [1, 2, 3, 4, 5];
array2 = [1, 2, 3, 4, 5];

var areArraysTheSame = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  var isDifferent = true;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return isDifferent;
};

console.log(areArraysTheSame(array1, array2));
