var crypto = require('crypto');
const algorithm = 'aes-256-ctr' ;
const UrlToObject =function UrlToObject(secretKey, data, separator = '&'){


    return decrypt( secretKey, algorithm, data);
}


function decrypt( secretKey, algorithm, text){  
        console.log( "text", text)
        var decipher = crypto.createDecipher(algorithm,secretKey)
        var dec = decipher.update(text,'hex','utf8')
        dec += decipher.final('utf8');
        return dec;
}

module.exports = {
    UrlToObject
}