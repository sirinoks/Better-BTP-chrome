const main = document.getElementById("top");
const body = document.getElementsByTagName("body")[0];


//fix the alignment
function align () {
    console.log("BTP!");
    console.log(body);
    console.log(main);
    
    main.classList.add("center");    
}

//fix the main width
function width() {
    main.removeAttribute("width");
}

//footer
function footer() {
    const footer = document.getElementsByTagName("tbody")[0].lastElementChild;
    console.log("footer:");
    console.log(footer);    
}

//HEADER
//remove the image
function header() {
    const header = document.getElementsByClassName("tbanner")[0];
    console.log("header");
    console.log(header);
    header.getElementsByTagName("img")[0].remove();
    //change the text of the header
    const headerText = document.getElementsByClassName("text0")[0];
    console.log(headerText);    
}



//remove img/license
function license() {
    const logo = document.querySelector(`img[alt="Logo"]`);
    const license = document.querySelector(`a[rel="license"]`);
    logo.remove();
    license.remove();

}

//change the theme
function darkTheme(toggle) {//how do I do dis???
    if(toggle) {
        //document.getElementsByTagName("head").createElement("")
    }
}


align();
width();
header();
license();