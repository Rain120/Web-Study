/*
 * 前序遍历：中 -> 左 -> 右
 * 中序遍历：左-> 中 -> 右
 * 后序遍历：左 -> 右 -> 中 
 */
function BinaryTree() {
	var Node = function(key) {
		this.key = key;
		this.left = null;
		this.right = null;
    }

	var root = null;
	
	var insertNode = function(node, newNode) {
		if (node.key > newNode.key) {
			if (node.left) {
				insertNode(node.left, newNode);
			} else {
				node.left = newNode;
            }
		} else {	
			if (node.right) {
				insertNode(node.right, newNode);
			} else {
				node.right = newNode;
            }
        }
    }

	this.insert = function(key) {
		var newNode = new Node(key);
		if (root) {
			insertNode(root, newNode);
		} else {
			root = newNode;
        }
	}

	var inOrderTraverseNode = function(node, callback) {
		if (node) {
			inOrderTraverseNode(node.left, callback);
			callback & callback(node.key);
			inOrderTraverseNode(node.right, callback);
		}
	}

	this.inOrderTraverse = function(callback) {
		inOrderTraverseNode(root, callback);
	}

	var preOrderTraverseNode = function(node, callback) {
		if (node) {
			callback & callback(node.key);
			preOrderTraverseNode(node.left, callback);
			preOrderTraverseNode(node.right, callback);
		}
	}

	this.preOrderTraverse = function(callback) {
		preOrderTraverseNode(root, callback);
	}

	var postOrderTraverseNode = function(node, callback) {
		if (node) {
			postOrderTraverseNode(node.left, callback);
			postOrderTraverseNode(node.right, callback);
			callback & callback(node.key);
		}
	}

	this.postOrderTraverse = function(callback) {
		postOrderTraverseNode(root, callback);
	}
}
var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
var binaryTree = new BinaryTree();
nodes.forEach((key) =>{
	binaryTree.insert(key);
})
var preOrderTraverseRet = []
var inOrderTraverseRet = []
var postOrderTraverseRet = []
var callback = function(key) {
	console.log(key);
}
binaryTree.preOrderTraverse(key => {	
	preOrderTraverseRet.push(key);
})
binaryTree.inOrderTraverse(key => {	
	inOrderTraverseRet.push(key);
})
binaryTree.postOrderTraverse(key => {	
	postOrderTraverseRet.push(key);
})
console.log(preOrderTraverseRet)
console.log(inOrderTraverseRet)
console.log(postOrderTraverseRet)
