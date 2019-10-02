//Fill the first place- How many choices do we have?
//when you run out of steps


const swap = (array, idx1, idx2) => {
  const temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;

  return array;
}
const permute = (array, startIdx, endIdx) => {
  let results = [];
  if (startIdx === endIdx) {
    results.push(array.join(''));
  } else {
    for (var i = startIdx; i <= endIdx; i ++) {
      swap(array, startIdx, i);
      permute(array, startIdx + 1, endIdx);
      swap(array, i, startIdx);
    }
  }

  return results
}
var alphabets = ['A','B','C'];
console.log(permute(alphabets, 0, alphabets.length-1));

//Choose a character
//Unchose a character
//Permute the rest
const helper = (string, stringChosen) => {
  //base case
  if (!string.length) {
    //i should print what I have chosen up until this point
    return stringChosen;
  } else {
//CHOOSE, EXPLORE< UNCHOOSE
    for (var i = 0; i < string.length; i ++) {
      //CHOOSE
      let char = string[i];
      stringChosen += char;

      //HAVE TO pass slightly different state to the next call
      //wnat to pass string with the current character removed and chosen with the current char added
      //want to take out char and att it to the end of chosen
      let newString = string.slice(0,i) + string.slice(i + 1);
      //EXPLORE
      helper(newString, stringChosen);
      //UN-CHOOSE
      //if you don't unchoose, it will have a limited path of exploration;

    }
  }
}

//Teacher, just a starter function

  //passes the string and what is initially chosen answer (A)
  //hopefully our chosen string has been growing


//for each chracter in char in string
//choose char to be the first
//permute(the rest of the string)
//unchoose char
//I am answer (A)
//how do we keep track of our choices?
//keep track of them in a string

//write a helper that adds in more parameters
