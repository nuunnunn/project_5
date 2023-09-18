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
    for(let i = 0; i < $('.hide_txt').length-1; i++){
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
    })
});