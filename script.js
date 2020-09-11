// Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

function hasOddNumber(arr) {
    const result = arr.some(function(num) {
        return num % 2 !== 0;
    })
    return result;
}

hasOddNumber([1,2,2,2,2,2,4]) // true
hasOddNumber([2,2,2,2,2,4]) // false



//Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

function hasAZero(num) {
    const str = num.toString();
    const arr = str.split('')
    const result = arr.some(function(el) {
        return el === '0';
    })
    return result;
}

hasAZero(33321232131012) // true
hasAZero(1212121) // false



// Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.

function hasOnlyOddNumbers(arr) {
    return arr.every(function(el) {
        return el % 2 !== 0;
    })
}

hasOnlyOddNumbers([1,3,5,7]) // true
hasOnlyOddNumbers([1,2,3,5,7]) // false



// Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

function hasNoDuplicates(arr) {
    const result = arr.every(function(num) {
        return arr.indexOf(num) === arr.lastIndexOf(num);
    })
    return result;
}

hasNoDuplicates([1,2,3,1]) // false
hasNoDuplicates([1,2,3]) // true



// Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

function hasCertainKey(arr, key) {
    return arr.every(function(el) {
        return el[key] !== undefined;
    })
}

let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

  hasCertainKey(arr,'first') // true
  hasCertainKey(arr,'isCatOwner') // false



  // Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

  function hasCertainValue(arr, key, value) {
      return arr.every(function(el) {
          return el[key] === value;
      })
  }

let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

  hasCertainValue(arr,'title','Instructor') // true
  hasCertainValue(arr,'first','Elie') // false