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

//현재 항목 표시
if($('.best').css('color','rgb(204, 204, 204)')){
    $('.all').click(function(){
        $(this).css('color','#ccc').siblings().css('color','#111')
    });

    $('.kr').click(function(){
        $(this).css('color','#ccc').siblings().css('color','#111')
    });

    $('.foreign').click(function(){
        $(this).css('color','#ccc').siblings().css('color','#111')
    });

    $('.eBook').click(function(){
        $(this).css('color','#ccc').siblings().css('color','#111')
    });


    $('.new').click(function(){
        $(this).css('color','#ccc').siblings().css('color','#111');
        $('.all').css('color','#ccc').siblings().css('color','#111');
    });

    $('.best').click(function(){
        $(this).css('color','#ccc').siblings().css('color','#111');
        $('.all').css('color','#ccc').siblings().css('color','#111');
    });
}



//베스트가 기본 실행
function basic() {

    //나타남
    best_box.style.height = '425px';
    best_box.style.opacity = 1;
    all_wrap.style.height = '425px';
    all_wrap.style.opacity = 1;
    best_button.style.color = '#ccc';
    all.style.color = '#ccc';

    //사라짐
    new_box.style.height = '0%';
    new_box.style.opacity = 0;
    new_all.style.height = '0px';
    new_all.style.opacity = 0;



    all.onclick = function () {
        //모든 섹션 사라짐
        fade_wrap.forEach((fade) => {
            console.log(fade)
            fade.style.opacity = 0;
            fade.style.height = 0;       
        });

        //해당 섹션만 나옴
        all_wrap.style.opacity = 1;
        all_wrap.style.height = '425px';
    }

    kr.onclick = function () {
        fade_wrap.forEach((fade) => {
            fade.style.opacity = 0;
            fade.style.height = 0;           
        });
        best_button.onclick = function () {
            kr_wrap.style.opacity = 0;
            kr_wrap.style.height = 0;
            all_wrap.style.opacity = 1;
            all_wrap.style.height = '425px';
        }

        kr_wrap.style.opacity = 1;
        kr_wrap.style.height = '425px';
    }

    foreign.onclick = function () {
        fade_wrap.forEach((fade) => {
            fade.style.opacity = 0;
            fade.style.height = 0;
        });
        best_button.onclick = function () {
            foreign_wrap.style.opacity = 0;
            foreign_wrap.style.height = 0;
            all_wrap.style.opacity = 1;
            all_wrap.style.height = '425px';
        }

        foreign_wrap.style.opacity = 1;
        foreign_wrap.style.height = '425px';
    }

    eBook.onclick = function () {
        fade_wrap.forEach((fade) => {
            fade.style.opacity = 0;
            fade.style.height = 0;
        });
        best_button.onclick = function () {
            eBook_wrap.style.opacity = 0;
            eBook_wrap.style.height = 0;
            all_wrap.style.opacity = 1;
            all_wrap.style.height = '425px';
        }

        eBook_wrap.style.opacity = 1;
        eBook_wrap.style.height = '425px';
    }
}

$(function () {
    //첫 로드 시 실행
    basic();
});

function best_fade() {

    best_button.onclick = function () {
        //베스트 누르면 실행됨
        basic();
        //새로나온 작품 누르면 실행됨
        new_fade();
    }
}
best_fade();


const new_button = document.getElementsByClassName('new')[0];
const new_box = document.getElementsByClassName('new_box')[0];

const new_all = document.getElementsByClassName('new_all')[0];
const new_kr = document.getElementsByClassName('new_kr')[0];
const new_foreign = document.getElementsByClassName('new_foreign')[0];
const new_eBook = document.getElementsByClassName('new_eBook')[0];

//새로나온 작품 누르면 실행
function new_fade() {
    new_button.onclick = function () {

        new_box.style.height = '425px';
        new_box.style.opacity = 1;
        new_all.style.height = '425px';
        new_all.style.opacity = 1;

        best_box.style.height = '0%';
        best_box.style.opacity = 0;
        all_wrap.style.height = '0px';
        all_wrap.style.opacity = 0;



        all.onclick = function () {
            fade_wrap.forEach((fade) => {
                console.log(fade)
                fade.style.opacity = 0;
                fade.style.height = 0;
            });

            new_all.style.opacity = 1;
            new_all.style.height = '425px';
        }

        kr.onclick = function () {
            fade_wrap.forEach((fade) => {
                fade.style.opacity = 0;
                fade.style.height = 0;
            });
            new_button.onclick = function () {
                new_kr.style.opacity = 0;
                new_kr.style.height = 0;
                new_all.style.opacity = 1;
                new_all.style.height = '425px';
            }

            new_kr.style.opacity = 1;
            new_kr.style.height = '425px';
        }

        foreign.onclick = function () {
            fade_wrap.forEach((fade) => {
                fade.style.opacity = 0;
                fade.style.height = 0;
            });
            new_button.onclick = function () {
                new_foreign.style.opacity = 0;
                new_foreign.style.height = 0;
                new_all.style.opacity = 1;
                new_all.style.height = '425px';
            }

            new_foreign.style.opacity = 1;
            new_foreign.style.height = '425px';
        }

        eBook.onclick = function () {
            fade_wrap.forEach((fade) => {
                fade.style.opacity = 0;
                fade.style.height = 0;
            });
            new_button.onclick = function () {
                new_eBook.style.opacity = 0;
                new_eBook.style.height = 0;
                new_all.style.opacity = 1;
                new_all.style.height = '425px';
            }

            new_eBook.style.opacity = 1;
            new_eBook.style.height = '425px';
        }

        best_fade();
    }
}
new_fade();
