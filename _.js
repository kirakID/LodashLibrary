let _ = {
  clamp (num, low, high) {
    let lowBound = Math.max(num, low);
    let clampValue = Math.min(lowBound, high);
    return clampValue;
  },
  inRange (num, start, end) {
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if ((num < start) || (num >= end)) {
      return false;
    } else {
      return true;
    }
  },
words (string) {
  return string.split(' ');
},
pad (string, length) {
  if (length <= string.length) {
    return string;
  }
  const totalPad = length - string.length;
  const startPad = Math.floor(totalPad/2);
  const endPad = totalPad - startPad;

  const finalString = ' '.repeat(startPad) + string + ' '.repeat(endPad);
  return finalString;
},
has (object, key) {
  const checkKey = object[key];
  if (checkKey != undefined) {
    return true;
  } return false;
},
invert (object) {
  const inverted = {};
  for (let key in object) {
    const newObj = object[key];
    inverted[newObj] = key;
  };
  return inverted;
},
findKey (object, predicate) {
  for (let key in object) {
    let value = object[key];
    let predicateReturnValue = predicate(value)
    if (predicateReturnValue) {
      return key;
    }
  }
  undefined
  return undefined
},
drop (array, num) {
  if (num === undefined) {
    num = 1;
  }
  let dropped = array.slice(num);
  return dropped;
},
dropWhile(array, predicate) {
    const callback = (element, index) => {
      return !predicate(element, index, array);
    }
    let dropNum = array.findIndex(callback);
    let droppedArr = this.drop(array, dropNum);
    return droppedArr;
  },
chunk (array, size) {
  if (size === undefined) {
    size = 1;
  }
  let newArr = [];
  for (let i = 0; i < array.length; i += size) {
    let chunks = array.slice(i, i+size);
    newArr.push(chunks);
  }
  return newArr;
}
};



console.log(_.clamp(0,-5,5)); // 1) test clamp

console.log(_.inRange(-3,1,10)); // 2) test inRange

console.log(_.words('Black bears.')); // 3) test words

console.log(_.pad('Bears', 11)); // 4) test pad

// console.log(_.has({'Bears': 'Beets'}, 'Bears')); // 5) test has

console.log(_.invert({'beets.': 'eat'})); // 6) test invert

const startsWithB = string => string.startsWith('B');
console.log(_.findKey({"Bears.": "Beets"}, startsWithB)) // 7) test findKey

console.log(_.drop(['Bears', 'eat', 'beets.', 'Bears.', 'Beets.'], 4)) // 8)  test drop

console.log(_.chunk(['Battlestar Galactica.'], 2)); // 10) test chunk

// Do not write or modify code below this line.
module.exports = _;
