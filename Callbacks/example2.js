
function hello(error,src){
    if(error) {
        console.log(error)
        return
    }
    alert('Hello world')
}
function loadScript(src,callback){
   let script= document.createElement("script")
   script.src=src
   script.onload=function(){
    console.log("loaded script with "+src)
    callback(null,src)
   }
   script.onerror=function(){
    console.log("Error loading script with src "+src)
    callback(new Error('src not found'))
   }
   document.body.appendChild(script)
}

loadScript("https://cdn.jsdelivr.net/npmotstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",hello)



