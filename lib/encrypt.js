var crypto = require('crypto');
const algorithm = 'aes-256-ctr' ;
const objectToString =function objectToString(secretKey, data, separator = '&'){

    let josnString = JSON.stringify( data );
    return encrypt( secretKey, algorithm, josnString);
}


function encrypt( secretKey, algorithm, text){

        var cipher = crypto.createCipher(algorithm,secretKey)
        var crypted = cipher.update(text,'utf8','hex')
        crypted += cipher.final('hex');
        return crypted;
}

module.exports = {
    objectToString
}