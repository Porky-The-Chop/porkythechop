document.getElementById("dropbtn").addEventListener("mouseover", dropDownFunc);

function dropDownFunc() {
   document.getElementById("dropdowncontent").classList.toggle("dropdown-content2");
   
   if(document.getElementById("dropdowncontent").style.visibility = "hidden") {
      document.getElementById("dropdowncontent").style.visibility = "visible";
   } else {
      document.getElementById("dropdowncontent").style.visibility = "hidden";
   }
}
