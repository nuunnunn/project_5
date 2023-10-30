$(function () {
    //텍스트 가져오기
    $.get("./sub_txt/book_review.txt",function(data){
        $('.txt_box').html(data)
    });

    $.get("./sub_txt/introduce.txt",function(data){
        $('.introduce').children('p').eq(2).html(data)
    });

    $.get("./sub_txt/profile.txt",function(data){
        $('.profile').find('.visible_box').html(data)
    });

    $.get("./sub_txt/list.txt",function(data){
        $('.list').children('div').html(data)
    });

    $.get("./sub_txt/review.txt",function(data){
        $('.review_txtBox').html(data)
    });

    $.get("./sub_txt/preview.txt",function(data){
        $('#prologue').children('p').html(data)
    });



    //텍스트 펼치기
    $('.hide_txt').click(function () {        

        if ($(this).parent().hasClass('list') || $(this).parent().hasClass('book_review')) {
            $(this).prev().find('.hidden_box').slideToggle();
            
            if ($(this).children('span').text() == '펼쳐보기') {
                $(this).children('span').text('접기');
                $(this).children('i').removeClass('fa-angle-down').addClass('fa-angle-up');
                
            } else {
                $(this).children('span').text('펼쳐보기');
                $(this).children('i').removeClass('fa-angle-up').addClass('fa-angle-down');
            }
        }else if($(this).children('span').text()=='10'){
            $(this).prev().find('.hidden_box').slideDown();

        }
        else if($(this).children('span').text()=='구매자 표시 기준은 무엇인가요?'){
            $(this).siblings('.hidden_box').slideToggle();

            if($(this).children('i').hasClass('fa-angle-down')){
                $(this).children('i').removeClass('fa-angle-down').addClass('fa-angle-up');
            }else {
                $(this).children('i').removeClass('fa-angle-up').addClass('fa-angle-down');
            }
        }else if($(this).children('span').text()=='리뷰 작성 유의사항'){
            $(this).parent().siblings('.hidden_box').slideToggle();
        }
    });


    //책 미리보기
    $('.go_popup').click(function(){
        $('.preview').fadeIn();
    });
    $('.go_page').click(function(){
        $('.preview').fadeOut();
    });
});       



//책 미리보기에서 구간 이동
$('.pre_right').find('a').click(function(){
    $(this).addClass('ch_list').siblings().removeClass('ch_list');
});


//책 미리보기 폰트 크기 조정
let size = 0.95;
let p = $('#prologue > p');

$('.pre_title th').click(function(){
    let idx = $(this).index();

    if(idx == 0){
        size = 0.95;
        p.css('font-size', '0.95rem');
        $(this).addClass('ch_size').siblings().removeClass('ch_size');
    }else if(idx == 1){
        size -= 0.1;
        p.css('font-size', size + 'rem');
        $(this).addClass('ch_size').siblings().removeClass('ch_size');
    }else{
        size += 0.1;
        p.css('font-size', size + 'rem');
        $(this).addClass('ch_size').siblings().removeClass('ch_size');
    }
});


//미리보기 스크롤 팝업
function do_scroll(){
    $('.scroll').fadeOut();
}
setTimeout(do_scroll,5000);




//이미지 뒷면 보임
$('.turn_img').click(function(){
    $(this).toggleClass('rotate');                                
});




//hover 하면 별점 색 바뀜
$('.red').hover(function(){
    $(this).css('color','orangered');
    $(this).prevAll().css('color','orangered');

},function(){
    $(this).css('color','#e7e9eb');
    $(this).prevAll().css('color','#e7e9eb');
});



//리뷰 작성란 클릭시 confirm
let textarea = document.querySelector('.write textarea');
textarea.onclick = function(){
    confirm('로그인 상태에서 가능합니다. 로그인 페이지로 이동합니다.')
}



//리뷰 남기기 버튼 누르면 경고
let warning = document.querySelector('.star_warning');
let close_warning = document.getElementsByClassName('close_warning')[0];
let input_review = document.getElementsByClassName('input_review')[0];

input_review.onclick = function(){
    warning.style.display = 'flex';
}
close_warning.onclick = function(){
    warning.style.display = 'none';
}