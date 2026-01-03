// DOM Manipulation element methods
// 1. element.innerHTML
const judul = document.getElementById("judul");
judul.innerHTML = "akmalu"

// 2. element.style<selektor>
const p1 = document.querySelector("#a .p1");
p1.style.color = "red";
p1.style.fontSize = "30px";

// 3. element.setAttribute()
const judul2 = document.getElementsByTagName("h1")[0];
judul2.setAttribute("name", "akmalu");
const a = document.querySelector("section#a a");
a.setAttribute("id", "link");

const p2 = document.querySelector(".p2");
// p2.setAttribute("class", "label");

// 4. element.classList()
const p3 = document.querySelector(".p3");
p3.classList.add("label");
p2.classList.remove("label");
p2.classList.toggle("label"); //jika ada dihapus, jika tidak ada ditambah
