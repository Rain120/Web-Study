/*
 * 
 * 输入：(11,LL)(7,LLL)(8,R)(5,)(4,L)(13,RL)(2,LLR)(1,RRR)(4,RR)
 * 输出：5 4 8 11 13 4 7 2 1
 * 思路：先建立一棵二叉树。再进行队列遍历。
 *
 */
function beTree(obj) {
		var obj = obj.split(')');
		var newobj = [];
		for (var i = 0; i < obj.length - 1; i++) {
				newobj.push(obj[i].replace('(',''));
		}
		var root = {
				value: null, left: null, right: null, child: false
		}
		var node;
		for(var i = 0; i < newobj.length; i++) {
				var [nodeVal, nodePos] = newobj[i].split(',');
				node = root;
				if(nodePos){
						for (var j = 0; j < nodePos.length; j++) {

								if(nodePos[j].toUpperCase() === 'L'){
										if(node.left === null){
												node.left = newnode();
												node = node.left;
										}else {
												node = node.left;
										}
								} else if(nodePos[j].toUpperCase() === 'R') {
										if(node.right === null){
												node.right = newnode();
												node = node.right;
										}else{
												node = node.right;
										}
								}
						}
						if(!node.child) {
								node.value = nodeVal;
								node.child = true;
						}
				}else {
						root.value = nodeVal;
						node.child = true;
				}
		}
		return root;
}
function newnode() {
		return { value: null, left: null, right: null, child: false };
}
function bfs() {
		var root = beTree('(11,LL)(7,LLL)(8,R)(5,)(4,L)(13,RL)(2,LLR)(1,RRR)(4,RR)');
		var front = 0,next = 1,n = 0;
		var tree = [],ret = [];
		tree[0] = root;
		while(front < next) {
				var node = tree[front++];
				if(!node.child) {
						return;
				}
				ret[n++] = node.value;
				if(node.left !== null) {
						tree[next++] = node.left;
				}
				if(node.right !== null) {
						tree[next++] = node.right;
				}
		}
		console.log(ret.join(' '));
}
bfs();
