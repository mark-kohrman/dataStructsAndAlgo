//write a function that reverses a string using recursion;
function reverse(str){
	if(str.length <= 1) return str;

	return reverse(str.slice(1)) + str[0 ];
}

module.exports = reverse;