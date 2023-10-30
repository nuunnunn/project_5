let search = ['달러구트 꿈 백화점','달러구트 꿈 백화점2'];

for (var j = 0; j < search.length; j++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
        data: { query: search[j] },
        async: false
    })
        .done(function (data) {
            $('.series_book').eq(j).children('a').append('<img src = "' + data.documents[0].thumbnail + '"/>');
            $('.profile_book').eq(j).children('a').append('<img src = "' + data.documents[0].thumbnail + '"/>');
            $('.profile_book').eq(j).children('p').eq(0).append(data.documents[0].title);
        });
}




let search2 = ['크리스마스 타일','환상서점','외사랑','외모 대여점','수상한 중고상점',
'위저드 베이커리','프로젝트 헤일메리','아주 오랜만에 행복하다는 느낌',
'너를 빛나게 할 일들이 기다리고 있어','시선으로부터',
'이토록 평범한 미래','혼자서 종이우산을 쓰고 가다','안젤리크',
'세상의 마지막 기차역', '꽃을 보듯 너를 본다','책들의 부엌','어느 날, 내 죽음에 네가 들어왔다',
'하쿠다 사진관','여기는 커스터드, 특별한 도시락을 팝니다','수상한 목욕탕'];

for (var j = 0; j < search2.length; j++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        headers: { Authorization: "KakaoAK 0294a1ce618b1232d015ce6ca5aef7b7" },
        data: { query: search2[j] },
        async: false
    })
        .done(function (data) {
            $('.pur_book').eq(j).children('a').append('<img src = "' + data.documents[0].thumbnail + '"/>');
            $('.pur_book').eq(j).children('h5').eq(0).append(data.documents[0].title);
            $('.pur_book').eq(j).children('p').eq(0).append(data.documents[0].authors);
        });
}