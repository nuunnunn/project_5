const all = document.getElementsByClassName('all')[0];
const kr = document.getElementsByClassName('kr')[0];
const foreign = document.getElementsByClassName('foreign')[0];
const eBook = document.getElementsByClassName('eBook')[0];

const all_wrap = document.getElementsByClassName('all_wrap')[0];
const kr_wrap = document.getElementsByClassName('kr_wrap')[0];
const foreign_wrap = document.getElementsByClassName('foreign_wrap')[0];
const eBook_wrap = document.getElementsByClassName('eBook_wrap')[0];
const fade_wrap = document.querySelectorAll('.fade_wrap');

all.onclick = function(){
    fade_wrap.forEach((fade)=>{
        console.log(fade)
        fade.style.opacity = 0;
        fade.style.height = 0;
    });

    all_wrap.style.opacity = 1;
    all_wrap.style.height = '420px';
}

kr.onclick = function(){
    fade_wrap.forEach((fade)=>{
        fade.style.opacity = 0;
        fade.style.height = 0;
    });

    kr_wrap.style.opacity = 1;
    kr_wrap.style.height = '420px';
}

foreign.onclick = function(){
    fade_wrap.forEach((fade)=>{
        fade.style.opacity = 0;
        fade.style.height = 0;
    });

    foreign_wrap.style.opacity = 1;
    foreign_wrap.style.height = '420px';
}

eBook.onclick = function(){
    fade_wrap.forEach((fade)=>{
        fade.style.opacity = 0;
        fade.style.height = 0;
    });

    eBook_wrap.style.opacity = 1;
    eBook_wrap.style.height = '420px';
}