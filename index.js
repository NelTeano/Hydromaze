/*-------------------------LOGIN POPUP-------------------------------------*/
function openLOG(){
   document.getElementById("login").style.display = "block";
   document.getElementById("signup").style.display = "none";

}
function closeLOG(){
    document.getElementById("login").style.display = "none";
 }



/*-------------------------SIGNUP POPUP-------------------------------------*/

function openSIGN(){
   document.getElementById("signup").style.display = "block";
   document.getElementById("login").style.display = "none";
}
function closeSIGN(){
    document.getElementById("signup").style.display = "none";
 }


 function showPASS() {
   var x = document.getElementById("pass");
   if (x.type === "password") {
     x.type = "text";
   } else {
     x.type = "password";
   }
 }
/*--------------------------------------------------------------*/






















