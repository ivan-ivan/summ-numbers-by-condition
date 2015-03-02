function sumOnly100Plus(arr) {
	var newArr = [];
	var res = 0;
	for(var i = 0; i < arr.length; i++) {
		if((typeof arr[i] !== 'string') && (arr[i] > 100)) {
			newArr.push(arr[i]);
		}
	}
	
	newArr.map(function(el) {
		res += el;
	});
	
	return res;
}