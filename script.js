const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

const firstString = alphabet.slice(0,12);
console.log(firstString);

const secondString = alphabet.slice(12,23);
console.log(secondString);

const thirdString = alphabet.slice(23);
console.log(thirdString);

const keyboard = [[firstString], [secondString], [thirdString]];
console.log(keyboard);



let hello = keyboard[1][0][5] + keyboard[0][0][2] + keyboard[1][0][8] + keyboard[1][0][8] 
+ keyboard[0][0][8];

let javascript = keyboard[1][0][6] + keyboard[1][0][0] + keyboard[2][0][3] + keyboard[1][0][0] + keyboard[1][0][1] + keyboard[2][0][2] + keyboard[0][0][3] + keyboard[0][0][7] + keyboard[0][0][9] + keyboard[0][0][4];

let trainer = keyboard[0][0][4] + keyboard[0][0][3] + keyboard[1][0][0] + keyboard[0][0][7] + keyboard[2][0][5] + keyboard[0][0][2] + keyboard[0][0][3];


console.log(hello);
console.log(javascript);
console.log(trainer);






