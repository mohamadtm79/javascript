let _img = document.querySelectorAll('img');
let back = document.getElementsByTagName('span')[0]
let next = document.getElementsByTagName('span')[1]
let conter = 0

_img[0].src = 'img/1.jpg'
let Arayy = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.webp',
    'img/4.jpg',
]

next.addEventListener('click',()=>{
    conter++
    if(conter == 4){
        conter = 0
    }
    _img[0].src = Arayy[conter]
    
})

back.addEventListener('click',()=>{
    conter--
    if(conter < 0){
        conter = 3
    }
    _img[0].src = Arayy[conter]
})
