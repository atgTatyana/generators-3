export default function canIterate(item) {
  if (item === null || item === undefined || typeof item === 'number') {
    return false;
  }

  if (typeof item === 'string') {
    return true;
  }

  const result = Symbol.iterator in item;
  return result;
}

console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate({ name: 'Ivan', age: 45, [Symbol.iterator]: [][Symbol.iterator] })); // true
console.log(canIterate('Netology')); // true
