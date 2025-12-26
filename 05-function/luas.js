function jumlahvolumeduakubus (a,b) {
    var total;
    var volumeA;
    var volumeB;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}

alert(jumlahvolumeduakubus (8,3));
alert(jumlahvolumeduakubus (5,6));
alert(jumlahvolumeduakubus (1,9));
