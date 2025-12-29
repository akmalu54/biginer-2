var penumpang = [];
var tambahpenumpang = function (namapenumpang, penumpang) {

    // jika angkot kosong
    if (penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namapenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    }
    else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if (penumpang[i] == undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namapenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if (penumpang[i] == namapenumpang) {
                // tampilkan pesan kesalahan
                console.log(namapenumpang + " sudah ada di dalam angkot.");
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika sudah mencapai kursi terakhir
            else if (i == penumpang.length -1) {
                // tambah penumpang di akhir array
                penumpang.push(namapenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}





var hapuspenumpang = function (namapenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0 ) {
        // tampilkan pesan bahwa angkot kosong
        console.log("angkot masih kosong. ");
        // kembalikan isi array & keluar dari function
    }
    else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika nama penumpang sesuai
            if (penumpang[i] == namapenumpang) {
                // hapus penumpang dengan mengubah namanya menjadi undefined
                penumpang[i] = undefined;
                // kembalikan isi array & keluar dari function
            }
            // jika tidak ada nama yang sesuai
            else if (i == penumpang.length -1) {
                // tampilkan pesan bahwa nama tidak ada di dalam angkot
                console.log(namapenumpang + " tidak ada di dalam angkot. ");
                // kembalikan isi array & keluar dari function
            }
        }
    }
    // kembalikan isi array & keluar dari function
    return penumpang;
}