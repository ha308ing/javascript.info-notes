/*
What will be the result of expressions:
  5 > 4
  "apple" > "pineapple"
  "2" > "12"
  undefined == null
  undefined === null
  null == "\n0\n"
  null === +"\n0\n"
*/

console.log(`${5 > 4 == true}`);
console.log(`${"apple" > "pineapple" == false}`);
console.log(`${"2" > "12" == true}`);
console.log(`${(undefined == null) == true}`);
console.log(`${(undefined === null) == false}`);
console.log(`${(null == "\n0\n") == false}`);
console.log(`${(null === +"\n0\n") == false}`);
