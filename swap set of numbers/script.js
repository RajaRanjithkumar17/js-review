

var num=1234;
if (num%2!=0){
    console.log('false');
}
var result=0, x=1;

while(num!=0){
    var digit1=num %10;
   var  digit2=(( num-digit1)/10)%10;
    result += x*(10*digit1+digit2);
    num=Math.floor(num/100);
    x*=100;
}
console.log(result);




var number1=12;
	var temp=0;
	while(number1!=0){
        var num=number1%10;
		if(num%2==0){
        temp +=num;
        number1 =Math.floor(number1/10);
		}

		
	}
	console.log(temp);















