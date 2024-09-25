let bannerBoxContent = document.querySelector('.banner_box_content');
let imgBannerCard = document.getElementById('img-banner-card');
let textTitle = document.getElementById('title');
let textSubTitle = document.getElementById('sub_title');

let imgBannerCardList = [
    {id : 1 , srcImg : 'public/img/story-img/1.jpg', name : 'علی', content : 'salam donya'},
    {id : 2 , srcImg : 'public/img/story-img/2.jpg', name : 'رضا', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 3 , srcImg : 'public/img/story-img/3.jpg', name : 'حسن', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 4 , srcImg : 'public/img/story-img/4.jpg' , name : 'حسین', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 5 , srcImg : 'public/img/story-img/5.jpg' , name : 'علی', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 6 , srcImg : 'public/img/story-img/6.jpg' , name : 'علی', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 7 , srcImg : 'public/img/story-img/7.jpg' , name : 'علی', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 8 , srcImg : 'public/img/story-img/8.jpg' , name : 'علی', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 9 , srcImg : 'public/img/story-img/9.jpg' , name : 'علی', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 10 , srcImg : 'public/img/story-img/10.jpg' , name : 'رضا', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 11 , srcImg : 'public/img/story-img/11.jpg' , name : 'رضا', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 12 , srcImg : 'public/img/story-img/12.jpg' , name : 'رضا', content : 'lorem hello world lorem hello world lorem hello world'},
]

let boxBannerCard ;
imgBannerCardList.forEach((item) => {
    // console.log(item.srcImg);
    
    bannerBoxContent.insertAdjacentHTML ('beforeend' , `<div class="col-12 col-sm-6 col-lg-3" data-aos="fade-up"><a href="#" id="${item.id}" data-bs-toggle="modal" data-bs-target="#bannerCard" class="banner_box_item anime_box_item background_color_two text-decoration-none d-flex flex-column rounded-4 overflow-hidden"><div><img src="${item.srcImg}" style="width: 100% !important;" alt=""></div><div class="py-lg-3 py-xl-4 py-sm-4 py-3 container text-light fs-4"><span>${item.name}</span></div></a></div>`)

    boxBannerCard = document.querySelectorAll('.banner_box_item');
    boxBannerCard.forEach((banner) => {
        banner.addEventListener('click' , (event) => {
            saveSrcCartBanner = banner.firstElementChild.firstElementChild.src;
            imgBannerCard.src = saveSrcCartBanner;
            if (+banner.id === item.id) {
                textTitle.innerHTML = item.name;
                textSubTitle.innerHTML = item.content;
            }
        })
    })
})