# object_encryptor
encrypt and decrypt JSON Objects
# Example
`var encryptObject = require("encrypt_object")
var encryptionKey = "encryptionKeyencryptionKeyencryptionKeyencryptionKey"
var crypt = encryptObject( encryptionKey);
jsonObj = {
    name : "google",
    site: "www.google.com"
}
var encryptedJson = crypt.encryptJson( jsonObj);
console.log( "encrypted", encryptedJson);

var decryptedJson = JSON.parse( crypt.decryptString( encryptedJson) );
console.log( decryptedJson );`
