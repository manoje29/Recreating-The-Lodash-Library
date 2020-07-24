let _ = {

 clamp(value, lower, upper) {
  let lowerClampedValue = Math.max(value, lower);
  let clampedValue = Math.min(lowerClampedValue, upper);
  return clampedValue;
 },

 inRange(number, startValue, endValue) {
  if (!endValue) {
    endValue = startValue;
    startValue = 0;
  } if (startValue > endValue) {
    let temp = endValue;
    endValue = startValue;
    startValue = temp;
  } let isInRange = (number >= startValue && number < endValue);
    console.log(isInRange);
  },

 words(stringName) {
  let newString = stringName.split(' ');
  return newString;
 },

 pad(stringName, desiredLength) {
  if (!(desiredLength > stringName.length)) {
    return stringName;
  }
  let startPadding = Math.floor((desiredLength - stringName.length)/2);
  let endPadding = desiredLength - (stringName.length + startPadding);
  let paddedString = ' '.repeat(startPadding) + stringName + ' '.repeat(endPadding);
  return paddedString;
  },

 has(object, key) {
 if (object.hasOwnProperty(key)) {
   return true;
  } else {
   return false;
 };
},

 invert(object) {
   let invertedObject = {};
   let originalValue;
   for (let key in object) {
     originalValue = object[key];
     invertedObject[originalValue] = key;

   }
   return invertedObject;

 },


 findKey(object, booleanFunction) {
   let value;
   for (let key in object) {
     value = object[key];
     if (booleanFunction(value) == true) {
       return key;
     };
  } return undefined;
},

 drop(array, numberToRemove) {
  if (numberToRemove) {
    let i =  1;
    while (i <= numberToRemove) {
     array.shift();
     i++;
   } return array;
   } else if (!numberToRemove) {
   array.shift();
   return array;
  };
},

/*

 drop(array, numberToRemove) {
   if (!numberToRemove) {
    numberToRemove = 1; //IF YOU PUT return numberToRemove = 1; it doesn't work because return will cause the entire function to end.
   };
   let newArray = array.slice(numberToRemove);
   return newArray;
 },

*/
 dropWhile(array, predicate) {
  let dropNumber = array.findIndex((element, index) => {
  return !predicate(element, index, array);
  });
  let droppedArray = this.drop(array, dropNumber);
  return droppedArray;
},

 chunk(array, size) {
 let newArray = [];
 if (!size) {
   size = 1;
 };
 let i = 0;
 while (i < array.length) {

  let newCharacters = array.slice(i, (i + size));
  newArray.push(newCharacters);
  i += (size);
 } return newArray;
 }

};























// Do not write or modify code below this line.
module.exports = _;
