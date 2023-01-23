// Question 1
const isRealPalindrome = (str) => {
let newArr = []
str = str.replace(/[^\w]/g,"")
console.log(str)
let lowerCasedStr = str.toLowerCase().split('')
  for(let i = lowerCasedStr.length-1; i >= 0; i--){
    // console.log(lowerCasedStr[i])
    newArr.push(lowerCasedStr[i])
  }
  if(newArr.join('') === lowerCasedStr.join('')){
    return true
  }else{
    return false
  }
};
console.log(isRealPalindrome("Madam, I'm Adam"))

// Question 2
const runningTotal = (arr) => {
  let newArr = []
  let num = 0;

  for(let i =0; i<arr.length; i++){
    console.log(num += arr[i])
    newArr.push(num)
  }
  return newArr
};

//console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
//console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]

// Question 3
const swap = (str) => {
 let split = str.split(' ')
 console.log(str, 'HELLO')
  
};
 console.log(swap('Four score and seven.'))

// Question 4
const wordSizes = (str) => {
  let obj = {}
  str = str.split(' ')
  for(let i = 0; i < str.length; i++){
    console.log(str[i])
    if(obj[str[i].length]){
      obj[str[i].length]++
    }else{
      obj[str[i].length] = 1
    }
  }
  return obj
};

// console.log(wordSizes('Four score and seven.'))                      // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle the cat and the fiddle!'));         // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }

// Question 5
const union = (arr1,arr2) => {
  let concatedArr = arr1.concat(arr2)
  let results = [...new Set(concatedArr)]

  return results
};

console.log(union([1, 3, 5], [3, 6, 9]));     // [1, 3, 5, 6, 9]
console.log(union([2, 2, 2, 2], [10, 5, 2])); // [2, 10, 5]

// Question 6
const firstRecurring = (string) => {
    for (let i = 0; i < string.length; i++) {
      for (let j = i + 1; j < string.length; j += 1) {
        if (string[i] === string[j]) {
          return string[i]
        }
      }
    }return ""
};
console.log(firstRecurring('reuben'));           // "e"
console.log(firstRecurring('anne'));             // "n"
console.log(firstRecurring('restaurant'));       // "r"

// Question 7
const showMultiplicativeAverage = (arr) => {
let newStr = ""
let intialValue = 1
 let multipliedValue = arr.reduce((accumulator, currentValue) => accumulator * currentValue, intialValue /arr.length)
 return newStr += multipliedValue.toFixed(3)
};
console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

// Quetsion 8
const multiplyList = (arr1, arr2) => {
  return arr1.map((element,i) => element *= arr2[i]);
};

//console.log(multiplyList([3, 5, 7], [9, 10, 11]))

// Question 9
const sequence = (num) => {
  let newArr = []
  for(let i = 1; i<=num; i++){
    newArr.push(i)
  }
  return newArr
};
//console.log(sequence(5));    // [1, 2, 3, 4, 5]
//console.log(sequence(3));    // [1, 2, 3]
//console.log(sequence(1));    // [1]
// The below code connects this JS file to our test file
module.exports = {
  isRealPalindrome,
  runningTotal,
  swap,
  wordSizes,
  union,
  firstRecurring,
  showMultiplicativeAverage,
  multiplyList,
  sequence,
};
