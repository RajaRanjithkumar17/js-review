var x=10;
var y='status';
var z="";
var z=[1,2,3,4]

console.log(1>2 && 1<2)





var x=2;
if(x>21){ console.log("eligible for marriage")}
else{
console.log(" not eligible for marriage")
}



// nested if


var x=22;
if(x>21){
	var gender="female";


	if(gender=="female"){
		console.log("eligible for marriage")
	}
	else{
console.log(" not eligible for marriage")
 }
}
else{
console.log(" not eligible for marriage")
}






var a=10;
switch (a){
	case 0:
	console.log("zero")
	case 1:
	console.log("one")
	case 10:
	console.log("ten")
}







// addition
var x=20;
var y=20;
var z=x+y;
console.log(z);
//  subraction

console.log(z=x-y);
//  multiplication

console.log(z=x*y);
// divide

console.log(z=x/y);


//  calculate Area of Circle
// let dia of circle=50mm
var r=25;
var Area= Math.PI* r**2;
console.log(Area);


// calculate Area of  Triangle
// let height= 20mm, base=10mm
var height=20;
var base=10;
var Area =  (height*base)/2
console.log(Area);


// Calculating Simple Interest
// let Principal Amount=10000/-
//  Rate of Interest per year in decimal; r = R/100
//  Rate of Interest per year as a percent; R =  10%
//  Time Periods in 6 yrs
var P=10000;
var r=0.1;
var t=6;
var Interest = P*r*t;
console.log(Interest)





// Calculating Square
var r=25;
var square=Math.pow(r,2);
console.log(square);


//  calculate total and average
var a=10;
var b=20;
var c=30;
var total = a+b+c;
var average =(a+b+c)/3;
console.log(total );
console.log(average );


// check number is positive or not
var number=-1
if(number>0){console.log("positive")}
else{console.log("not")}


// Number even or odd
var array=11;
if(array%2!=0)
{console.log("odd");}
else{console.log("even");}

//  check whether number is divisible by 5
var check=15;
if(check%5==0)
{console.log("number is divisible by 5");}
else{console.log("number is not divisible by 5");}


// Print grade based on marks of a student
var mani= 85;
var ram =75;

switch (mani,ram){
	case mani>80 :
    case ram>80  :
	console.log("a")

	case mani>70 :
        case ram>70  :
	console.log("b")
}
	
  	
	
	// swap two   numbers
var aa=10;
var bb=20;
var cc;
var cc =aa;
var aa=bb;
var bb=cc;
console.log(aa,bb);


//find large number
var num1=10;
var num2=3;
var num3=5;
var num4=2;
if (num1> num2){
	if (num1>num3){
		if(num1>num4)
		{console.log(" larger number is "+ num1)}
        	else{
		console.log("num1 is smaller")
	}}
	else{
		console.log("num1 is smaller")
}
if (num2>num1){
	if (num2num3){
		if(num3num4)
		{console.log(" larger number is "+ num2)}
        	else{
		console.log("num1 is smaller")
	}}
	else{
		console.log("num1 is smaller")
}
if (num3>num1)
	if (num3>num2){
		if(num3>num4)
		{console.log(" larger number is "+ num3)}
        	else{
		console.log("num1 is smaller")
	}}
	else{
		console.log("num1 is smaller")
}
if (num4>num1){
	if (num4>num2)
		if(num4>num3)
		{console.log(" larger number is "+ num4)}
        	else{
		console.log("num1 is smaller")
	}}
	else{
		console.log("num1 is smaller")
}
}}











	
		
// Quadratic equation
//  example let 6x**2-17x+12=0
var a=4;
var  b=17;
var  c=12;
var root = Math.sqrt(b*b -4*a*c);
var denom=(2*a);
var root1= (-b +root)/denom;
var root2=(-b -root)/denom;
console.log(root1,root2);


//check number is greater then 10
var random1=20;
var random2=2;
var random3=17;
if(random1>10){	console.log(random1 +"is greater then 10");}
	else{console.log(random1 +"is less then 10");}

if(random2>10){	console.log(random2 +"is greater then 10");}
	else{console.log(random2 +"is less then 10");}

if(random3>10){	console.log(random3 +"is greater then 10");}
	else{console.log(random3 +"is greater then 10");}	
	
	
//grade system
	var raam =83;
	var manii=94;
	var vijay=77;
	if(vijay>90){
	console.log("s")}
		else if(vijay>80){
		console.log("a")}
		else if(vijay>70){
		console.log("b")}
	
	else{console.log("none of the above")}

	if(raam>90){
		console.log("s")}
			else if(raam>80){
			console.log("a")}
			else if(raam>70){
			console.log("b")}
		
		else{console.log("none of the above")}

		if(manii>90){
			console.log("s")}
				else if(manii>80){
				console.log("a")}
				else if(manii>70){
				console.log("b")}
			
			else{console.log("none of the above")}

//number multiple of 7 and compare two numbers
var numb=15;
var numb1=14;
var numb2=21;
if(numb%7==0){ 
	console.log(numb +"is multiple of 7")
}
else{ 
	console.log(numb +"is not multiple of 7")
}
if(numb1 %7==0){ 
	console.log(numb1 +"is multiple of 7")
}
else{ 
	console.log(numb1 +"is not multiple of 7")
}
if(numb2%7==0){ 
	console.log(numb2 +"is multiple of 7")
}
else{ 
	console.log(numb2 +"is not multiple of 7")
}


//descending order

var l=55;
var m=56;
var n =43;
if(l>m  && l>n){
	if(m>n)
	console.log(l ,m, n);
	else{console.log(l,n,m)}
}

	else if(m>l&&m>n){
		if(l>n){console.log( m,l,n)}
		else{console.log( m,n,l)}
	
	}
	else if(n>l&&n>m){
		if(l>m){console.log(n,l,m)}
		else{console.log(n,m,l)}
		
	}


// ascending order


var l=55;
var m=56;
var n =43;
if (l<m&&l<n){
	if(m<n){ console.log(l,m,n)}
	else{console.log(l,n,m)}
}
else if(m<n&&m<l){
	if(n<l){console.log(m,n,l)}
	else{console.log(m,l,n)}
}
else if(n<l&&n<m){
	if(l<m){ console.log(n,l,m)}
	else{console.log(n,m,l)}
}










	