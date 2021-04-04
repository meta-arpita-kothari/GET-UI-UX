

// method to collapse and expand the headers 
const coll = document.getElementsByClassName("collapsible-button");
let i;

coll[0].classList.toggle("active");
const content = this.nextElementSibling;
content.style.maxHeight = "0vh";


for (i = 0; i < coll.length; i++) {
    coll[1].addEventListener("click", function() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = "0vh";
    } 
    });
}


