//클릭 횟수 변수
let count = 0;
let tr;

function animate(box,slide){    
    //너비에 클릭 횟수 곱함
    tr = box.outerWidth(true) * count;

    //이미지가 끝까지 오면 처음으로 돌아감
    if (tr >= 2358.564) {
        tr = 0;
    }
    console.log(tr)
    
    const bSlide_effet = { transform: `translate(-${tr}px,0)` };
    const bSlide_time = { duration: 1000, iterations: 1, fill: 'forwards' };
    slide.animate(bSlide_effet, bSlide_time);
}




const td_next = document.getElementsByClassName('td_next')[0];
const td_prev = document.getElementsByClassName('td_prev')[0];
const today_slide = document.getElementsByClassName('today_slide')[0];

td_next.addEventListener('click', function () {
    td_prev.style.display = 'block';
    count++;
    animate($('.td_box'),today_slide);
});

td_prev.addEventListener('click', function () {
    count--;     
    animate($('.td_box'),today_slide);
});






const best_prev = document.getElementsByClassName('best_prev')[0];
const best_next = document.getElementsByClassName('best_next')[0];
const best_slide = document.getElementsByClassName('best_slide')[0];

best_next.addEventListener('click', function () {
    best_prev.style.display = 'block';
    count++;
    animate($('.best_box'),best_slide);
});

best_prev.addEventListener('click', function () {
    count--;     
    animate($('.best_box'),best_slide);
});






const s5_prev = document.getElementsByClassName('s5_prev')[0];
const s5_next = document.getElementsByClassName('s5_next')[0];
const s5_slide = document.getElementsByClassName('s5_slide')[0];

s5_next.addEventListener('click', function () {
    s5_prev.style.display = 'block';
    count++;
    animate($('.s5_box'),s5_slide);
});

s5_prev.addEventListener('click', function () {
    count--;     
    animate($('.s5_box'),s5_slide);
});