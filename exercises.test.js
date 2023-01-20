const exercises = require('./exercises.js');

//write tests in this file

/* Example Test 
test('Question 0: add', () => {
  expect(exercises.add(1, 2)).toEqual(3);
  expect(exercises.add(1, -1)).toEqual(0);
});
*/
test('Palandrome function: add', () => {
  expect(exercises.isRealPalindrome('madam')).toEqual(true);
  expect(exercises.isRealPalindrome('Madam')).toEqual(true);
  expect(exercises.isRealPalindrome("Madam, I'm Adam")).toEqual(true);
  expect(exercises.isRealPalindrome('Madam')).toEqual(true);
  expect(exercises.isRealPalindrome('Madam')).toEqual(true);

});

test('RunningTotal function', () => {
  expect(exercises.runningTotal([2, 5, 13])).toEqual([2, 7, 20]);
  expect(exercises.runningTotal([14, 11, 7, 15, 20])).toEqual([14, 25, 32, 47, 67]);
  expect(exercises.runningTotal([3])).toEqual([3]);
  expect(exercises.runningTotal([])).toEqual([])
});
test('swap function', () => {
  expect(exercises.swap('Oh what a wonderful day it is')).toBe('hO thaw a londerfuw yad ti si');
  expect(exercises.swap('Abcde')).toBe('ebcdA');
  expect(exercises.swap('a')).toBe('a');

})
test('wordSizes function ', () => {
  expect(exercises.wordSizes('Four score and seven.')).toEqual({ "3": 1, "4": 1, "5": 1, "6": 1 });
  expect(exercises.wordSizes("What's up doc?")).toEqual({ "2": 1, "4": 1, "6": 1 });
  expect(exercises.wordSizes("I ate her lunch")).toEqual({ "1": 1, "3": 2, "5": 1 });
});
test('union function', () => {
  expect(exercises.union([1, 3, 5], [3, 6, 9])).toEqual([1, 3, 5, 6, 9]);
  expect(exercises.union([2, 2, 2, 2], [10, 5, 2])).toEqual([2, 10, 5]);
});
test('firstRecurring function ', () => {
  expect(exercises.firstRecurring('reuben')).toBe("e");
  expect(exercises.firstRecurring('anne')).toBe("n");
  expect(exercises.firstRecurring('restaurant')).toBe("r");
  expect(exercises.firstRecurring('paul')).toBe("");

});
test('showMultiplicativeAverage function', () => {
  expect(exercises.showMultiplicativeAverage([3, 5])).toBe("7.500");
  expect(exercises.showMultiplicativeAverage([2, 5, 7, 11, 13, 17])).toBe("28361.667");

});
test('multiplyList function', () => {
  expect(exercises.multiplyList([3, 5, 7], [9, 10, 11])).toEqual([27, 50, 77]);
  expect(exercises.multiplyList([5, 10, 15, 20], [1, 2, 3, 4])).toEqual([5, 20, 45, 80]);
});
test('sequence function', () => {
  expect(exercises.sequence(5)).toEqual([1, 2, 3, 4, 5]);
  expect(exercises.sequence(3)).toEqual([1, 2, 3]);
  expect(exercises.sequence(1)).toEqual([1]);
});

