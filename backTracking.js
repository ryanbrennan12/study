// https://leetcode.com/problems/subsets/
// https://leetcode.com/problems/permutations/discuss/18239/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partioning)
var subsets = function(nums) {
  let retVal = [];
  backtrack(0, nums, retVal, []);
  return retVal;
};

var backtrack = function(start, nums, combs, set){
  combs.push(set);

  for(let i = start; i < nums.length; i++){
      set.push(nums[i]);
      backtrack(i+ 1, nums, combs, set.slice());
      set.pop();
  }
};


console.log(subsets([1,2,3]))






// var permute = function(nums) {
//   const res = [];
//   backtrack(nums, res);
//   return res;
// };

// function backtrack(nums, res, n = 0) {
//   if (n === nums.length - 1) {
//     //just pushing copies
//       res.push(nums.slice(0));
//       return;
//   }
//   //choose, explore, unchoose
//   for (let i = n; i < nums.length; i++) {
//       [nums[i], nums[n]] = [nums[n], nums[i]];
//       backtrack(nums, res, n + 1);
//       [nums[i], nums[n]] = [nums[n], nums[i]];
//   }
// }




var permute = function(nums) {
  let res = [];
  backtrack(nums,0,nums.length-1,res);
  return res;
};

function backtrack(arr,pos,n,res){
  //
  if(pos === n){
      res.push(arr.slice());
  }else{
      //recursive case
      for(let i = pos; i <= n;i++){
        console.log(arr[pos], arr[i])
          swap(arr,pos,i);
          //this is where we are incrementing our position
          backtrack(arr,pos+1,n,res);
          swap(arr,pos,i);
      }
  }
}

function swap(arr,index1,index2){
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

permute([1,2,3])