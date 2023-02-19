const radius=[1,2,3,4]



//Here we're calculating area,circumference and diameter of circle having radius in normal form
const calculateArea=function(radius){
   const output=[]
   for(let i=0;i<radius.length;i++){
     
    output.push(Math.PI*radius[i]*radius[i])
   }
   return output
}
const calculateCircumference=function(radius){
        const output=[]
        for(let i=0;i<radius.length;i++){
            output.push(2*Math.PI*radius[i])
        }
        return output

}
const calculateDiameter=function(){
    const output=[]
        for(let i=0;i<radius.length;i++){
            output.push(2*Math.PI*radius[i])
        }
        return output

}

// console.log(calculateArea(radius));
// console.log(calculateCircumference(radius));
// console.log(calculateDiameter(radius));


//Here we're optimizing the code by using functional programming way

const area=function(radius){
return Math.PI*radius*radius
}
const circumference=function(radius){
    return 2*Math.PI*radius
}
const diameter=function(radius){
    return 2*radius
}
const calculate=function(radius,logic){
    const output=[]
        for(let i=0;i<radius.length;i++){
            output.push(logic(radius[i]))
        }
        return output

}

//We optimize the code which means calculate area is same for all operations like area ,diameter etc so i make it as a generic function so we can passs the radius and logic method which we need that
console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

 
Array.prototype.calculateMapLike=function(logic){
    const output=[]
        for(let i=0;i<this.length;i++){
            output.push(logic(this[i]))
        }
        return output

}
console.log(radius.calculateMapLike(area));
//as you see here this calculateMapLike method works as map function that why i named as maplike but the syntax is little bit diff to make it similar i pass array and logic as argument

Array.prototype.calculateMap=function(radius,logic){
    const output=[]
        for(let i=0;i<radius.length;i++){
            output.push(logic(radius[i]))
        }
        return output

}
console.log(calculate(radius,area)) 