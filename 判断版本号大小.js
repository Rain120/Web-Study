/*
 * 判断版本号大小：1.2.3a和1.2.4b,后者大
 */
var vSort = function(v1, v2) {
	var vtf1 = parseFloat(v1);
	var vtf2 = parseFloat(v2);
	console.log(vtf1, vtf2);
	var vtr1 =  v1.replace(vtf1 + ".","");
    var vtr2 =  v2.replace(vtf2 + ".","");
	console.log(vtr1, vtr2);
    if(vtf1 > vtf2){
        return true;
    }else if(vtf1 < vtf2){
        return '前者小';
    }else{
        if(vtr1 >= vtr2){
            return '前者大';
        }else{
            return '前者小';
        }
    }
}
vSort('1.2.4b', '1.2.4a')
