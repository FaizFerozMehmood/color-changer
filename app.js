var grey = document.getElementById('grey')
var green = document.getElementById('green')
var purple = document.getElementById('purple')
var yellow = document.getElementById('yellow')
var body = document.querySelector('body')

var heading3 = document.getElementById('heading_content')
var paragaph = document.getElementById('footer_content')
console.log(heading3);
console.log(grey);


function evnt1() {
    body.style.backgroundColor = "grey"
    heading3.style.color = "white"
    paragaph.style.color = "white"
}

function evnt2() {
    body.style.backgroundColor = "purple"
    paragaph.style.color = "white"

}

function evnt3() {
    body.style.backgroundColor = "green"
    paragaph.style.color = "white"

}
function evnt4() {
    body.style.backgroundColor = "yellow"
    heading3.style.color = "black"
    paragaph.style.color = "black"
}