const crypto = require("../lib");
let a = crypto("chanduchanduchanduchanduchanduchc");

let encrypt1 =  a.encryptJson( { chandu:123, id:12, abc:"def"});
let encrypt2 =  a.encryptJson( { chandu:123, id:12, abc:"def"});
console.log(encrypt1)
console.log( a.decryptString(encrypt1));
console.log(encrypt2)
console.log( a.decryptString(encrypt2));

//console.log( crypto().decryptString("564d2a31babb2dbb9209d7147635"));