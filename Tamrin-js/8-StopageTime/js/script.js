let _div = document.querySelectorAll('.box>div');
let button = document.querySelectorAll('button');
let ms = 0
let s = 0
let d = 0
let flag = true
button[0].addEventListener('click',()=>{
    if(flag == true){

        let _setInterval = setInterval(() => {
        button[1].addEventListener('click',()=>{
            clearInterval(_setInterval)
        })

           
            if(ms < 10){
                _div[0].innerHTML = "0"+ms
            }else{
                _div[0].innerHTML = ms
            }
            ms++
            if(ms == 100){
                ms = 0
                if(ms == 0){
                    s++
                    if(s < 10){
                        _div[1].innerHTML = "0"+s
                    }else{
                        _div[1].innerHTML = s
                    }
                    if(s == 11){
                        s = 0
                        if(s == 0){
                            d++
                            if(d < 10){
                                _div[2].innerHTML = "0"+d
                            }else{
                                _div[2].innerHTML = d
                            }
                        }
                    }
                }
            }
            flag = false
        }, 10);
        button[1].addEventListener('click',()=>{
            flag = true
        })
        document.getElementsByTagName('button')[2].addEventListener('click',function(){
            let di = document.createElement('div')
            di.innerHTML = `${_div[0].textContent} - ${_div[1].textContent} - ${_div[2].textContent}`
            document.getElementsByClassName('conter')[0].appendChild(di)
        })
    }
})