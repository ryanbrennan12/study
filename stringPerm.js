// function getAllPermutations (string)
//   define results
//   if string is a single character
//     add the character to results
//     return results
//   for each char in string
//     define innerPermutations as a char of string
//     set innerPermutations to getAllPermutations (without next char)
//     foreach string in innerPermutations
//       add defined char and innerPermutations char
//   return results

const getPerms = (str) => {
  const results = [];

  if (str.length === 1) {
    results.push(str);
    return results;
  }

  for (var i = 0; i < str.length; i ++) {
    let firstChar = str[i];
    let strTail = str.substring(0,i) + str.substring(i + 1);
  }
}



let name = 'ryan'

console.log(name.substr(0,1) + name.substr(2))





