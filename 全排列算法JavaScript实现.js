/**
 * È«ÅÅÁÐ£ºÀýÈç'ab'=> ab, ba
 */
function permutations(string) {
   var ret = [];
    if(string.length === 1){
        return [string]    
    }else{
        var preResult=permutations(string.slice(1));
        for (var j = 0; j < preResult.length; j++) {
            for (var k = 0; k < preResult[j].length + 1; k++){
	        ret.push(preResult[j].slice(0,k) + string[0] + preResult[j].slice(k));         
             }
         }
	 return Array.from(new Set(ret));

    }  
}