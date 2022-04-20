let images_list = [
    {"url":"https://www.html-code-generator.com/images/slider/1.png"},
    {"url":"https://www.html-code-generator.com/images/slider/2.png"},
    {"url":"https://www.html-code-generator.com/images/slider/3.png"},
    {"url":"https://www.html-code-generator.com/images/slider/4.png"},
    {"url":"https://www.html-code-generator.com/images/slider/5.png"}
];

let slider_id = document.querySelector("#slider-1");


let dots_div = "";
let images_div = "";
for (let i = 0; i < images_list.length; i++) {
    images_div += '<a class="slides animated"'+(i === 0 ? ' style="display:block"':'')+'>'+
                    '<img src="'+images_list[i].url+'" alt="">'+
                 '</a>';
    dots_div += '<span class="slide-dot'+(i === 0 ? ' dot-active':'')+'" data-id="'+i+'"></span>';
}
slider_id.querySelector(".slider-body").innerHTML = images_div;
slider_id.querySelector(".slide-dot-control").innerHTML = dots_div;

let index = 0;

let images = slider_id.querySelectorAll(".slides");
let dots = slider_id.querySelectorAll(".slide-dot");
let prev_button = slider_id.querySelector(".slide-prev");
let next_button = slider_id.querySelector(".slide-next");

function showSlides() {
    if (index > images.length-1) {
        index = 0;
    }
    if (index < 0) {
        index = images.length-1;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
        dots[i].classList.remove("dot-active");
        if (i == index) {
            images[i].style.display = "block";
            dots[i].classList.add("dot-active");
        }
    }
}

prev_button.addEventListener("click", function(event) {
    event.preventDefault();
    index--;
    showSlides();
}, false);

next_button.addEventListener("click", function(event){
    event.preventDefault();
    index++;
    showSlides();
}, false);

function dot_click(event) {
    index = event.target.dataset.id;
    showSlides();
}

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", dot_click, false);
}