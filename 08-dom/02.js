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




// DOM manipulation node
// 1. document.createElement()
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("paragraf baru");
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
pBaru.style.backgroundColor = "lightyellow";

// simpan pBaru di akhir section a
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// 2. node.insertBefore()
const liBaru = document.createElement("li");
const textLiBaru = document.createTextNode("item baru");
liBaru.appendChild(textLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);
liBaru.style.backgroundColor = "lightgreen";


// 3. node.removeChild()
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// 4. node.replaceChild()
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");
const pBaru2 = document.createElement("p");
const teksPBaru2 = document.createTextNode("paragraf baru di section b");
pBaru2.appendChild(teksPBaru2);
sectionB.replaceChild(pBaru2, p4);
pBaru2.style.backgroundColor = "lightblue";