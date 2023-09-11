//클릭 횟수 변수
let td_count = 0, best_count = 0, s5_count = 0, s6_count = 0, s7_count = 0;
let tr;

function animate(box, slide, count){    
    //너비에 클릭 횟수 곱함
    tr = box.outerWidth(true) * count;
    // console.log(tr)
    //이미지가 끝까지 오면 처음으로 돌아감
    // if (tr >= end) {
    //     tr = end - tr;  
    // }
    // if(tr >= end - tr/5){
    //     td_next.style.display = 'none';
    // }
    // if(tr == 0){
    //     td_next.style.display = 'block';
    // }
    // console.log(end)
    
    const bSlide_effet = { transform: `translate(-${tr}px,0)` };
    const bSlide_time = { duration: 1000, iterations: 1, fill: 'forwards'};
    slide.animate(bSlide_effet, bSlide_time);
}




const td_next = document.getElementsByClassName('td_next')[0];
const td_prev = document.getElementsByClassName('td_prev')[0];
const today_slide = document.getElementsByClassName('today_slide')[0];

td_next.addEventListener('click', function () {
    td_prev.style.display = 'block';

    td_count++;
    //next 버튼 사라짐
    if(td_count > 5){
        td_next.style.opacity = 0;
        td_prev.addEventListener('click', function () {
            td_next.style.opacity = 1;
        })
    }

    animate($('.td_box'),today_slide,td_count);
});

td_prev.addEventListener('click', function () {
    td_count--;
    //prev 버튼 사라짐
    if(td_count < 1){
        td_prev.style.opacity = 0;
        td_next.addEventListener('click', function () {
            td_prev.style.opacity = 1;
        })
    }     

    animate($('.td_box'),today_slide,td_count);
});




const best_prev = document.getElementsByClassName('best_prev')[0];
const best_next = document.getElementsByClassName('best_next')[0];
const best_slide = document.getElementsByClassName('best_slide')[0];

best_next.addEventListener('click', function () {
    best_prev.style.display = 'block';
    
    best_count++;
    if(best_count > 2){
        best_next.style.opacity = 0;
        best_prev.addEventListener('click', function () {
            best_next.style.opacity = 1;
        })
    }

    animate($('.best_box'),best_slide,best_count);
});

best_prev.addEventListener('click', function () {
    best_count--;   
    if(best_count < 1){
        best_prev.style.opacity = 0;
        best_next.addEventListener('click', function () {
            best_prev.style.opacity = 1;
        })
    }       

    animate($('.best_box'),best_slide,best_count);
});




const s5_prev = document.getElementsByClassName('s5_prev')[0];
const s5_next = document.getElementsByClassName('s5_next')[0];
const s5_slide = document.getElementsByClassName('s5_slide')[0];

s5_next.addEventListener('click', function () {
    s5_prev.style.display = 'block';

    s5_count++;
    if(s5_count > 4){
        s5_next.style.opacity = 0;
        s5_prev.addEventListener('click', function () {
            s5_next.style.opacity = 1;
        })
    }

    animate($('.s5_box'),s5_slide,s5_count);
});

s5_prev.addEventListener('click', function () {
    s5_count--;     
    if(s5_count < 1){
        s5_prev.style.opacity = 0;
        s5_next.addEventListener('click', function () {
            s5_prev.style.opacity = 1;
        })
    }       

    animate($('.s5_box'),s5_slide,s5_count);
});




const s6_prev = document.getElementsByClassName('s6_prev')[0];
const s6_next = document.getElementsByClassName('s6_next')[0];
const art_slide = document.getElementsByClassName('art_slide')[0];

s6_next.addEventListener('click', function () {
    s6_prev.style.display = 'block';

    s6_count++;
    if(s6_count > 3){
        s6_next.style.opacity = 0;
        s6_prev.addEventListener('click', function () {
            s6_next.style.opacity = 1;
        })
    }
    
    animate($('.art_box'),art_slide,s6_count);
});

s6_prev.addEventListener('click', function () {
    s6_count--;     
    if(s6_count < 1){
        s6_prev.style.opacity = 0;
        s6_next.addEventListener('click', function () {
            s6_prev.style.opacity = 1;
        })
    }       
    
    animate($('.art_box'),art_slide,s6_count);
});



function next_s7(){
    $('.s7_prev').css('opacity',0);
    $('.s7_next').css('opacity',0);

    $('.s7_wrap').stop().animate({marginLeft: '-100%'},1000,function(){
        $('.s7_back').eq(0).appendTo('.s7_wrap');
        $('.s7_wrap').css({marginLeft: '0%'});
        $('.s7_prev').css('opacity',1);
        $('.s7_next').css('opacity',1);
    })
}

$('.s7_prev').click(function(){
    $('.s7_prev').css('opacity',0);
    $('.s7_next').css('opacity',0);

    $('.s7_back:last').prependTo('.s7_wrap');
    $('.s7_wrap').css({marginLeft: '-100%'});
    $('.s7_wrap').animate({marginLeft: 0},1000,function(){
        $('.s7_prev').css('opacity',1);
        $('.s7_next').css('opacity',1);
    });
});

$('.s7_next').click(function(){
    next_s7();
})