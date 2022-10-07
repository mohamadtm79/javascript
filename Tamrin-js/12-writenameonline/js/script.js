let h1 = document.getElementsByTagName('h1')[0];
let _name = ['mohamad','parsa','javascript']
let index = 0
let i = 0
function type(){
    if(i < _name[index].length){
        i++ 
        h1.innerHTML = _name[index].substring(0 , i)
        setTimeout(type,200)
    }else{
        setTimeout(() => {
            function back(){
                if(i > 0){
                    i--
                    h1.innerHTML = _name[index].substring(0 , i)
                    setTimeout(back,200)
                }else{
                    index++
                    if(index >= _name.length){
                        index = 0
                    }
                    setTimeout(type,200)

                }
            }
            back()
        }, 1000);
    }
}
type()
