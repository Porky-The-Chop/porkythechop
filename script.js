document.getElementById("dropbtn").addEventListener("mouseover", dropDownFunc);

var dropDownNum = 0;

function dropDownFunc() {
   if(dropDownNum == 0) {
      document.getElementById("dropdown").innerHTML = "<button id="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="index.html">About</a>
    <a href="index1.html">Food</a>
    <a href="index2.html">Health</a>
  </div>";
      dropDownNum = 1;
   } else {
      document.getElementById("dropdown").innerHTML = "<button id="dropbtn">Dropdown</button>";
      dropDownNum = 0;
   }
}
