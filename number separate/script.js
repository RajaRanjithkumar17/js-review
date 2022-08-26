var str= "we123"
var regex4 = /(\d+)/;
var matches = parseInt(str.match(regex4));
var sum=0;
while(matches){
    sum+=matches%10;
    matches= Math.floor( matches/10);
}
console.log(sum);
