//처음 슬라이드 텍스트 나옴
$(function(){
    $('.slide_1 span').css('opacity',1);
    $('.slide_1 h1').css('opacity',1);
    $('.slide_1 p').css('opacity',1);
});

//슬라이드 숫자 변수
let chNum = 1;

//이전 가기 버튼
function prev(){
    //오토 슬라이드 멈춤
    clearInterval(stop)
    //버튼 누르면 숫자 감소
    if(chNum == 1){
        chNum = 15
    }
    chNum--;

    //슬라이드 박스 크기 변함
    $('.slidebox').eq(2).animate({'flex-basis': 0},'slow');
    $('.slidebox:last-of-type').stop().animate({'flex-grow': 1},100,'linear',function(){
        //감소된 숫자 적어줌
        $('#section1 .chNum').text(parseInt(chNum));
        //텍스트 보임
        $(this).children('span').css('opacity',1);
        $(this).children('h1').css('opacity',1);
        $(this).children('p').css('opacity',1);
        
        
    });
    $('.slidebox:first-of-type').animate({'flex-grow': 0,'flex-basis': '45px'},500,'linear');    
    $('.slidebox:last-of-type').prependTo('.slide_banner');
    //텍스트 사라짐
    $('.slidebox').eq(1).children('span').css('opacity', 0);
    $('.slidebox').eq(1).children('h1').css('opacity', 0);
    $('.slidebox').eq(1).children('p').css('opacity', 0);
}

//다음 가기 버튼
function next(){
    //버튼 누르면 숫자 증가
    if(chNum == 14){
        chNum = 0
    }
    chNum++;

    //텍스트 사라짐
    $('.slidebox').children('span').css('opacity',0);
    $('.slidebox').children('h1').css('opacity',0);
    $('.slidebox').children('p').css('opacity',0);

    //슬라이드 박스 크기 변함
    $('.slidebox:first-of-type').stop().animate({'flex-grow': 0,'flex-basis': 0},700);
    $('.slidebox').eq(3).stop().animate({'flex-basis': '45px'},'slow');
    $('.slidebox').eq(1).stop().animate({'flex-grow': 1},700,function(){
        //증가된 숫자 적어줌
        $('#section1 .chNum').text(parseInt(chNum));
        $('.slidebox:first-of-type').appendTo('.slide_banner');
        //텍스트 보임
        $(this).children('span').css('opacity',1);
        $(this).children('h1').css('opacity',1);
        $(this).children('p').css('opacity',1);
        for(let i = 3; i < $('.slidebox').length; i++){
            $('.slidebox').eq(i).css({'flex-grow': 0,'flex-basis': 0});
        }
        
    });
}
var stop = setInterval(next,5000);

// let lastClickTime = 0;

// function handleClick(e) {
//     const currentTime = new Date().getTime();
//     const timeDiff = currentTime - lastClickTime;

//     // 일정 시간(예: 500ms) 이내에 다시 클릭한 경우 이벤트를 무시
//     if (timeDiff < 1000) {
//         e.preventDefault();
//         return;
//     }

//     lastClickTime = currentTime;

//     // 클릭 이벤트에 대한 처리를 여기에 작성하세요.
// }

$('.next').click(function(){next()});
$('.prev').click(function(){prev()});