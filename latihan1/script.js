var tanya = true;
while (tanya) {

    // menangkap pilihan user
    var p= prompt ("pilih : gajah, semut, orsng");

    // menangkap pilihan computer
    // membangkitkan pilihan random
    var comp= Math.random();

    if (comp < 0.34) {
        comp = "gajah";
    }
    else if (comp >= 0.34 && comp <= 0.67) {
        comp = "orang";
    }
    else {
        comp = "semut";
    }


    var hasil = "";
    // menentukan rules
    if (p == comp) {
        hasil ="seri"
    }
    else if (p == "gajah") {
        // if (comp == "orang") {
        //     hasil = "menang";
        // }
        // else {
        //     hasil = "kalah";
        // }
        hasil = (comp == "orang") ? "menang!" : "kalah!";
    }
    else if (p == "orang") {
        hasil = (comp == "gajah") ? "kalah!" : "menang!";
    }
    else if (p == "semut") {
        hasil = (comp == "orang") ? "kalah!" : "menang!";
    }
    else {
        hasil = "memasukkan pilihan yang salah!";   
    }
    // tampilan hasilnya
    alert ("kamu memilih : " + p + " dan komputer memilih : " + comp + "\nMaka hasilnya adalah kamu " + hasil);

    tanya = confirm ("lagi?");
}

alert ("terima kasih sudah bermain");