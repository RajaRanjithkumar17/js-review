let btn=document.getElementById("btn");
function calculateprice(i){
    var unitprice,quantity,price,
    unitpriceEle = document.getElementById("unitprice")[i],
    quantityElement = document.getElementById("quantity")[i],
    priceElement = document.getElementById("price")[i];
    unitprice = unitpriceEle.innerText;
    quantity = quantityElement.value;
    price = unitprice*quantity;
    priceElement.innerText = price

}
let btns=document.getElementById("btns");
for(i=0;i<btns.clientHeight; i++)
{
    btns[i].addEventListener("click",function()
    {
        let node = Array.prototype.slice.call(btns);
        let indx = node.indexOf(this);
        console.log(indx);
        calculateprice(indx);

    })
}
