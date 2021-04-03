

// method to collapse and expand the headers 
var coll = document.getElementsByClassName("collapsible-button");
var i;

coll[0].classList.toggle("active");
var content = this.nextElementSibling;
content.style.maxHeight = "0vh";


for (i = 0; i < coll.length; i++) {
    coll[1].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = "0vh";
    } 
    });
}


