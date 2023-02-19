const loadScript =(src)=>{

        return new Promise((resolve,reject)=>{
            let script=document.createElement("script")
            script.src=src
            src.type="text/javascript"
            document.body.appendChild(script)
            script.onload=(script)=>{
                resolve("Script has been loaded")

            }
            script.onerror=()=>{
                reject(0)
            }
        })
}
let p1=loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js")
p1.then((value)=>{
    console.log(value)
    return loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js")
}).then((vvalue)=>{
    console.log('Second script');
}
).catch((error)=>{
    console.log('Catch block');
})
//By using then and catch methods ofPromiseChainig we can avoid long length of callback functions which leads to callback hell 