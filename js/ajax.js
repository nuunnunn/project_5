//section2
var search = ["풀업", "탱크", '너무나 많은 여름이', "눈부신 안부", '바다가 들리는 편의점2', '회색 인간'
,'낙원은 창백한 손으로', '칵테일, 러브, 좀비' , '습기', '라스트 젤리 샷', '눈에 갇힌 외딴 산장에서', 
'코리아이'];

for (var j = 0; j < search.length; j++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
        data: { query: search[j] },
        async: false
    })
        .done(function (data) {
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




//section_3
var search2 = ['세이노의 가르침', '해리 포터와 마법사의 돌', '양들의 침묵','H마트에서 울다',
'파친코1', '비가 오면 열리는 상점','눈이 부신날', '역행자 확장판','지구 끝의 온실',
'모든 삶은 흐른다','메리골드 마음 세탁소','불편한 편의점2','해가 지는 곳으로','하늘과 바람과 별과 인간',  '말리의 일곱개의 달',
'참을 수 없는 존재의 가벼움', '별일은 없고요?',  '빛과 물질에 관한 이론'];

for (var j = 0; j < search2.length; j++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
        data: { query: search2[j] },
        async: false
    })
        .done(function (data) {
            $('.now_book').eq(j).children('a').append('<img src = "' + data.documents[0].thumbnail + '"/>');
            $('.now_book').eq(j).children('p').append(j+1)
            $('.now_book').eq(j).children('div').find('a').eq(0).text(data.documents[0].title);
            $('.now_book').eq(j).children('div').find('a').eq(1).text(data.documents[0].authors);            
        });
}




//section4
var search12 = ['여름을 한 입 베어 물었더니','몬스터 차일드','달러구트 꿈 백화점2'];

for (var j = 0; j < search12.length; j++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
        data: { query: search12[j] },
        async: false
    })
        .done(function (data) {
            $('.pick_book').eq(j).children('a').append('<img src = "' + data.documents[0].thumbnail + '"/>');
            $('.pick_box').eq(j).children('p').text(data.documents[0].title);

            var str = data.documents[0].contents;
            if(j == 0){
                var leng = str.substring(0, 60);
            }else if(j == 1){
                var leng = str.substring(0, 18);
            }else{
                $('.pick_box').eq(2).children('h4').append('“왜 저에게서 꿈까지 뺏어가려고 하시나요?”');
            }
            
            $('.pick_box').eq(j).children('h4').append(leng);
        });
}




//best - all
var search14 = ['도시와 그 불확실한 벽','노르웨이의 숲', '어서 오세요, 휴남동 서점입니다',
'너의 목소리를 보여줘','체리새우 : 비밀글입니다','물고기는 존재하지 않는다','홍학의 자리', 
'아버지의 해방일지', '밝은 밤','당신의 인생이 왜 힘들지 않아야 한다고 생각하십니까'];

for (var j = 0; j < search14.length; j++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
        data: { query: search14[j] },
        async: false
    })
        .done(function (data) {
            $('.all_wrap').find('.s5_box').eq(j).children('a').append('<img src = "' + data.documents[0].thumbnail + '"/>');
            $('.all_wrap').find('.s5_box').eq(j).children('h4').eq(0).text(data.documents[0].title);
            $('.all_wrap').find('.s5_box').eq(j).children('p').eq(1).text(data.documents[0].authors);
        });
}




//best - kr
var search3 = ['도시와 그 불확실한 벽','아메리칸 프로메테우스','퓨처 셀프',
'총, 균, 쇠', '아주 희미한 빛으로도', '홍학의 자리', '제노사이드','삼가 이와 같이 아뢰옵니다'
,'당신의 인생이 왜 힘들지 않아야 한다고 생각하십니까','너의 목소리를 보여줘'];

for (var j = 0; j < search3.length; j++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
        data: { query: search3[j] },
        async: false
    })
        .done(function (data) {            
            $('.kr_wrap').find('.s5_box').eq(j).children('a').append('<img src = "' + data.documents[0].thumbnail + '"/>');
            $('.kr_wrap').find('.s5_box').eq(j).children('h4').eq(0).text(data.documents[0].title);
            $('.kr_wrap').find('.s5_box').eq(j).children('p').eq(1).text(data.documents[0].authors);
        });
}


//best - fr
var search4 = ['街とその不確かな壁', '총, 균, 쇠','Crying in H Mart','물고기는 존재하지 않는다', 'Wonder',
'아메리칸 프로메테우스','Elon Musk', '빨강, 파랑, 어쨌든 찬란', '뽀빠이 POPEYE 2023.10','Diary of a Wimpy Kid'];

for (var j = 0; j < search4.length; j++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
        data: { query: search4[j] },
        async: false
    })
        .done(function (data) {
            $('.foreign_wrap').find('.s5_box').eq(j).children('a').append('<img src = "' + data.documents[0].thumbnail + '"/>');
            $('.foreign_wrap').find('.s5_box').eq(j).children('h4').eq(0).text(data.documents[0].title);
            $('.foreign_wrap').find('.s5_box').eq(j).children('p').eq(1).text(data.documents[0].authors);
        });
}

