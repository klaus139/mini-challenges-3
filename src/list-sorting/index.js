


function listSorting(needle, haystack) {
    // if
    if (haystack.length === 0){
        return -1;
    } 
    // occurence of the needle in the haystack
    let occurence = 0;
    for (let i = 0; i < haystack.length; i++){
        if (haystack[i] === needle){
            occurence++;
        }
    }

     
    //check if haystack is an array of arrays
    if(typeof(haystack[0]) === 'object'){
        let column;
        let row;
    
        for (let i = 0; i < haystack.length; i++){
            // loop through the subarrays
            for (let j = 0; j < haystack[i].length; j++){
                if (haystack[i][j] === needle){
                    column = haystack[i].lastIndexOf(needle);
                    row = i;
                }
            }
        
        }
    
        //check if the needle is in any row and return the row and column
        if (row == undefined ) return -1;
        return [row, column];
        } else {
            return haystack.lastIndexOf(needle);
        }
        
        
    if (occurence === 0){
        return -1;
    } else if (occurence === 1){
        // if the occurence is 1, return the index of the needle
        return haystack.indexOf(needle);
    } else {
        //if the occurence is more than 1, return the index of the last occurence
        return haystack.lastIndexOf(needle);   
    
    }
}
console.log(listSorting(200, [
    [100, 200, 300],
    [300, 200, 100],
    [300, 100, 200],
    [200, 100, 300],
    [100, 200, 300],
  ])
);        
module.exports = listSorting;
