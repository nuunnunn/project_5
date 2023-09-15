$(function () {
    //텍스트 가져오기
    $.get("./sub_txt/book_review.txt",function(data){
        $('.book_review').html(data)
    });



    //텍스트 펼치기
    $('.book_review .hide_txt').click(function(){
        $('.hidden_box').slideToggle()
    })
});