var angkot =1;
var jumlah =10;
var beroprasi =6;

for (var angkot = 1; angkot <= jumlah; angkot++) {

    if (angkot <= beroprasi && angkot !== 5) {
        console.log ("angkot " + angkot + " beroprasi dengan baik")
    }
    else if (angkot === 8 || angkot === 10 || angkot === 5) {
        console.log ("angkot " + angkot + " sedang lebur")
    }
    else {
        console.log ("angkot " + angkot + " angkot rusak")
    }

}