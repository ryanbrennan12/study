const swap = (array, idx1, idx2) => {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

const backtrack = (array, pos, n, results) => {

    if (pos === n) {
      results.push(array.slice());
    } else {
      for (var i = pos; i <= n; i ++) {
        swap(array, pos, i);
        backtrack(array, pos + 1, n, results);
        swap(array, pos, i);
      }
    }
  }

const permute = (nums) => {
  const results = [];

  backtrack(nums, 0, nums.length - 1, results);
  return results;
}


console.log(permute([2,4,6]))