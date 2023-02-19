let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('value 1');
    },1000)
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('value 2');
    },2000)
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('value 3');
    },3000)
})
let p4=Promise.all([p1,p2,p3])
p4.then((value)=>{
    console.log(value);
})