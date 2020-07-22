const main = document.getElementById("top");
const body = document.getElementsByTagName("body")[0];


//fix the alignment
function align () {
    console.log("BTP!");
    console.log(body);
    console.log(main);
    
    if(main!=undefined) {
        main.classList.add("center");
    } else {
        console.log("main not found");
    }

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
    //headerText.classList.add("center");
    console.log(headerText);

}



//remove img/license
function license() {
    const logo = document.querySelector(`img[src="../images/Logo.gif"]`) || document.querySelector(`img[src="pages/images/Logo.gif"]`) ||
     document.querySelector(`img[src="../../pages/images/Logo.gif"]`) || document.querySelector(`img[src="images/Logo.gif"]`);
    const license = document.querySelectorAll(`a[rel="license"]`);

    if(logo) {
        logo.remove();
    } else {
        console.log("logo was not found. Please let the author know when and where this happens.")
    }

    if(license.length>0) {
        license.forEach(img=>{
            img.remove();
        });
    } else {
        console.log("license was not found. Please let the author know when and where this happens.")
    }
}

//change the theme
function darkTheme(toggle) {//how do I do dis???
    if(toggle) {
        //document.getElementsByTagName("head").createElement("")
    }
}

//Fixes empty space above nav
function fixGap() {
    const navPanel = document.querySelector(`td[valign="bottom"]`);
    navPanel.removeAttribute("valign");
    navPanel.removeAttribute("align");
}

//Fixes extreme for your eyes colors
function fixDedColors() {
    const blues = document.querySelectorAll(`[color="blue"]`);
    const reds = document.querySelectorAll(`[color="red"]`);

    if(blues.length>0){
        blues.forEach(blue=>{
            blue.removeAttribute("blue");
            blue.classList.add("code");
        });
    }

    if(reds.length>0){
        reds.forEach(red=>{
            red.removeAttribute("red");
            red.classList.add("high");
        });
    }
}


align();
width();
header();
license();
fixGap();
fixDedColors();