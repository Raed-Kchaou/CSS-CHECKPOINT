var x=document.getElementById("text");

function Bold () { 
    if (x.style.fontWeight== "bold")
    {x.style.fontWeight= "normal"}
    else 
    x.style.fontWeight= "bold";


   
}
function Italic () {
    if ( x.style.fontStyle=="italic")
    {x.style.fontStyle= "normal"}
    else 
    x.style.fontStyle= "italic";
}
function Underlineu () {
    if ( x.style.textDecoration=="underline")
    {x.style.textDecoration="none"}
    else 
    x.style.textDecoration="underline";
   
      
}
function ff(){
    // console.log( document.getElementById("fz").value)
   x.style.fontSize= document.getElementById("fs").value;
}
function hamza ()
{
    x.style.fontFamily=document.getElementById("panda").value;
    
}