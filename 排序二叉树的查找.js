/*
 * 排序二叉树的查找
 * 最小值
 * 最大值
 * 查找值
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

	var minNode = function(node) {
		if (node) {
			while(node && node.left) {
				node = node.left;
			}
            return node.key
        }
		return null;
    }

	this.min = function() {
		return maxNode(root);
	}

	var maxNode = function(node) {
		if (node) {
			while(node && node.right) {
            	node = node.right;
			}
			return node.key;
        }
		return null;
    }

	this.max = function() {
		return minNode(root);
	}
  
  var searchNode = function(node, key) {
    if (!node) {
      return false;
    }
    if (node.key > key) {
      searchNode(node.left, key);
    } else if (node.key < key) {
      searchNode(node.right, key);
    }
    else {
      return true;
    }
  }
  
  this.search = function(key) {
    searchNode(root, key);
  }
}
var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
var binaryTree = new BinaryTree();
nodes.forEach((key) =>{
	binaryTree.insert(key);
})
console.log(binaryTree.min())
console.log(binaryTree.max())
console.log(binaryTree.search(7))
