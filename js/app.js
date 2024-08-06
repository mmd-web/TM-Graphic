let $ = document;

let imgBox = $.querySelectorAll ('.img_one');
let imgMainModal = $.getElementById('img_main_modal');
let imgLastModal = $.querySelectorAll('.img_last');
let imgBoxLastModal = $.querySelector('.box_img_last_modal');
let textBoxImgModal = $.querySelector('.text_box_img_modal');

// let boxVisitingCard = $.querySelectorAll('#box-visiting-card');
let imgVisitingCard = $.getElementById('img-visiting-card');
let boxBannerCard = $.querySelectorAll('#banner_box_item');
let imgBannerCard = $.getElementById('img-banner-card');

let contentBoxVisitCarts = $.querySelector ('.content_box_visit_carts');

let saveSrcCartVisitImg ;
let saveSrcCartBanner ;

let imgTrandingList = {
    one : [
        {id : 1 , srcImg : 'img/img-trending/Primary Photo Placeholder.png'},
        {id : 2 , srcImg : 'img/img-trending/Secondary Photo Placeholder.png'},
        {id : 3 , srcImg : 'img/img-trending/Secondary Photo Placeholder-1.png'},
    ],
    two : [
        {id : 4 , srcImg : 'img/img-trending/Primary Photo Placeholder-1.png'},
        {id : 5 , srcImg : 'img/img-trending/Secondary Photo Placeholder-2.png'},
        {id : 6 , srcImg : 'img/img-trending/Secondary Photo Placeholder-3.png'},
    ],
    three : [
        {id : 7 , srcImg : 'img/img-trending/Primary Photo Placeholder-2.png'},
        {id : 8 , srcImg : 'img/img-trending/Secondary Photo Placeholder-4.png'},
        {id : 9 , srcImg : 'img/img-trending/Secondary Photo Placeholder-5.png'},
    ],
}

let imgVisitingCardList = [
    {id : 1, srcImg : 'img/img-trending/Primary Photo Placeholder.png'},
    {id : 2, srcImg : 'img/img-trending/Primary Photo Placeholder-1.png'},
    {id : 3, srcImg : 'img/img-trending/Primary Photo Placeholder-2.png'},
    {id : 4, srcImg : 'img/img-trending/Primary Photo Placeholder.png'},
    {id : 5, srcImg : 'img/img-trending/Primary Photo Placeholder-1.png'},
    {id : 6, srcImg : 'img/img-trending/Primary Photo Placeholder-2.png'},
    {id : 7, srcImg : 'img/img-trending/Primary Photo Placeholder.png'},
    {id : 8, srcImg : 'img/img-trending/Primary Photo Placeholder-1.png'},
    {id : 9, srcImg : 'img/img-trending/Primary Photo Placeholder-2.png'},
    {id : 10, srcImg : 'img/img-trending/Primary Photo Placeholder.png'},
    {id : 11, srcImg : 'img/img-trending/Primary Photo Placeholder-1.png'},
    {id : 12, srcImg : 'img/img-trending/Primary Photo Placeholder-2.png'}
]

let boxVisitingCard ;
imgVisitingCardList.forEach((item) => {
    contentBoxVisitCarts.insertAdjacentHTML ('beforeend' , `<div class="col-lg-3 col-sm-6 col-12"><a href="#" id="box-visiting-card" data-bs-toggle="modal" data-bs-target="#visitingCard" class="text-decoration-none anime_box_item position-relative w-100 h-100 d-flex flex-lg-column flex-row justify-content-lg-center justify-content-start align-items-center row-gap-lg-4 column-gap-3 text-lg-center text-start background_color_two py-4 px-3 rounded-4"><div class="img_box_size_card_top_creators"><img src="${item.srcImg}" class="img_size_card_top_creators" alt=""></div><div class=""><span class="text-light fs_creators_title">Keepitreal</span><span class="text-light-50 d-flex fs_creators_subtitle flex-row column-gap-2 mt-1">TotalSalesL: <p class="text-light mb-0">34.53 ETH</p> </span></div></a></div>`);

    boxVisitingCard = $.querySelectorAll('#box-visiting-card');
    boxVisitingCard.forEach((item) => {
        item.addEventListener('click' , (event) => {
            // imgVisitingCard.src = event.target.firstElementChild
            saveSrcCartVisitImg = item.firstElementChild.firstElementChild.src;
            imgVisitingCard.src = saveSrcCartVisitImg;
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
                return src.srcImg === 'img/img-trending/Primary Photo Placeholder.png';
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

boxBannerCard.forEach((item) => {
    item.addEventListener('click' , (event) => {
        // imgVisitingCard.src = event.target.firstElementChild
        saveSrcCartBanner = item.firstElementChild.firstElementChild.src;
        imgBannerCard.src = saveSrcCartBanner;
    })
})