//best - eb
var search5 = ['노르웨이의 숲', '어서 오세요, 휴남동 서점입니다','체리새우 : 비밀글입니다',
'아버지의 해방일지','가짜 노동', '밝은 밤', '사랑의 기술', '이상한 그림', '불특정 다수'];

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
    data: { query: '구의 증명' },
    async: false
})
    .done(function (data) {
        $('.eBook_wrap').find('.s5_box').eq(0).children('a').append('<img src = "' + data.documents[1].thumbnail + '"/>');
        $('.eBook_wrap').find('.s5_box').eq(0).children('h4').eq(0).text(data.documents[1].title);
        $('.eBook_wrap').find('.s5_box').eq(0).children('p').eq(1).text(data.documents[1].authors);
    });

for (var j = 0; j < search5.length; j++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
        data: { query: search5[j] },
        async: false
    })
        .done(function (data) {
            $('.eBook_wrap').find('.s5_box').eq(j+1).children('a').append('<img src = "' + data.documents[0].thumbnail + '"/>');
            $('.eBook_wrap').find('.s5_box').eq(j+1).children('h4').eq(0).text(data.documents[0].title);
            $('.eBook_wrap').find('.s5_box').eq(j+1).children('p').eq(1).text(data.documents[0].authors);
        });
}


//new - all
var search6 = ['작가와 연인들','힘과 쉼', '일만 번의 다이빙','달의 아이', '사랑의 여름',
'나쁜 것이 오지 않기를','말 없는 자들의 목소리', '레이크사이드', 
'잘못 걸려온 전화', '좋은 일이 오려고 그러나 보다'];

for (var j = 0; j < search6.length; j++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
        data: { query: search6[j] },
        async: false
    })
        .done(function (data) {
            $('.new_all').find('.s5_box').eq(j).children('a').append('<img src = "' + data.documents[0].thumbnail + '"/>');
            $('.new_all').find('.s5_box').eq(j).children('h4').eq(0).text(data.documents[0].title);
            $('.new_all').find('.s5_box').eq(j).children('p').eq(1).text(data.documents[0].authors);
        });
}


//new - kr
var search7 = ['작가와 연인들','힘과 쉼', '사랑의 여름','나쁜 것이 오지 않기를', 
'잘못 걸려온 전화','때가 되면 너의 정원에 꽃이 필 거야','사춘기 마음을 통역해 드립니다',
'난 나를 버리지 않아','이것은 라울 뒤피에 관한 이야기', '꽃은 누구에게나 핀다'];

for (var j = 0; j < search7.length; j++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
        data: { query: search7[j] },
        async: false
    })
        .done(function (data) {
            $('.new_kr').find('.s5_box').eq(j).children('a').append('<img src = "' + data.documents[0].thumbnail + '"/>');
            $('.new_kr').find('.s5_box').eq(j).children('h4').eq(0).text(data.documents[0].title);
            $('.new_kr').find('.s5_box').eq(j).children('p').eq(1).text(data.documents[0].authors);
        });
}

//new - fr
var search8 = ['The Midnight Library', 'Yellowface', 'Fourth Wing', 'How Do You Live?', 
'에세이즘','If it\'s Raining in Brazil, Buy Starbucks','How to Be Perfect',
'Numberblocks Annual 2024', 'The 169-storey Treehouse' ];

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
    data: { query: 'Adrift' },
    async: false
})
    .done(function (data) {
        $('.new_foreign').find('.s5_box').eq(0).children('a').append('<img src = "' + data.documents[2].thumbnail + '"/>');
        $('.new_foreign').find('.s5_box').eq(0).children('h4').eq(0).text(data.documents[2].title);
        $('.new_foreign').find('.s5_box').eq(0).children('p').eq(1).text(data.documents[2].authors);
    });

for (var j = 0; j < search8.length; j++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
        data: { query: search8[j] },
        async: false
    })
        .done(function (data) {
            $('.new_foreign').find('.s5_box').eq(j+1).children('a').append('<img src = "' + data.documents[0].thumbnail + '"/>');
            $('.new_foreign').find('.s5_box').eq(j+1).children('h4').eq(0).text(data.documents[0].title);
            $('.new_foreign').find('.s5_box').eq(j+1).children('p').eq(1).text(data.documents[0].authors);
        });
}

//new - eb
var search9 = ['일만 번의 다이빙', '달의 아이', '말 없는 자들의 목소리', 
'레이크사이드','좋은 일이 오려고 그러나 보다', '마시지 않을 수 없는 밤이니까요',
'아침에는 죽음을 생각하는 것이 좋다', '모든 사람에게 사랑받으려고 애쓰지 마세요',
'친밀한 초록','뭐라도 써야 하는 너에게'];

for (var j = 0; j < search9.length; j++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
        data: { query: search9[j] },
        async: false
    })
        .done(function (data) {
            $('.new_eBook').find('.s5_box').eq(j).children('a').append('<img src = "' + data.documents[0].thumbnail + '"/>');
            $('.new_eBook').find('.s5_box').eq(j).children('h4').eq(0).text(data.documents[0].title);
            $('.new_eBook').find('.s5_box').eq(j).children('p').eq(1).text(data.documents[0].authors);
        });
}




//section6
var search10 = ['살롱 드 경성', '살아남은 그림들', '이중섭, 편지화', '박수근 : 봄을 기다리는 나목', '어디서 무엇이 되어 다시 만나랴', '이중섭, 그 사람'];

for (var j = 0; j < search10.length; j++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
        data: { query: search10[j] },
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


var search11 = ["식물적 낙관", "최선을 다하면 죽는다"];
for (var j = 0; j < search11.length; j++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
        data: { query: search11[j] },
        async: false
    })
        .done(function (data) {
            $('.s7_back').eq(j+1).find('.front_box a').append('<img src = "' + data.documents[0].thumbnail + '"/>');
        });
}