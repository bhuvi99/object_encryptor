var crypto = require('crypto');
const algorithm = 'aes-256-cbc';

const IV_LENGTH = 16;

function encrypt(text, encryptionKey) {
    let iv = crypto.randomBytes(IV_LENGTH);
    let cipher = crypto.createCipheriv(algorithm,
                                         new Buffer.from(encryptionKey), iv);
    let encrypted = cipher.update(text);

    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

const encryptObject = function encryptObject(encryptionKey, data) {

    if (data == null || Object.keys(data) == 0) {
        throw new TypeError("encryption object is " + JSON.stringify(data));
    }

    let josnString = JSON.stringify(data);
    return encrypt(josnString, encryptionKey);
}




function decrypt(text, encryptionKey) {
    let textParts = text.split(':');
    let iv = new Buffer.from(textParts.shift(), 'hex');
    let encryptedText = new Buffer.from(textParts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv(algorithm,
                                         new Buffer.from(encryptionKey), iv);
    let decrypted = decipher.update(encryptedText);

    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
}
const decryptString = function decryptString(encryptionKey, data) {
    if (data == null || Object.keys(data) == 0) {
        throw new TypeError("data for decryption is" + JSON.stringify(data));
    }

    return decrypt(data, encryptionKey);
}



module.exports = {
    decryptString, encryptObject
}