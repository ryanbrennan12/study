//"Easy way to do this is simulating taking or not taking any given number that we are currently on "
//walk through our array of numbers and simulate taking and not taking the number

const subsets = (nums) => {
  const results = [];

  bTrack(nums, 0, [], results);
  return results;
}

const bTrack = (nums, index, tempArray, results) => {

  results.push(tempArray.slice());
  //at any iteration of this recursive function is just add whatever our current subset is
  //now we need to walk through simulating taking and not taking the current number we are on
  for (let i = index; i < nums.length; i ++) {

    tempArray.push(nums[i]);
    bTrack(nums, i + 1, tempArray, results);
    tempArray.pop(nums[i]);
  }
}
console.log(subsets([1,2]))





var permute = function(nums) {
  let res = [];
  backtrack(nums, 0, nums.length-1, res);
  return res;
};

function backtrack(arr,pos,n,res){
  //
  if(pos === n){
      res.push(arr.slice());
  }else{
      //recursive case
      for(let i = pos; i <= n;i++){
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

// console.log(permute([1,2,3]));

