// membuat object taxi 
function Taxi (sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;


    this.penumpangNaik = function (namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function (namaPenumpang, bayar){
        if (this.penumpang.length ===0 ){
            alert ("maaf taxi masih kosong");
            return false;
        }
        for ( var i=0; i<this.penumpang.length; i++){
            if (this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }

        }
    }
    
}

var taxi1 = new Taxi ("asep", ["jakarta","bandung"], [], 0,);
var taxi2 = new Taxi ("budi", ["jakarta","cirebon"], [], 0,);
