
document.addEventListener("DOMContentLoaded", ()=>{

document.querySelector("span").onclick= function OpenNav(){
    document.getElementById("mySideNav").style.width ="250px";
    document.getElementById("Main").style.marginleft = "250px";
}


document.querySelector(".closeBtn").onclick= function CloseNav(){
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("Main").style.marginLeft="0";
}
function displayNone(){
    document.querySelector("h5").textContent= "";
}
    
var timer = setTimeout(
 displayNone  
, 25000);
    
function Falert(){
   alert("Dear User, auto-rotate your Screen on your Mobile device if using a mobile phone if not Just sit back and Enjoy :]"); 
}
var displayAlert = setTimeout( Falert, 2000);
//console.log(timer);
});
