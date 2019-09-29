function makeArray(howLong) {
  let arr =  new Array(howLong)

  for (var i = 0; i < arr.length; i ++) {
    arr[i] = i
  }

  return arr;
}

function binarySearch(array, target) {
  let floor = 0;
  let ceiling = array.length;
  let count = 0

  while(floor <= ceiling) {
    let mid = Math.floor((ceiling + floor) / 2);
    count ++;
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
//enter your array length here:
const inputArray = makeArray(10000)
binarySearch(inputArray, 66)
