// DOM Events handler
// 1. element.onclick
const p3 = document.querySelector(".p3");

function ubahWarnap2() {
    p2.style.backgroundColor = "lightblue";
}
function ubahWarnap3() {
    p3.style.backgroundColor = "lightblue";
}

const p2 = document.querySelector(".p2");
p2.onclick = ubahWarnap2;




// 2. element.addEventListener()
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function() {
    const ul = document.querySelector("section#b ul");
    const liBaru = document.createElement("li");
    const textLiBaru = document.createTextNode("item baru dari event listener");
    liBaru.appendChild(textLiBaru);
    ul.appendChild(liBaru);     
})
