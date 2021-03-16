var elementContainer = document.getElementById("activebutton");

var element = elementContainer.getElementsByClassName("element")

for (var i = 0; i < element.length; i++) {
    element[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
}