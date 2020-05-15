/*

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

const observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    console.log("TEST HERE");
    console.log(mutations, observer);
    // ...
});

observer.observe(document, {
    subtree: true,
    attributes: true
    //...
  });

*/

console.log("BTP!");
const main = document.getElementById("top");
const body = document.getElementsByTagName("body")[0];
console.log(body);
console.log(main);

main.classList.add("center");



/*
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    document.getElementsByTagName("body").style
    //alert('updated from contentscript');
 });
 */