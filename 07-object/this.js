//materi  this

// function declarasion  
// function welcome() {
//     console.log(this);
//     console.log(welcome);
// }
// this.welcome();//mengembalikan object global (window)


// object literal
var object ={
    name: "object literal",
    a : 10,
}
object.sayHello = function(){
    console.log(this);
    console.log("hello");
};
object.sayHello();//mengembalikan object yang bersangkutan (object)



// constructor function
function hai() {
    console.log(this);
    console.log("hai");
}
var hai1 = new hai();//mengembalikan object yang baru dibuat (hai1)
var hai2 = new hai();//mengembalikan object yang baru dibuat (hai2)