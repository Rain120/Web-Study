/*
 *
 * 
 * 
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
  
  var findMinNode = function(node) {
		if (node) {
			while(node && node.left) {
				node = node.left;
			}
      return node
    }
		return null;
  }
  
  var removeNode = function(node, key) {
    if (node === null) {
      return null;
    }
    if (node.key > key) {
      node.left = removeNode(node.left, key);
    } else if (node.key < key){
      node.right = removeNode(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        node = null;
      }
      if (node.left === null) {
        node = node.right;
      }
      if (node.right === null) {
        node = node.left;
      }
      
      var aux = findMinNode(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
    }
    return node;
  }
  
  this.remove = function(key) {
    root = removeNode(root, key)
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
