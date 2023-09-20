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
        }
    });


    
    $('.go_popup').click(function(){
        $('.preview').fadeIn();
    });
    $('.go_page').click(function(){
        $('.preview').fadeOut();
    });
});       




$('.pre_right').find('a').click(function(){
    for(let i = 0; i < 1; i++){
        $(this).addClass('ch_list').siblings().removeClass('ch_list');
    }
});
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


function do_scroll(){
    $('.scroll').fadeOut();
}
setTimeout(do_scroll,5000);




$('.red').hover(function(){
    let idx = $(this).index();
    $(this).css('color','orangered');
    $(this).prevAll().css('color','orangered');

},function(){
    $(this).css('color','#e7e9eb');
    $(this).prevAll().css('color','#e7e9eb');
});