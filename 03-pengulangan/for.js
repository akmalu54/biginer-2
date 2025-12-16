var jumlahangkot = 10;
var noangkot = 1;
var angkotberoperasi = 6;

while (noangkot <= angkotberoperasi) {//perulangan while
    console.log("Angkot No. " + noangkot + " beroprasi dengan baik.");

noangkot++;
}

for (noangkot = angkotberoperasi +1; noangkot <= jumlahangkot; noangkot++) {
    console.log("Angkot No. " + noangkot + " sedang tidak beroprasi.");
}