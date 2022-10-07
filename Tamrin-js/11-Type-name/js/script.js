   // let o = setInterval(img,1000)
   let temp = 'mohamad'
   let i = 0
   let k 
   function img(){
       setInterval(() => {
           if( i <= temp.length ){
               document.getElementById('canvas').innerHTML = temp.substring(0 , i)     
               i++
               k = i
           }else{
               k--
               document.getElementById('canvas').innerHTML = temp.substring(0 , k)
               // document.getElementById('canvas').innerHTML = temp.charAt(k)
               if(k == 0){
                   i = k
                   i++
               }
           }
       }, 300);
   }
   img()
   // for (let i = 1; i < temp.length; i++) {
   //     console.log(i);
   // }

