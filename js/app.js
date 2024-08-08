let $ = document;

let imgBox = $.querySelectorAll ('.img_one');
let imgMainModal = $.getElementById('img_main_modal');
let imgLastModal = $.querySelectorAll('.img_last');
let imgBoxLastModal = $.querySelector('.box_img_last_modal');
let textBoxImgModal = $.querySelector('.text_box_img_modal');

// let boxVisitingCard = $.querySelectorAll('#box-visiting-card');
let imgVisitingCard = $.getElementById('img-visiting-card');
// let boxBannerCard = $.querySelectorAll('#banner_box_item');
let imgBannerCard = $.getElementById('img-banner-card');

let contentBoxVisitCarts = $.querySelector ('.content_box_visit_carts');

let subTitleModla = $.querySelector('.sub_title_modla');
let titleModla = $.querySelector('.title_modla');

let saveSrcCartBanner ;

let imgTrandingList = {
    one : [
        {id : 1 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg'},
        {id : 2 , srcImg : 'img/flat-design-teacher-s-day-template_23-2150254244.jpg'},
        {id : 3 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg'},
    ],
    two : [
        {id : 4 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg'},
        {id : 5 , srcImg : 'img/flat-design-teacher-s-day-template_23-2150254244.jpg'},
        {id : 6 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg'},
    ],
    three : [
        {id : 7 , srcImg : 'img/flat-design-teacher-s-day-template_23-2150254244.jpg'},
        {id : 8 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg'},
        {id : 9 , srcImg : 'img/flat-design-teacher-s-day-template_23-2150254244.jpg'},
    ],
}

let imgVisitingCardList = [
    {id : 1, srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , title : 'mahdi abbasi' , subTitle : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?'},
    {id : 2, srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , title : 'ali abbasi' , subTitle : 'Lorem ipsum dolor sit'},
    {id : 3, srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , title : 'reza abbasi' , subTitle : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?'},
    {id : 4, srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , title : 'alireza abbasi' , subTitle : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?'},
    {id : 5, srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , title : 'adfd abbasi' , subTitle : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?'},
    {id : 6, srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , title : 'mxcvfi abbasi' , subTitle : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?'},
    {id : 7, srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , title : 'mah]gg abbasi' , subTitle : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?'},
    {id : 8, srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , title : 'mahdb[ki abbasi' , subTitle : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?'},
    {id : 9, srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , title : 'mahdskidfgi abbasi' , subTitle : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?'},
    {id : 10, srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , title : 'mahdiuiul abbasi' , subTitle : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?'},
    {id : 11, srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , title : 'mahdxcsi abbasi' , subTitle : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?'},
    {id : 12, srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , title : 'mahddfdfi abbasi' , subTitle : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?'}
]

let boxVisitingCard ;
let saveSrcCartVisitImg ;
let saveTitle ;
imgVisitingCardList.forEach((item) => {
    contentBoxVisitCarts.insertAdjacentHTML ('beforeend' , `<div class="col-lg-3 col-sm-6 col-12" data-aos="fade-up"><a href="#" id="${item.id}" data-bs-toggle="modal" data-bs-target="#visitingCard" class="box-visiting-card text-decoration-none anime_box_item position-relative w-100 h-100 d-flex flex-lg-column flex-row justify-content-lg-center justify-content-start align-items-center row-gap-lg-4 column-gap-3 text-lg-center text-start background_color_two py-4 px-3 rounded-4"><div class="img_box_size_card_top_creators"><img src="${item.srcImg}" class="img_size_card_top_creators" alt=""></div><div class=""><span class="text-light fs_creators_title">Keepitreal</span><span class="text-light-50 d-flex fs_creators_subtitle flex-row column-gap-2 mt-1">TotalSalesL: <p class="text-light mb-0">34.53 ETH</p> </span></div></a></div>`);

    boxVisitingCard = $.querySelectorAll('.box-visiting-card');
    boxVisitingCard.forEach((imgBox) => {
        imgBox.addEventListener('click' , (event) => {
            // imgVisitingCard.src = event.target.firstElementChild
            saveSrcCartVisitImg = imgBox.firstElementChild.firstElementChild.src;
            imgVisitingCard.src = saveSrcCartVisitImg;
            if (item.id === +imgBox.id) {
                titleModla.innerHTML = item.title;
                subTitleModla.innerHTML = item.subTitle;
            }
        })
    })
})

let textImgTrandingList = {
    one : {txt : 'lorem text lorem text lorem text lorem text lorem text lorem text lorem text lorem text'},
    two : {txt : 'lorem text lorem text lorem text lorem text lorem text lorem text lorem text lorem text'},
    three : {txt : 'lorem text lorem text lorem text lorem text lorem text lorem text lorem text lorem text'},
}

let saveSrcLastImg ;
imgBox.forEach((box) => {
    box.addEventListener('click' , (event) => {
        if (event.target.id === 'one') {
            let saveSrcImgMain = imgTrandingList.one.filter((src) => {
                return src.srcImg === 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg';
            })

            textBoxImgModal.innerHTML = '';
            textBoxImgModal.insertAdjacentHTML('beforeend' , `<span>${textImgTrandingList.one.txt}</span>`);

            imgBoxLastModal.innerHTML = '';
            imgTrandingList.one.forEach((item) => {
                imgBoxLastModal.insertAdjacentHTML('beforeend' , `<div class=""><img class="img_last" src="${item.srcImg}" width="70" alt=""></div>`);
            })
            clickSrc()
            imgMainModal.src = saveSrcImgMain[0].srcImg;
        }
        if (event.target.id === 'two') {
            let saveSrcImgMain = imgTrandingList.two.filter((src) => {
                return src.srcImg === 'img/img-trending/Primary Photo Placeholder-1.png';
            })

            textBoxImgModal.innerHTML = '';
            textBoxImgModal.insertAdjacentHTML('beforeend' , `<span>${textImgTrandingList.one.txt}</span>`);

            imgBoxLastModal.innerHTML = '';
            imgTrandingList.two.forEach((item) => {
                imgBoxLastModal.insertAdjacentHTML('beforeend' , `<div class=""><img class="img_last" src="${item.srcImg}" width="70" alt=""></div>`);
            })
            clickSrc()
            imgMainModal.src = saveSrcImgMain[0].srcImg;
        }
        if (event.target.id === 'three') {
            let saveSrcImgMain = imgTrandingList.three.filter((src) => {
                return src.srcImg === 'img/img-trending/Primary Photo Placeholder-2.png';
            })

            textBoxImgModal.innerHTML = '';
            textBoxImgModal.insertAdjacentHTML('beforeend' , `<span>${textImgTrandingList.one.txt}</span>`);

            imgBoxLastModal.innerHTML = '';
            imgTrandingList.three.forEach((item) => {
                imgBoxLastModal.insertAdjacentHTML('beforeend' , `<div class=""><img class="img_last" src="${item.srcImg}" width="70" alt=""></div>`);
            })
            clickSrc()
            imgMainModal.src = saveSrcImgMain[0].srcImg;
        }
    })
})

function clickSrc () {
    let lastImg = $.querySelectorAll('.img_last');
    lastImg.forEach((item) => {
        item.addEventListener('click' ,(event) => {
            saveSrcLastImg = event.target.src;
            imgMainModal.src = saveSrcLastImg;
        })
    })
}

let imgBannerCardList = [
    {id : 1 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg', name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 2 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg', name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 3 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg', name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'},
    {id : 4 , srcImg : 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' , name : 'hello', content : 'lorem hello world lorem hello world lorem hello world'}
]

let bannerBoxContent = document.querySelector('.banner_box_content');
let textTitle = document.getElementById('title_banner');
let textSubTitle = document.getElementById('sub_title_banner');
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

// boxBannerCard.forEach((item) => {
//     item.addEventListener('click' , (event) => {
//         // imgVisitingCard.src = event.target.firstElementChild
//         saveSrcCartBanner = item.firstElementChild.firstElementChild.src;
//         imgBannerCard.src = saveSrcCartBanner;
//     })
// })