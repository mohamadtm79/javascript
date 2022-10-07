let _section = document.getElementsByTagName('section')[0]
let _div = document.getElementsByTagName('div')[0]
let x , y
_section.addEventListener('mousemove',(e)=>{
    e.target.style.background = 'black'
    _div.style['background'] = 'transparent'
    x = e.clientX
    y = e.clientY
    console.log(x , y);
    _div.style.top = y + 'px'
    _div.style.left = x + 'px'
})