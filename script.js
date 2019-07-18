document.getElementById("dropbtn").addEventListener("mouseover", dropDownFunc);

function dropDownFunc() {
   if(document.getElementById("dropdowncontent").style.visibility = "hidden") {
      document.getElementById("dropdowncontent").style.visibility = "visible";
   } else if(document.getElementById("dropdowncontent").style.visibility = "visible") {
      document.getElementById("dropdowncontent").style.visibility = "hidden";
   }
}
