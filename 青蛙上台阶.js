/*
 * 题目描述: 一只青蛙一次最多可以跳上m级台阶。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 * f(n) = f( n - 1) + f( n -2) + ... + f( n - m)
 * f(n - 1) = f( n -2) + ... + f( n - 1 - m)
 **/
var jumpFloor = function(n, m) { 
	if (n > m){
		return 2 * jumpFloor(n - 1, m) - jumpFloor(n - m - 1, m);
    }
	if (n === 1) {
		return 1;
	} else {
		return 2 * jumpFloor(n - 1, n);
	}
}
