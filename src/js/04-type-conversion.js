console.log("Number conversion");
console.log(`undefined:     ${Number(undefined)}`);
console.log(`null:          ${Number(null)}`);
console.log(`true:          ${Number(true)}`);
console.log(`false:         ${Number(false)}`);
let testString = "   123  z";
console.log(`${testString}: ${Number(testString)}`);
testString = testString.slice(0, -1);
console.log(`${testString}: ${Number(testString)}`);

console.log("===");

console.log("Boolean conversion. Falsy:");
console.log(`0:             ${Boolean(0)}`);
console.log(`Empty string:  ${Boolean("")}`);
console.log(`null:          ${Boolean(null)}`);
console.log(`NaN:           ${Boolean(NaN)}`);
console.log(`undefined:     ${Boolean(undefined)}`);
