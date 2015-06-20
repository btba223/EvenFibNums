var fibArray = [];
var fibNum = 0;
var i = 0;
do{
	
	if (i < 2){
		fibArray[fibArray.length] = i;
	}
	else{
		fibNum = fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1];
		fibArray[fibArray.length] = fibNum;
	}
	i++;
} while(fibNum < 4000000)

for (var i = 0; i < fibArray.length; i++){
	if(fibArray[i]%2 === 0){
		print(fibArray[i]);
	}
}
