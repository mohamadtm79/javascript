let _body = document.getElementsByTagName('body')[0]
let x , y
let _h1 = document.getElementsByTagName('h1')[0]
_body.addEventListener('mousemove',(e)=>{
    x = e.clientX / 20
    y = e.clientY / 20
    console.log(x , y);
    _h1.style.transform = `translateX(${x + 'px'}) translateY(${y + 'px'})`
})