// global scope / window scope
var a = 10;

function test(a) {
    // function scope
    var a = 20;
    console.log(a); //mengacu ke variable lokal
}

test(a);
console.log(a); //mengacu ke variable global
