
let num;
        let rando= Math.floor(Math.random*100)
        console.log(rando)
        let chances=100
       while(num!=rando){
      //  let input=prompt('Enter the number')
        // num=Number.parseInt(input)
        // num=prompt('Enter the number')
      // num= Number.parseInt(num
        chances=chances-1
        if(num===rando){
            console.log('Congratulations youre number is matched');
            console.log(`chancs ${100-chances}`);
          break
        }else if(num>rando && num<100) {
          console.log('Youre number is greater than my number')
          continue
        }
        else if(num<rando && num>0){
          console.log('youre number is lesser than my number');
          continue
        } 
          
        else {
          console.log('Enter the number between 1 and 100');
        }

       }
    
