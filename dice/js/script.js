var dice={
    sides: 6,
     rol: function(){
        var randomnumbr = Math.random() * this.sides + 1;
        return randomnumbr;
    }
}
function printNumber(number){
    var box = document.getElementById('box');
    box.innerHTML = number;

}
var button = document.getElementById('button');
button.onclick = function(){
    var result = dice.rol();
    printNumber(result);
}