//print 20 number in sequence
for(var x=0; x<20;x++)
{console.log(x)}	

//print 20 number in reverse order
for(var y=20; y>0; y--)
	{console.log(y)}

//print first 20 even numbers
var z=1;
for(z;z<20;z++)
{if(z%2!=1)
{console.log(z);}}
 
 
//print first 20 odd numbers
var z1=1;
for(z1;z1<20;z1++)
{if(z1%2==1)
{console.log(z1);}}


//print 20 number in reverse
for(var y=20; y>1; y--)
	{console.log(y)}


//check amstrong number or not
var  num=0;
var amstrong=123;
while(amstrong>0){
	var num1=amstrong%10;
	num+=num1*num1*num1;
	amstrong= parseInt(amstrong/10);
} if   (num==amstrong){
    console.log(amstrong +""+' is  amstrong')}
else{
    console.log(amstrong +""+' is not amstrong')}

//print table of given number
var table=6;
for(i=1;i<=10;i++)
{console.log(i+"*"+table+"="+i*table)}


//calculate sum of given number

var sum=3;
for(i=1;i<=10;i++)
{console.log(sum+i)}

//factorial of given number
var n=8; 
for(i=1;i>=1;i--){
console.log(n*(n-1))}

//fibonacci series
var fibonacci=10;
var n1=0,n2=1,n3;
for(i=1;i<=fibonacci;i++)
{console.log(n1)
n3=n1+n2;
n1=n2;
n2=n3;
} 
//calculate average of given number
var number1=20;
var number2=23;
var number3;
for(i=1; i<=1; i++){
console.log(number3);
number3=(number1+number2)/2;
}
	
	
var    a1=10;
var a2=12;
var a3=7;
var a4=22;
if (a1>a2&&a1>a3&&a1>a4){
	if(a2>a3&&a2>a4){
	
	if(a3>a4){
		console.log(a1,a2,a3,a4)
	}
	else{console.log(a1,a2,a4,a3)}
	}
	
	else{console.log(a1,a3,a2,a4)}}
	else if(a2>a3&&a2>a4&&a2>a1){
		if(a3>a4&&a3>a1){
		if(a1>a4){	console.log(a2,a3,a4,a1)
		}
		else{console.log(a2,a4,a3,a1)}
	}
	else if(a3>a4&&a3>a1&&a3>a2){
		if(a4>a1&&a4>a2){
		console.log(a3,a4,a1,a2)}
		else{console.log(a3,a1,a4,a2)}
	}
	else if(a4>a1&&a4>a2&&a4>a3){
		if(a1>a2&&a4>a3){
		console.log(a4,a1,a2,a3)}
else{console.log(a4,a2,a3,a1)}}
		
		

