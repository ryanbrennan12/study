class BinarySearchArray {
  constructor() {

  }
}

BinarySearchArray.prototype.regularSearch = function (array, target) {
  let floor = 0;
  let ceiling = array.length;
  let count = 0

  while (floor <= ceiling) {
    let mid = Math.floor((ceiling + floor) / 2);
    count++;
    if (array[mid] === target) {
      return [{
        'found@index': mid,
        'numOfoperations': count,
      }, `Base log 2 of ${array.length} is ${count}ish`]


    } else if (array[mid] < target) {
      floor = mid + 1;
    } else {
      ceiling = mid - 1;
    }
  }
}
BinarySearchArray.prototype.findLow = function (nums, target) {
  let low = 0;
  let high = nums.length;
  //huge
  while (low < high) {
    let mid = Math.floor((high + low) / 2);

    if (nums[mid] === target || nums[mid] > target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low
}
BinarySearchArray.prototype.findHigh = function (nums, target) {
  let low = 0;
  let high = nums.length;

  while(low < high) {
    let mid = Math.floor((high + low) / 2);

    if (nums[mid] === target || nums[mid] < target) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }

  return high
}



let data = [1,2,5,5,5,6,6,9]

const array = new BinarySearchArray();

console.log(array.findLow(data, 6))
console.log(array.findHigh(data, 6))



