//새로
// var search = ["풀업", "눈부신 안부", "탱크", '별일은 없고요?', '아주 희미한 빛으로도', '구의 증명', '너무나 많은 여름이',
// '소설 보다 : 가을 2023', '칵테일, 러브, 좀비', '눈이 부신날', '불특정 다수', '습기', '하늘과 바람과 별과 인간',
// '빛과 물질에 관한 이론', '당신의 인생이 왜 힘들지 않아야 한다고 생각하십니까', '아메리칸 프로메테우스'];

//section2
var search = ["풀업", '너무나 많은 여름이', "탱크", "눈부신 안부", '바다가 들리는 편의점2', '회색 인간'
,'낙원은 창백한 손으로' , '코리아이', '재와 물거품', '눈에 갇힌 외딴 산장에서', '칵테일, 러브, 좀비', 
'습기'];

for (var j = 0; j < search.length; j++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
        data: { query: search[j] },
        async: false
    })
        .done(function (data) {
            console.log(data)

            $('.td_box').eq(j).find('a').append('<img src = "' + data.documents[0].thumbnail + '"/>');
            $('.td_box').eq(j).children('h4').text(data.documents[0].title);
            $('.td_box').eq(j).children('p').text(data.documents[0].authors);

            // var boxs = document.getElementsByClassName('box' + j);
            // for (var i = 0; i < boxs.length; i++) {

                // $('.art_box > a').append('<img src = "' + data.documents[0].thumbnail + '"/>');
            //     $('.box' + j).eq(i).append('<h3>' + data.documents[i].title + '</h3>');
            //     $('.box' + j).eq(i).append('<h6>' + data.documents[i].authors + '</h6>');

            //     var str = data.documents[i].contents;
            //     var str2 = str.substring(0, 60);
            //     $('.box' + j).eq(i).append('<p>' + str2 + '</p>');
            //     $('.box' + j).eq(i).append('<button>' + 'click' + '</button>')
            // }
        });
}




//section6
var search6 = ['살롱 드 경성', '살아남은 그림들', '이중섭, 편지화', '박수근 : 봄을 기다리는 나목', '어디서 무엇이 되어 다시 만나랴', '이중섭, 그 사람'];

for (var j = 0; j < search.length; j++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
        data: { query: search6[j] },
        async: false
    })
        .done(function (data) {
            $('.art_box').eq(j).find('a').append('<img src = "' + data.documents[0].thumbnail + '"/>');
            $('.art_box').eq(j).children('h4').text(data.documents[0].title);
            $('.art_box').eq(j).children('p').text(data.documents[0].authors);
        });
}




//section7
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
    data: { query: '마지막 이야기들' },
    async: false
})
    .done(function (data) {
        $('.s7_back').eq(0).find('.front_box a').append('<img src = "' + data.documents[1].thumbnail + '"/>');
    });


var search7 = ["식물적 낙관", "최선을 다하면 죽는다"];
for (var j = 0; j < search.length; j++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
        data: { query: search7[j] },
        async: false
    })
        .done(function (data) {
            $('.s7_back').eq(j+1).find('.front_box a').append('<img src = "' + data.documents[0].thumbnail + '"/>');
        });
}