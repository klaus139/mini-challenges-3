/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */



 function binaryReversal (num){

    let binaryNum = parseInt(num);
    
    var binary = binaryNum.toString(2);
   
    var padded = binary.padStart(8, '0');
    
    var reversed = padded.split('').reverse().join('');

    console.log(typeof reversed);
    
    var result = parseInt(reversed, 2);

    console.log(typeof result);

    var finealR = result.toString();

    return finealR;

}


module.exports = binaryReversal;
