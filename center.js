//fix the alignment
console.log("BTP!");
const main = document.getElementById("top");
const body = document.getElementsByTagName("body")[0];
console.log(body);
console.log(main);

main.classList.add("center");

//fix the main width
main.removeAttribute("width");

//footer
const footer = document.getElementsByTagName("tbody")[0].lastElementChild;
console.log("footer:");
console.log(footer);

//fix the header
const header = document.getElementsByClassName("tbanner")[0];
console.log("header");
console.log(header);
header.remove();

//remove img/license
const rightFooter = footer.getElementsByClassName("panel2")[0];

while(rightFooter.lastElementChild) {
    rightFooter.removeChild(rightFooter.lastElementChild);
}

//footer.getElementsByTagName("img")[0].remove();
//footer.getElementsByTagName("a")[0].remove();

//change the theme
function darkTheme(toggle) {//how do I do dis???
    if(toggle) {
        //document.getElementsByTagName("head").createElement("")
    }
}