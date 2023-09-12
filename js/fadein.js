//popup img
let luckyDiv = document.getElementsByClassName('lucky')[0];
let lucky = document.getElementsByClassName('lucky')[0].children[1];

lucky.onclick = function(){
    luckyDiv.style.display = 'none'
}



//section fade out
const best_button = document.getElementsByClassName('best')[0];
const best_box = document.getElementsByClassName('best_box')[0];

const all = document.getElementsByClassName('all')[0];
const kr = document.getElementsByClassName('kr')[0];
const foreign = document.getElementsByClassName('foreign')[0];
const eBook = document.getElementsByClassName('eBook')[0];

const all_wrap = document.getElementsByClassName('all_wrap')[0];
const kr_wrap = document.getElementsByClassName('kr_wrap')[0];
const foreign_wrap = document.getElementsByClassName('foreign_wrap')[0];
const eBook_wrap = document.getElementsByClassName('eBook_wrap')[0];
const fade_wrap = document.querySelectorAll('.fade_wrap');

function best_fade(){
    best_button.onclick = function(){
        best_box.style.height  = '420px';
        best_box.style.opacity = 1;
        all_wrap.style.height  = '420px';
        all_wrap.style.opacity = 1;

        new_box.style.height  = '0%';
        new_box.style.opacity = 0;
        new_all.style.height  = '0px';
        new_all.style.opacity = 0;    
    }
}
best_fade();

function best_wrap_fade(){
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
        best_button.onclick = function(){
            kr_wrap.style.opacity = 0;
            kr_wrap.style.height = 0;
            all_wrap.style.opacity = 1;
            all_wrap.style.height = '420px';
        }

        kr_wrap.style.opacity = 1;
        kr_wrap.style.height = '420px';
    }

    foreign.onclick = function(){
        fade_wrap.forEach((fade)=>{
            fade.style.opacity = 0;
            fade.style.height = 0;
        });
        best_button.onclick = function(){
            foreign_wrap.style.opacity = 0;
            foreign_wrap.style.height = 0;
            all_wrap.style.opacity = 1;
            all_wrap.style.height = '420px';
        }

        foreign_wrap.style.opacity = 1;
        foreign_wrap.style.height = '420px';
    }

    eBook.onclick = function(){
        fade_wrap.forEach((fade)=>{
            fade.style.opacity = 0;
            fade.style.height = 0;
        });
        best_button.onclick = function(){
            eBook_wrap.style.opacity = 0;
            eBook_wrap.style.height = 0;
            all_wrap.style.opacity = 1;
            all_wrap.style.height = '420px';
        }

        eBook_wrap.style.opacity = 1;
        eBook_wrap.style.height = '420px';
    }
}
best_wrap_fade();


const new_button = document.getElementsByClassName('new')[0];
const new_box = document.getElementsByClassName('new_box')[0];

const new_all = document.getElementsByClassName('new_all')[0];
const new_kr = document.getElementsByClassName('new_kr')[0];
const new_foreign = document.getElementsByClassName('new_foreign')[0];
const new_eBook = document.getElementsByClassName('new_eBook')[0];

new_button.onclick = function(){
    new_box.style.height  = '420px';
    new_box.style.opacity = 1;
    new_all.style.height  = '420px';
    new_all.style.opacity = 1;

    best_box.style.height  = '0%';
    best_box.style.opacity = 0;
    all_wrap.style.height  = '0px';
    all_wrap.style.opacity = 0;



    all.onclick = function(){
        fade_wrap.forEach((fade)=>{
            console.log(fade)
            fade.style.opacity = 0;
            fade.style.height = 0;
        });
    
        new_all.style.opacity = 1;
        new_all.style.height = '420px';
    }
    
    kr.onclick = function(){
        fade_wrap.forEach((fade)=>{
            fade.style.opacity = 0;
            fade.style.height = 0;
        });
        new_button.onclick = function(){
            new_kr.style.opacity = 0;
            new_kr.style.height = 0;
            new_all.style.opacity = 1;
            new_all.style.height = '420px';
        }
    
        new_kr.style.opacity = 1;
        new_kr.style.height = '420px';
    }
    
    foreign.onclick = function(){
        fade_wrap.forEach((fade)=>{
            fade.style.opacity = 0;
            fade.style.height = 0;
        });
        new_button.onclick = function(){
            new_foreign.style.opacity = 0;
            new_foreign.style.height = 0;
            new_all.style.opacity = 1;
            new_all.style.height = '420px';
        }
    
        new_foreign.style.opacity = 1;
        new_foreign.style.height = '420px';
    }
    
    eBook.onclick = function(){
        fade_wrap.forEach((fade)=>{
            fade.style.opacity = 0;
            fade.style.height = 0;
        });
        new_button.onclick = function(){
            new_eBook.style.opacity = 0;
            new_eBook.style.height = 0;
            new_all.style.opacity = 1;
            new_all.style.height = '420px';
        }
    
        new_eBook.style.opacity = 1;
        new_eBook.style.height = '420px';
    }

    best_fade();
}