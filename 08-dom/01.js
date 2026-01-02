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



// 4. document.querySelector() -> element
const p4 = document.querySelector("#b p");
p4.style.color ="yellow";
p4.style.backgroundColor = "black";

const li2 = document.querySelector ("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";
li2.style.color = "white";

// 5. document.querySelectorAll() -> NodeList
const q = document.querySelectorAll("p");
for (let i = 0; i < q.length; i++) {
    if (i % 2 == 0) {
        q[i].style.backgroundColor = "brown";
    } else {
        q[i].style.backgroundColor = "green";
    }
}



// 
const sectionB = document.getElementById("b");
const pB = sectionB.getElementsByTagName("p")[0];
pB.style.backgroundColor = "grey";
pB.style.color = "white";




