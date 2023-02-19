let p1=new Promise((resolve,reject)=>{
    alert("Not Resolver Here");
    setTimeout(()=>{
        resolve(1)
    },2000)
})
p1.then((value)=>{
    console.log('Resolved Here');
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(4)
        },4000)
    
    })
}).then((value)=>{
    console.log(value)
})
p1.then(()=>{
    console.log('Last then method done');
})