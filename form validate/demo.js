
	//text only 
    var  input=document.getElementById("textonly")
	
	function allLetter()
  {
   var input = /^[A-Za-z]+$/;
   if(inputtxt.value.match(input))
     {
      return true;
     }
   else
     {
     alert("message");
     return false;
     }
  }