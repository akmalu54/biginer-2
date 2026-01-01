// DOM Selection metode
// 1. document.getElementById() -> element
const judul = document.getElementById ("judul");
judul.style.color = "yellow";
judul.style.backgroundColor = "purple";
judul.style.textAlign = "center";
judul.style.borderRadius = "10px";
judul.innerHTML = "Akmalu";


// 2. document.getElementsByTagName() -> HTMLCollection
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = "tomato";
    p[i].style.color = "white";
    p[i].style.borderRadius = "10px";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "25px";


// 3. document.getElementsByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName("p1")[0];
p1.style.fontSize = "15px";
p1.style.color = "white";
p1.style.backgroundColor = "blue";
p1.innerHTML = "profil saya";









