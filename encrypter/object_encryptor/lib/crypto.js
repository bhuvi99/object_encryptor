const encrypt = require( "./encrypt" );
const decrypt = require( "./decrypt" );
const cypher = require("./cypher")
const chalk = require('chalk');

module.exports = function crypto( secretKey = "" ){
    
    if( secretKey === ""){
        secretKey = "crypto@2019Way2dsp";
       // console.log(chalk.red("Encryption key not given"));
        throw new Error( chalk.red("Encryption key not given") );
    }
    if( secretKey.length < 32){
        throw new Error( "Encryption Key length atleast 32 ");
    }
    secretKey = secretKey.substr(0,32);
    var data = {
        encryptJson : function encryptJson( data = {}, separator = '&' ){
            let encryptionStatus = cypher.encryptObject( secretKey, data,
                                                                 separator );
             return encryptionStatus;
        },
        decryptString : function decryptString( data ){
              let decryptedObject =  cypher.decryptString( secretKey, data);
              return decryptedObject;
        }
    }
    return data;
}