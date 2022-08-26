//var t='we123rt';
//var r=prompt('give any')

var x=('ll9l'.replace(/[^0-9]/))
console.log(x);



var str= "we123"
var regex4 = /(\d+)/;
var matches = str.match(regex4);
var final=parseInt(matches)
var sum=0;
while(matches){
    sum+=matches%10;
    matches= Math.floor( matches/10);
}
console.log(sum);