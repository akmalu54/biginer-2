// membuat object
// 1. object literal
var mahasiswa1 = {
    nama : "rizki",
    nim :"256789",
    email : "rizki@gmail.com",
    jurusan : "teknik informatika"
}

var mahasiswa2 = {
    nama : "andi",
    nim :"256790",
    email : "andi@gmail.com",
    jurusan : "teknik komputer"
}


// 2. function declaration
function buatobjectmahasiswa (nama, nim ,email, jurusan) {
    var mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.nim = nim ;
    mahasiswa.email = email ;
    mahasiswa.jurusan = jurusan ;
    return mahasiswa;
}

mahasiswa3 = buatobjectmahasiswa ("sisti", "1244657", "sisti@gmail.com", "teknik elektro");

    
// 3. constructor
function Mahasiswa (nama, nim ,email, jurusan) {
    // var this = {};
    this.nama = nama;
    this.nim = nim ;
    this.email = email ;
    this.jurusan = jurusan ;
    // return this;
}

var mahasiswa4 = new Mahasiswa ("akmal", "776757", "akmal@gmail.com", "teknik informatika");