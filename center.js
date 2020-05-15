//fix the alignment
console.log("BTP!");
const main = document.getElementById("top");
const body = document.getElementsByTagName("body")[0];
console.log(body);
console.log(main);

main.classList.add("center");

//fix the header
const header = document.getElementsByClassName("tbanner")[0];
console.log("header");
console.log(header);
header.remove();

//change the theme
function darkTheme(toggle) {//how do I do dis???
    if(toggle) {
        //document.getElementsByTagName("head").createElement("")
    }
}