// function x(){
//     for(var i=1;i<=5;i++){
//     function close(x){
//         setTimeout(() => {
//             console.log(x);
//         }, i*1000);
//     }
//     close(i)
// }

// }
// x()


function outer(){
    let a=10;
    function inner(){
        console.log(a);
    }
    
    return inner
}
outer()()
var symbol1 = Symbol();
console.log(symbol1);