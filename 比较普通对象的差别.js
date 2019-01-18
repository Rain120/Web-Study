var diffObjs = (obj, target, attr) => {
    var diffs = {};
	if (!!attr) {
        if (!target[attr]) {
            return {};
        }
        if (obj[attr] !== target[attr]) {
            diffs[attr] = target[attr];
        }
    } else {
		for (var key in target) {
			if (obj[key] !== target[key]) {
				diffs[key] = target[key];
            }
        }
    }
	return diffs;
}
var obj = { a: 1, b: 2, c: { d: 3, e: 4 }, f: 5 },
	target = { a: 2, b: { c: 3, d: 4, e: [{ f: 5 }, { g: 6 }] }, h: null };
var t1 = diffObj(obj, target, 'b');
var t2 = diffObj(obj, target);
console.log(t1, t2);
