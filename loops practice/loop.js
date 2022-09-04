


//for(initial;condition;increment/decrement)

//print 20 number in sequence
for(var x=0; x<=20;x++)
{console.log(x)}	

//print 20 number in reverse order
for(y=20; y>0; y--)
	{console.log(y)}

//print first 20 even numbers

for(z=0;z<=20;z+=2)

{console.log(z);}
 
 
//print first 20 odd numbers

for(z1=1;z1<20;z1+=2)

{console.log(z1);}


//print 20 number in reverse
for(var y=20; y>1; y--)
	{console.log(y)}


//check amstrong number or not
var  num=0;
var amstrong=123;
var  temp=amstrong;
while(amstrong>0){
	var num1=amstrong%10;
	num+=num1*num1*num1;
	amstrong=Math.floor((amstrong/10));
} 
console.log(amstrong)
if   (num==temp){
    console.log(amstrong +""+' is  amstrong')
	}
else{
    console.log(amstrong +""+' is not amstrong')
	}

//print table of given number
var table=6;
for(i=1;i<=10;i++)
{
	console.log(i+"*"+table+"="+i*table)
}
	

//calculate sum of given number

var sum=3;
for(i=1;i<=10;i++)
{
	console.log(sum+i)
}

//factorial of given number
var n=8;
var fact=1; 
for(i=1;i<=n;i++){
(fact*=i)
}
console.log(fact);

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






//f ()


  for(i=0;i<name.length;i++){

  console.log(name.indexOf("ram"))}  

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
console.loog(num);  
//map
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }))

console.log( reformattedArray);




var array=[10,20,20]
array.indexOf(20)
console.log(array);










var a=4444443;
var b = 265765;
var c=365578;
if(a>b&&a>c)
{if (b>c)
	{console.log(a,b,c)}
	
else{console.log(a,c,b)}
	}
	else if(b>a&&b>c){
		if (a>c)
		{
			console.log(b,a,c)
			
		}else{
			console.log(b,c,a)
		}
		
	}
	else if(c>a&&c>b)
	{
		if(a>b)
		{
		console.log(c,a,b);
		
	}
	else{
		console.log(c,b,a);
	}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// even number addition

	var number1=prompt("enter any numbers")
	var temp=0;
	while(number1!=0){
		if(number1%2==0){
			temp=number1;
		}
		number1 =Math.floor(number1/10);
		
	}
	console.log(temp);
		




//functions



function prime(n){
	n==1||n==0;
	return 1;
}
if(n>1){
	 n%0==0; 
	 num+=n; 
	if (num==2){
		console.log(num);
		}
}
const num=prime(4);
console.log(num);























	
	
	 





















