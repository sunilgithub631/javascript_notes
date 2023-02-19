
 function greet(){
    console.log(this.animal,'typically sleeps between ',this.sleepDuration);
 }
 const obj={
    animal:'dog',
    sleepDuration:'12 and 16 hours'
 }
 greet.call(obj)


"use strict"; //neglect
 globalThis.globalProp='sunil'
 function display(){
  console.log(this.globalProp);
 }
 display.call()



 let name={
    first:'sunil',
    last:'nani',
}
let name2={
    first:'varun',
    last:'kumar'
}
let getFullDetails=function(hometown,state){
    console.log(this.first,this.last,hometown,state);
}
getFullDetails.call(name,'vijayawada','ap')            //call method
getFullDetails.call(name2,'sdj','bihar')


getFullDetails.apply(name,['vijayawda','AP'])               //apply
getFullDetails.apply(name2,['djf','bihar'])


let m=getFullDetails.bind(name,'vijayawda','AP')
m()