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



    //텍스트 펼치기
    for(let i = 0; i < $('.hide_txt').length-2; i++){
        $('.hide_txt').eq(i).click(function(){
            $('.hidden_box').eq(i).slideToggle();
            $(this).html(`<p class="hide_txt">접기 <i class="fa-solid fa-angle-up"></i></p>`);
            $('.hide_txt').click(function(){
                $(this).html(`<p class="hide_txt">펼쳐보기 <i class="fa-solid fa-angle-down"></i></p>`);
            })
        })
    }

    $('.hide_txt').eq(2).click(function(){
        $('.hidden_box').eq(2).slideDown();
    });

    $('.DisplayCriteria').children($('.hide_txt')).click(function(){
        $('.hidden_box').eq(3).slideToggle();
        $(this).html(`<p class="hide_txt">구매자 표시 기준은 무엇인가요? <i class="fa-solid fa-angle-up"></i></p>`);
        $('.hide_txt').click(function(){
            $(this).html(`<p class="hide_txt">구매자 표시 기준은 무엇인가요? <i class="fa-solid fa-angle-down"></i></p>`);
        })
    })
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