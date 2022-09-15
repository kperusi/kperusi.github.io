let hambuger = document.querySelector('.hambuger')
let nav = document.querySelector('.nav-wrap');


hambuger.addEventListener('click',()=>{
    hambuger.classList.toggle('active')

    nav.classList.toggle('show')
} )