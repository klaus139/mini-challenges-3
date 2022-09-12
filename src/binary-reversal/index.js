/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */



 function binaryReversal (num){
    let binaryNum = parseInt(num);
    //first step is to convert the number to binary
    var binary = binaryNum.toString(2);
   
    var padded = binary.padStart(8, '0');
    
    var reversed = padded.split('').reverse().join('');
    console.log(typeof reversed);
    // converting the binary back into an integer
    var result = parseInt(reversed, 2);
    console.log(typeof result);
    var finealR = result.toString();
    return finealR;

}

console.log(binaryReversal("100"));

module.exports = binaryReversal;
