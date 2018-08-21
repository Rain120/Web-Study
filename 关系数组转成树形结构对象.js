/**
之前面试依图等好几个公司遇到的这个问题
obj = [
    {id:1,parent:null},
    {id:2,parent:1},
    {id:3,parent:2}
]
     ||
     ||
     VV
obj2 = {
    obj:{
        id: 1,
        parent: null,
        child: {
            id: 2,
            parent: 1,
            child: {
                id: ,3,
                parent: 2
            }
        }
    }
}
**/
var obj = [
    {id:3,parent:2},
    {id:1,parent:null},
    {id:2,parent:1},
]
function treeObj(obj) {
	obj.map(item => {
	if (item.parent !== null) {
        obj.map(o => {
			if (item.parent === o.id) {
				if (!o.child) {
					o.child = [];
				}
				o.child.push(item);
				o.child = o.child;
            }
        });
    }
  });
	return obj.filter(item => item.parent === null)[0]
}
obj = treeObj(obj)
console.log(obj)
