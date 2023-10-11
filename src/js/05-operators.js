let a = 1,
  b = 1;
let c = ++a; // returns modified value
let d = b++; // returns pre-modified value
console.log(`${c}: should be 2, but a: ${a} is 2`);
console.log(`${d}: should be 1, but b: ${b} is 2`);

let e = 2;
let f = 1 + (e *= 2);
console.log(`${f} is 5`);
console.log(`${e} is 4`);

/* What are results of operations:
- "" + 1 + 0
- "" - 1 + 0
- true + false
- 6 / "3"
- "2" * "3"
- 4 + 5 + "px"
- "$" + 4 + 5
- "4" - 2
- "4px" - 2
- "  -9  " + 5
- "  -9  " - 5
- null + 1
- undefined + 1
- " \t \n" - 2
*/

console.log(`${"" + 1 + 0 == 10}: ${"" + 1 + 0} should be 10 (start from string convertion)`);
console.log(`${"" - 1 + 0 == -1}: ${"" - 1 + 0} should be -1 (minus is not string operator - number conversion)`);
console.log(`${true + false == 1}: ${true + false} should be 1`);
console.log(`${6 / "3" == 2}: ${6 / "3"} should be 2`);
console.log(`${"2" * "3" == 6}: ${"2" * "3"} should be 6`);
console.log(`${4 + 5 + "px" == "9px"}: ${4 + 5 + "px"} should be 9px`);
console.log(`${"$" + 4 + 5 == "$45"}: ${"$" + 4 + 5} should be $45`);
console.log(`${"4" - 2 == 2}: ${"4" - 2} should be 2`);
console.log(`${"4px" - 2}: ${"4px" - 2} should be NaN`);
console.log(`${"  -9  " + 5 == "  -9  5"}: ${"  -9  " + 5} should be "  -9  5" (start from string conversion)`);
console.log(`${"  -9  " - 5 == -14}: ${"  -9  " - 5} should be -14 (minus is not string operator - number conversion)`);
console.log(`${null + 1 == 1}: ${null + 1} should be 1`);
console.log(`${undefined + 1}: ${undefined + 1} should be NaN`);
console.log(`${" \t \n" - 2 == -2}: ${" \t \n" - 2} should be -2 (minus is not string operator - white spaces are converted to 0)`);
