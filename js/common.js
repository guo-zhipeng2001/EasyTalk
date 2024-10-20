function $(selector){
     return document.querySelector(selector);
}
function $$(selector){
    return document.querySelectorAll(selector);
}
function $$$(tagname){
    return document.createElement(tagname);
}