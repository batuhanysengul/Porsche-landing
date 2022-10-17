let imgTop = document.querySelector('.imgTopPart');
let imgBottom = document.querySelectorAll('.imgBottom');
let date = document.querySelector('.date');
let porsche = document.querySelectorAll('.porsche');
let desc = document.querySelector('.desc');
let header = document.querySelector('.header');

porsche.forEach(function (e, index){
    TweenMax.from(e, 1, {y: -20, opacity: 0, delay: 0.5 + (index*0.2)});
})

imgBottom.forEach(function(e) {
    TweenMax.from(e, 1, {y: 20, opacity: 0});
})

TweenMax.from(imgTop, 1, {y: 20, opacity: 0});
TweenMax.from(desc, 1, {x: -20, opacity: 0, delay: 1.5});
TweenMax.from(date, 1, {x: -20, opacity: 0, delay: 1.8});
TweenMax.from(header, 1, {x: -10, opacity: 0, delay: 1.5});
