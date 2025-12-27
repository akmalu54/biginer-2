// // menamplkan isi array
// var binatang = ["Binatang", "Kucing", "Anjing", "Burung"];

// for (var i = 0; i < binatang.length; i++) { //menampilkan menggunakan perulangan
//     console.log("binatang ke-" + (i + 1) + " : " + binatang[i]);
// }


// method pada array
var buah = ["Mangga", "Apel", "Jeruk"];

// 1. join menggabungkan isi array menjadi string
// console.log(buah.join(" - ")); //menggabungkan isi array menjadi string dengan pemisah " - "


//2. push dan pop
buah.push("Pisang", "rambutan"); //menambahkan isi array di akhir
buah.pop(); //menghapus isi array di akhir


//3. unshift dan shift menghilangkan atau menambahkan elemen di awal
buah.unshift("Semangka", "Durian"); //menambahkan isi array di awal
buah.shift(); //menghapus isi array di awal


// 4. splice 
// splice untuk menyisipkan atau menghapus elemen pada array
buah.splice(1, 0, "Melon", "Kiwi"); //menyisipkan elemen pada index ke 1, menghapus 0 elemen, menambahkan Melon dan Kiwi

// 5. slice
// slice untuk mengambil sebagian elemen pada array
var buah2 = ["Mangga", "Apel", "Jeruk", "Pisang", "Semangka"];
var buah3 = buah2.slice(1, 4); //mengambil elemen dari index 1 sampai index 4 (tidak termasuk index 4) 

console.log(buah.join(" - ")); //menampilkan isi array buah
console.log(buah3.join(" - ")); //menggabungkan isi array menjadi string dengan pemisah " - "