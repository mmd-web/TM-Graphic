let bannerBoxContent = document.querySelector('.banner_box_content');
let imgBannerCard = document.getElementById('img-banner-card');
let textTitle = document.getElementById('title');
let textSubTitle = document.getElementById('sub_title');

let imgBannerCardList = [
    {id : 1 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg', name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 2 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg', name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 3 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg', name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 4 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 5 , srcImg : 'img/flat-design-teacher-s-day-template_23-2150254244.jpg' , name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 6 , srcImg : 'img/flat-design-teacher-s-day-template_23-2150254244.jpg' , name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 7 , srcImg : 'img/flat-design-teacher-s-day-template_23-2150254244.jpg' , name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 8 , srcImg : 'img/flat-design-teacher-s-day-template_23-2150254244.jpg' , name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 9 , srcImg : 'img/flat-design-teacher-s-day-template_23-2150254244.jpg' , name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 10 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 11 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 12 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 13 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 14 , srcImg : 'img/flat-design-teacher-s-day-template_23-2150254244.jpg' , name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 15 , srcImg : 'img/flat-design-teacher-s-day-template_23-2150254244.jpg' , name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 16 , srcImg : 'img/flat-design-teacher-s-day-template_23-2150254244.jpg' , name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 17 , srcImg : 'img/flat-design-teacher-s-day-template_23-2150254244.jpg' , name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 18 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 19, srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 20 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'}
]

let boxBannerCard ;
imgBannerCardList.forEach((item) => {
    // console.log(item.srcImg);
    
    bannerBoxContent.insertAdjacentHTML ('beforeend' , `<div class="col-12 col-sm-6 col-lg-3" data-aos="fade-up"><a href="#" id="banner_box_item" data-bs-toggle="modal" data-bs-target="#bannerCard" class="anime_box_item background_color_two text-decoration-none d-flex flex-column rounded-4 overflow-hidden"><div><img src="${item.srcImg}" style="width: 100% !important;" alt=""></div><div class="py-lg-3 py-xl-4 py-sm-4 py-3 container text-light fs-4"><span>${item.name}</span></div></a></div>`)

    boxBannerCard = document.querySelectorAll('#banner_box_item');
    boxBannerCard.forEach((banner) => {
        banner.addEventListener('click' , (event) => {
            // imgVisitingCard.src = event.target.firstElementChild
            saveSrcCartBanner = banner.firstElementChild.firstElementChild.src;
            imgBannerCard.src = saveSrcCartBanner;
            textTitle.innerHTML = item.name;
            textSubTitle.innerHTML = item.content
        })
    })
})