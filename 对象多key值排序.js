var sortObj = (obj, attr, order = 'asc') => {
	var tmp = [];
	var sObj = {};
	sObj[attr] = {};
	if (!obj[attr]) {
		return;
    }
	for (var key in obj[attr]) {
		tmp.push({
			key,
			value: obj[attr][key]
    });
  }
	tmp.sort((a, b) => a.key.localeCompare(b.key));
	order.toLowerCase() === 'asc' ? tmp : tmp.reverse();
	tmp.map(item => sObj[attr][item.key] = item.value);
	return sObj;
}
var obj = {
	name: {
		react: { company: 'Facebook' },
		vue: { company: 'You' },
		angular: { company: 'Google' },
	}
};
var t1 = sortObj(obj, 'name', 'desc');
console.log(t1)
