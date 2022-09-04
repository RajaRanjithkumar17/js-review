var name="mani";
//get length
console.log(name.length);
//get values within given range
console.log(name.slice(0,4));
//slice remaining value from given range
console.log(name.slice(0));
//substring similer to slice
console.log(name.substr(0,4));
//replace
console.log(name.replace("mani","raam"))
//Lower to uppercase
console.log(name.toUpperCase());

//concat 
var firstName="   ranjith   "
var lasstName="kumar",fullName;
console.log(firstName.concat("",lasstName))

//trim
console.log(firstName.trimStart());
//pad
console.log(name.padStart(5,"K "));
//charAt
console.log(name.charAt(3))
