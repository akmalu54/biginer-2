var item = prompt("masukkan nama makanan dan minuman : \n (cth: nasi, daging , susu, hamburger ,softdrink)");

switch (item ) {
    case "nasi":
    case "daging ":
    case "susu" :
        alert ("makanan / minuman sehat" );
        break;
    case "humburger":
    case "softdrink":
        alert ("makanan / minuman tidak sehat");
        break;
    default:
        alert ("anda memasukkan nama makanan dan minuman yang tidak ada");
        break;

}