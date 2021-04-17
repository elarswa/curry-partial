const MF = require("./Factory/mathFactory");

const add10 = MF.addition(10);
const add12 = MF.addition(12);
const add15 = MF.addition(15);

console.log(`add10(5) = ${add10(5)}`);
console.log(`add12(5) = ${add12(5)}`);
console.log(`add15(5) = ${add15(5)}`);

const div10 = MF.divBy(10);
console.log(`div10(50) = ${div10(50)}`);

const mod5 = MF.modBy(5);
console.log(`mod5(5) = ${mod5(5)}`);
console.log(`mod5(14) = ${mod5(14)}`);
console.log(`mod5(16) = ${mod5(16)}`);
