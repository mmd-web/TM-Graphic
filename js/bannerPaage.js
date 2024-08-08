let bannerBoxContent = document.querySelector('.banner_box_content');
let imgBannerCard = document.getElementById('img-banner-card');

let imgBannerCardList = [
    {id : 1 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg'},
    {id : 2 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg'},
    {id : 3 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg'},
    {id : 4 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg'},
    {id : 5 , srcImg : 'img/img-browse/Photo & Icon.png'},
    {id : 6 , srcImg : 'img/img-browse/Category Icon-2.png'},
    {id : 7 , srcImg : 'img/img-browse/Category Icon-3.png'},
    {id : 8 , srcImg : 'img/img-browse/Photo & Icon.png'},
    {id : 9 , srcImg : 'img/img-browse/Photo & Icon.png'},
    {id : 10 , srcImg : 'img/img-browse/Category Icon-2.png'},
    {id : 11 , srcImg : 'img/img-browse/Category Icon-3.png'},
    {id : 12 , srcImg : 'img/img-browse/Photo & Icon.png'},
    {id : 13 , srcImg : 'img/img-browse/Photo & Icon.png'},
    {id : 14 , srcImg : 'img/img-browse/Category Icon-2.png'},
    {id : 15 , srcImg : 'img/img-browse/Category Icon-3.png'},
    {id : 16 , srcImg : 'img/img-browse/Photo & Icon.png'},
    {id : 17 , srcImg : 'img/img-browse/Photo & Icon.png'},
    {id : 18 , srcImg : 'img/img-browse/Category Icon-2.png'},
    {id : 19, srcImg : 'img/img-browse/Category Icon-3.png'},
    {id : 20 , srcImg : 'img/img-browse/Photo & Icon.png'}
]

let boxBannerCard ;
imgBannerCardList.forEach((item) => {
    // console.log(item.srcImg);
    
    bannerBoxContent.insertAdjacentHTML ('beforeend' , `<div class="col-12 col-sm-6 col-lg-3"><a href="#" id="banner_box_item" data-bs-toggle="modal" data-bs-target="#bannerCard" class="anime_box_item background_color_two text-decoration-none d-flex flex-column rounded-4 overflow-hidden"><div><img src="${item.srcImg}" style="width: 100% !important;" alt=""></div><div class="py-lg-3 py-xl-4 py-sm-4 py-3 container text-light fs-4"><span>Art</span></div></a></div>`)

    boxBannerCard = document.querySelectorAll('#banner_box_item');
    boxBannerCard.forEach((banner) => {
        banner.addEventListener('click' , (event) => {
            // imgVisitingCard.src = event.target.firstElementChild
            saveSrcCartBanner = banner.firstElementChild.firstElementChild.src;
            imgBannerCard.src = saveSrcCartBanner;
        })
    })
})