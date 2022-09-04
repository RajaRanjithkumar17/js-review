var str= "12we123"
var regex4 = /(\d+)/;
var matches = parseInt(str.match(regex4));
var sum=0;
while(matches){
    sum+=matches%10;
    matches= Math.floor( matches/10);
}
console.log(sum);





















function prime(n){
	if(n==1||n==0){
	return 1;}
	else{
		var num=0;
for(i=0;i<n;i++){

	 n%i==0; 
	num++; 
}
	if (num==2){
		console.log('prime num');
		}
		else{console.log('not a prime number')}
}}
const primeNum=prime(7);





