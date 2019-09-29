

var searchRange = function(nums, target) {
  //first we could do a binary search to find our target.
  let floor = 0;
  let ceiling = nums.length;

  //we want to find the left-most target
  while(floor <= ceiling) {
    let mid = Math.floor((ceiling + floor) / 2);
    // console.log(nums[mid])
    if (nums[mid] === target) {

      return mid
    }

    if (nums[mid] < target) {
      floor = mid + 1;
    } else if (nums[mid] > target) {
      ceiling = mid - 1;
    }
  }

};

let nums = [5,7,7,8,8,10,77];
let target = 77;

console.log(searchRange(nums, target))


