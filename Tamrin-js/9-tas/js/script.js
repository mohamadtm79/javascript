let h1_1 = document.getElementsByTagName('h1')[0];
let h1_2 = document.getElementsByTagName('h1')[2];
let h1_3 = document.getElementsByTagName('h1')[1];
let h1_4 = document.getElementsByTagName('h1')[3];
let h2_1 = document.getElementsByTagName('h1')[4];
let div_2 = document.getElementsByTagName('button')[0];
div_2.innerHTML = 'نوبت شماست کلیک کنید'
h2_1.innerHTML = "باید 3 بارتاس بندازی جمع امتیاز هرکدوم به 30 رسید برندس"
let conter = null
let conter2 = null
let ferst = false
let flag = 0
let m = true
let rand = 0
div_2.addEventListener('click',function(){
    if(ferst != true){
        let list = [
            '1','2','3',
            '4','5','6',
        ];
        flag++
        setTimeout(() => {
            list = parseInt(Math.random() * 5 + 1)
            h1_1.innerHTML = list
            let m = conter + list
            conter = m
            h1_3.innerHTML = m
            ferst = false
            console.log(flag);
            if(m >= 30){
                h1_3.innerHTML = "برنده شدی"
                ferst = true
                m = true
            }
            if(flag * 3 == 9){
                ferst = true
            }
            if(flag == 3 || flag == 0){
                ferst = true

            }
        }, 500);
        ferst = true
    }
    if(flag * 3 == 9){
        ferst = true
        m = false
        setTimeout(() => {
            div_2.innerHTML = 'نوبت کامپیوتر است'
        }, 1000);
        flag = 0
    }
    if(flag == 3 || flag == 0){
        ferst = true

    }
})
setInterval(() => {
    if(m == false){
        let pc = [
            '1','2','3',
            '4','5','6',
        ]; 
        rand++
        setTimeout(() => {
            pc = parseInt(Math.random() * 5 + 1)
            h1_2.innerHTML = pc
            let w = conter2 + pc
            conter2 = w
            h1_4.innerHTML = w
            console.log(rand);
            if(w >= 30){
                h1_4.innerHTML = 'باختی'
                m = true
                ferst = true

            }
        }, 500);
        if(rand * 3 == 9){
            m = true
            rand = 0
            setTimeout(() => {
                div_2.innerHTML = 'نوبت شماست'
            }, 1000);
            ferst = false
        }
    }
    if(rand * 3 == 9){
        ferst = false
    }
}, 1000);
