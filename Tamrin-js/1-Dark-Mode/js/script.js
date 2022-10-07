let dark_mode = document.getElementsByTagName('button')[0]
let lightmode = document.getElementsByTagName('button')[1];
let main = document.getElementsByClassName('main')[0]
dark_mode.addEventListener('click',()=>{
   main.style['background'] = 'black'
   main.style['color'] = '#fff'
    dark_mode.style['color'] = '#000'
    dark_mode.style['background'] = '#fff'
    dark_mode.style['display'] = 'none'
    lightmode.style['display'] = 'block'
});
lightmode.addEventListener('click',()=>{
    main.style['background'] = '#fff'
    main.style['color'] = '#000'
    dark_mode.style['color'] = '#fff'
    dark_mode.style['background'] = '#000'
    dark_mode.style['display'] = 'block'
    lightmode.style['display'] = 'none'
})