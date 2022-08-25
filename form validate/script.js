function txt(name)
{
   var take = /^[A-Za-z]+$/;
   if(name.value.match(take))
     {
      return true;
     }
   else
     {
     alert("Please enter letters only.");
     return false;
     }
}  
















