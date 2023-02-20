function greeting(name){
    console.log(`hello ${name}`);
}
function salutation(callback){
    let name=  prompt('Enter your name')
    callback(name)
}
salutation(greeting)
console.log("hye");