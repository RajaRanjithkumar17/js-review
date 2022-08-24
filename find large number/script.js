//find large number
var    a1=10;
var a2=12;
var a3=7;
var a4=22;
if (a1>a2&&a1>a3&&a1>a4){
	if(a2>a3&&a2>a4){
	
	if(a3>a4){
		console.log(a1,a2,a3,a4)
	}
	else{console.log(a1,a2,a4,a3)}}
    else{console.log(a1,a3,a2,a4)}
	
}
	
	else if(a2>a3&&a2>a4&&a2>a1){
		if(a3>a4&&a3>a1){
		if(a4>a1){	console.log(a2,a3,a4,a1)
		}
		else{console.log(a2,a3,a1,a4)}}
        else{console.log(a2,a4,a3,a1)}
    }

	
	else if(a3>a4&&a3>a1&&a3>a2){
		if(a4>a1&&a4>a2){
		if(a1>a2){console.log(a3,a4,a1,a2)}
		else{console.log(a3,a4,a2,a1)}}
        else{console.log(a3,a1,a4,a2)}
}
	
	else if(a4>a1&&a4>a2&&a4>a3){
		if(a1>a2&&a4>a3){
			if(a2>a3){
		console.log(a4,a1,a2,a3)}
	else{console.log(a4,a1,a3,a2)}}
    else{console.log(a4,a2,a1,a3)}
}
		
else{console.log(a1,a3,a4,a2)}





