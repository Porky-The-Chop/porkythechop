document.getElementById("myUL").innerHTML = '
  <li><a href="food.html">Food</a></li>
  <li><a href="food1.html">Food1</a></li>
  <li><a href="health.html">Health</a></li>
  <li><a href="health1.html">Health1</a></li>
  <li><a href="tech.html">Technology</a></li>
  <li><a href="tech1.html">Technology1</a></li>
  <li><a href="index.html">About</a></li>';

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function mySearchFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  
    document.getElementById("myDropdown1").classList.toggle("show");
}
