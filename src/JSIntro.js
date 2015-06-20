
exports.Sum = function(num1, num2){
	return (num1+num2);
}

exports.SumOfArray = function(arrayOfNums){

var sum1=0;
for(var i=0;i<arrayOfNums.length;i++){
	sum1=sum1+arrayOfNums[i];
}
return sum1;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var sum1=0;
var check=0;
for(var i=0;i<arrayOfNums.length;i++){
	check=0;
	for(var j=0;j<i;j++)
	if(arrayOfNums[i]==arrayOfNums[j]){check=1;}
if(check==0){sum1=sum1+arrayOfNums[i];}
}
return sum1;
}

exports.ReverseString = function(str){
	return str.split('').reverse().join('');
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){


}