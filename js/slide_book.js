//클릭 횟수 변수
let td_count = 0, now_count = 0, s5_count = 0, s6_count = 0, s7_count = 0;
let tr;

function animate(box, slide, count, end){    
    //너비에 클릭 횟수 곱함
    tr = box.outerWidth(true) * count;
    console.log(tr)
    // 이미지가 끝까지 오면 처음으로 돌아감
    if (tr >= end) {
        tr = end - tr;  
    }
    
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
        td_next.style.display = 'none';
        td_prev.addEventListener('click', function () {
            td_next.style.display = 'block';
        })
    }

    animate($('.td_box'), today_slide, td_count, 1178);
});

td_prev.addEventListener('click', function () {
    td_count--;
    //prev 버튼 사라짐
    if(td_count < 1){
        td_prev.style.display = 'none';
        td_next.addEventListener('click', function () {
            td_prev.style.display = 'block';
        })
    }     

    animate($('.td_box'), today_slide, td_count, 1178);
});




const now_prev = document.getElementsByClassName('now_prev')[0];
const now_next = document.getElementsByClassName('now_next')[0];
const now_slide = document.getElementsByClassName('now_slide')[0];

now_next.addEventListener('click', function () {
    now_prev.style.display = 'block';
    
    now_count++;
    if(now_count > 2){
        now_next.style.display = 'none';
        now_prev.addEventListener('click', function () {
            now_next.style.display = 'block';
        })
    }

    animate($('.now_box'), now_slide, now_count, 1195);
});

now_prev.addEventListener('click', function () {
    now_count--;   
    if(now_count < 1){
        now_prev.style.display = 'none';
        now_next.addEventListener('click', function () {
            now_prev.style.display = 'block';
        })
    }       

    animate($('.now_box'), now_slide, now_count, 1195);
});




const s5_prev = document.getElementsByClassName('s5_prev')[0];
const s5_next = document.getElementsByClassName('s5_next')[0];
const s5_slide = document.querySelectorAll('.s5_slide');

s5_next.addEventListener('click', function () {
    s5_prev.style.display = 'block';

    s5_count++;
    if(s5_count > 4){
        s5_next.style.display = 'none';
        s5_prev.addEventListener('click', function () {
            s5_next.style.display = 'block';
        })
    }

    s5_slide.forEach((slide)=>{
        animate($('.s5_box'), slide, s5_count, 1198);
    })

    // animate($('.s5_box'), s5_slide, s5_count, 1198);
});

s5_prev.addEventListener('click', function () {
    s5_count--;     
    if(s5_count < 1){
        s5_prev.style.display = 'none';
        s5_next.addEventListener('click', function () {
            s5_prev.style.display = 'block';
        })
    }       

    s5_slide.forEach((slide)=>{
        animate($('.s5_box'), slide, s5_count, 1198);
    })

    // animate($('.s5_box'), s5_slide, s5_count, 1198);
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