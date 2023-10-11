const ADMIN_NAME = "John Doe";
let currentUserName;

/* Basic Data Types (8):
  1. number (int, float, NaN, ±Infinity)
  2. BigInt (±2^53-1)n
  3. string ("", '', `${}`)
  4. null
  5. undefined
  6. object
  7. symbol
  8. boolean */

currentUserName = ADMIN_NAME;

let currentUserAge = 1 / 0;

console.log(`hello, ${1} : should be 1`);
console.log(`hello, ${"currentUserName"} : should be "currentUserName"`);
console.log(`hello, ${currentUserName} : should be ${currentUserName}`);
