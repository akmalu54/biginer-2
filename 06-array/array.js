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

// console.log(buah.join(" - ")); //menampilkan isi array buah
// console.log(buah3.join(" - ")); //menggabungkan isi array menjadi string dengan pemisah " - "


// 6. forEach untuk melakukan perulangan pada array
var angka = [1, 2, 3, 4, 5];
var mahasiswa = ["Andi", "Budi", "Cici"];
// for (var i = 0; i < angka.length; i++) {
//     console.log (angka[i]);
// }

// angka.forEach(function(e) {
//     console.log(e);
// });


// mahasiswa.forEach(function(e , i) {
//     console.log("mahasiswa ke-" + (i +1) + " adalah : " + e);
// })

// 7. map mengubah isi array dan menghasilkan array baru
// var angka2 = [1, 2, 3, 7, 5, 8, 4];
// var angka3 = angka2.map(function(e) {
//     return e * 2;
// });
// console.log(angka3.join(" - "));

// 8. sort mengurutkan isi array
// var angka4 = [1, 5, 20,67,10, 8, 3, 4, 7, 6];
// console.log(angka4.join(" - "));
// angka4.sort(function(a,b) {
//     return a-b;
// });
// console.log( angka4.join(" - "));


// 9. filter menyaring isi array berdasarkan kondisi tertentu
var angka5 = [1, 5, 20, 67, 10, 8, 3, 4, 7, 6];
var angka6 = angka5.filter(function(x) {
    return x <= 5;
});
console.log(angka6.join(" - "));


// 10. find mencari satu elemen pada array berdasarkan kondisi tertentu
var angka7 = [1, 5, 20, 67, 10, 8, 3, 4, 7, 6];
var angka8 = angka7.find(function(x) {
    return x > 5;
});
console.log(angka8);


