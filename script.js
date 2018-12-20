var coll = document.getElementsByClassName("collapsible","collapsible2");
var x;

for (x = 0; x < coll.length; x++) {
  coll[x].addEventListener("click", function() {
    this.classList.toggle("active");
    var menu = this.nextElementSibling;
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  });
}