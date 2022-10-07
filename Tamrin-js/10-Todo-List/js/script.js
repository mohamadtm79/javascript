let button = document.getElementsByTagName('button')[0];
let _id = 0   
let temp
let turn
button.addEventListener("click",()=>{
    temp = document.getElementsByTagName('input')[0].value;
    if(temp == '' || temp == " " || temp == null){
        alert('are u adami')
    }else{ 
        _Add(temp)
        _remove()
        _edit()
        editComplit()
        document.getElementsByTagName('input')[0].value = null;
    }
});
 
// اضافه کردن تگ
function _Add(Add){
    let _li = document.createElement('li');
    let _tag = document.getElementById('ul').appendChild(_li.cloneNode(true))
    _id++
    _tag.setAttribute('id',`li${_id}`)
    _tag.innerHTML = `
    <div class="d-flex align-items-center justify-content-center m-4">
    <h2 class="col-10">${Add}</h2>
    <span class="col-1 edit">edit</span>
    <span class="col-1 span">delet</span>
    </div>
    `
}

// حذوکردن تگ
function _remove(){
    let span = document.querySelectorAll('.span')
    span.forEach((item)=>{
        item.addEventListener('click',()=>{
            // console.log(item);
            item.parentElement.parentElement.remove()
        })
    })
}
// ادیت اسم
function _edit(){
    let edit = document.querySelectorAll('.edit');
    edit.forEach((item)=>{
        item.addEventListener('click',()=>{
            item.parentElement.parentElement.style["boxShadow"] = '0px 0px 14px 2px #00ffa3'
            document.getElementsByTagName('input')[0].value = item.previousElementSibling.textContent 
            turn = item.parentElement.parentElement.getAttribute('id');
            document.getElementsByTagName('button')[1].style.display = 'block'
            document.getElementsByTagName('button')[0].style.display = 'none'
            calbak(item)
        })
    })
}
// خالی کردن اینپوت بعدع ادیت
function calbak(x){
    document.getElementsByTagName('button')[1].addEventListener('click',function(){
        document.getElementsByTagName('input')[0].value = null;
        
        setTimeout(() => {
            x.parentElement.parentElement.style["boxShadow"] = '0px 0px 0px 0px'
        }, 1000);
        x.parentElement.parentElement.style["boxShadow"] = 'rgb(12 255 0) 0px 0px 14px 2px'

    })
}
// جایگزین اسم ها
function editComplit(){
    document.getElementsByTagName('button')[1].addEventListener('click',function(){
        document.querySelector(`#${turn}>div>h2`).innerText = (document.getElementsByTagName('input')[0].value)
        document.getElementsByTagName('button')[0].style.display = 'block'
        document.getElementsByTagName('button')[1].style.display = 'none'
    })
}