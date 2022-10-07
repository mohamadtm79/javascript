let _img = document.querySelectorAll('img');

_img[0].src = 'img/1.jpg' 
_img[1].src = 'img/1.jpg' 
_img[2].src = 'img/2.jpg' 
_img[3].src = 'img/3.webp' 
_img[4].src = 'img/4.jpg' 

_img.forEach((item)=>{ 
    item.addEventListener('click',()=>{
        _img[0].src = item.src
    })
})

