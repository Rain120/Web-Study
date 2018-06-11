/*
 * 排序二叉树的实现
 */
function BinaryTree() {
	var Node = function(key) {
		this.key = key;
		this.left = null;
		this.right = null;
    }

	var root = null;
	
	var insertNode = function(node, newNode) {
		return node.key > newNode.key ? 
(node.left ? insertNode(node.left, newNode) : node.left = newNode) : 
(node.right ? insertNode(node.right, newNode) : node.right = newNode);
    }

	this.insert = function(key) {
		var newNode = new Node(key);
		if (root) {
			insertNode(root, newNode);
		} else {
			root = newNode;
        }
	}
}
var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
var binaryTree = new BinaryTree();
nodes.forEach((key) =>{
	binaryTree.insert(key);
})
