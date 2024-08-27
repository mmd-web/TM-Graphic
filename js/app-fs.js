let $ = document;

let imgBox = $.querySelectorAll('.img_one');
let imgMainModal = $.getElementById('img_main_modal');
let imgLastModal = $.querySelectorAll('.img_last');
let imgBoxLastModal = $.querySelector('.box_img_last_modal');
let textBoxImgModal = $.querySelector('.text_box_img_modal');
let imgVisitingCard = $.getElementById('img-visiting-card');
let imgBannerCard = $.getElementById('img-banner-card');
let imgPostCard = $.getElementById('img-post-card');
let contentBoxVisitCarts = $.querySelector('.content_box_visit_carts');
let subTitleModla = $.querySelector('.sub_title_modla');
let titleModla = $.querySelector('.title_modla');

let bannerBoxContent = $.querySelector('.banner_box_content');
let postBoxContent = $.querySelector('.post_box_content');
let textTitle = $.getElementById('title_banner');
let textSubTitle = $.getElementById('sub_title_banner');
let textTitlePost = $.getElementById('title_post');
let textSubTitlePost = $.getElementById('sub_title_post');

let LogosBox = $.querySelectorAll('#LogosBox');
let imgLogos = $.getElementById('img_modal_Logos');
let box_img_modal_discover = $.querySelector('.box_img_modal_discover');
let textBoxImgModalLogos = $.querySelector('.text_box_img_modal_Logos');

let saveSrcCartBanner;

// todo لیست آدرس فایل های فتومونتاژ
let imgPhotomontageList = {
    one: [
        { id: 1, srcImg: 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' },
        { id: 2, srcImg: 'img/flat-design-teacher-s-day-template_23-2150254244.jpg' },
        { id: 3, srcImg: 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' },
    ],
    two: [
        { id: 4, srcImg: 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' },
        { id: 5, srcImg: 'img/flat-design-teacher-s-day-template_23-2150254244.jpg' },
        { id: 6, srcImg: 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' },
    ],
    three: [
        { id: 7, srcImg: 'img/flat-design-teacher-s-day-template_23-2150254244.jpg' },
        { id: 8, srcImg: 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg' },
        { id: 9, srcImg: 'img/flat-design-teacher-s-day-template_23-2150254244.jpg' },
    ],
}
// todo لیست متن های فتومونتاژ
let textImgPhotomontageList = {
    one: { txt: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    two: { txt: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    three: { txt: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
}
// todo لیست آدرس فایل های کارت ویزیت
let imgVisitingCardList = [
    { id: 1, srcImg: 'img/Visiting_Card/1.jpg', title: 'مهدی عباسی', subTitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 2, srcImg: 'img/Visiting_Card/2.jpg', title: 'علی عباسی', subTitle: 'Lorem ipsum dolor sit' },
    { id: 3, srcImg: 'img/Visiting_Card/3.jpg', title: 'رضا عباسی', subTitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 4, srcImg: 'img/Visiting_Card/4.jpg', title: 'مهدی عباسی', subTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?' },
    { id: 5, srcImg: 'img/Visiting_Card/5.jpg', title: 'علی عباسی', subTitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 6, srcImg: 'img/Visiting_Card/6.jpg', title: 'رضا عباسی', subTitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 7, srcImg: 'img/Visiting_Card/7.jpg', title: 'مهدی عباسی', subTitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 8, srcImg: 'img/Visiting_Card/8.jpg', title: 'علی عباسی', subTitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 9, srcImg: 'img/Visiting_Card/9.jpg', title: 'رضا عباسی', subTitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 10, srcImg: 'img/Visiting_Card/10.jpg', title: 'مهدی عباسی', subTitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 11, srcImg: 'img/Visiting_Card/11.jpg', title: 'علی عباسی', subTitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 12, srcImg: 'img/Visiting_Card/12.jpg', title: 'رضا عباسی', subTitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' }
]
// todo 
let textImgModalLogos = {
    one: { txt: 'one : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    two: { txt: 'two : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    three: { txt: 'three : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
}

let boxVisitingCard;
let visitingTitleBox ;
let saveSrcCartVisitImg;
let saveTitle;
imgVisitingCardList.forEach((item) => {
    contentBoxVisitCarts.insertAdjacentHTML('beforeend', `<div class="col-lg-3 col-sm-6 col-12" data-aos="fade-up"><a href="#" id="${item.id}" data-bs-toggle="modal" data-bs-target="#visitingCard" class="box-visiting-card text-decoration-none anime_box_item position-relative w-100 h-100 d-flex flex-lg-column flex-row justify-content-lg-center justify-content-start align-items-center row-gap-lg-4 column-gap-3 text-lg-center text-start background_color_two py-4 px-3 rounded-4"><div class="img_box_size_card_visiting_card"><img src="${item.srcImg}" class="img_size_card_visiting_card" alt=""></div><div class=""><span class="text-light fs_creators_title">${item.title}</span><span class="text-light-50 d-flex fs_creators_subtitle flex-row column-gap-2 mt-1">TotalSalesL: <p class="text-light mb-0">34.53 ETH</p> </span></div></a></div>`);

    boxVisitingCard = $.querySelectorAll('.box-visiting-card');
    boxVisitingCard.forEach((imgBox) => {
        imgBox.addEventListener('click', (event) => {
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

let saveSrcLastImg;
imgBox.forEach((box) => {
    box.addEventListener('click', (event) => {      
        if (event.target.id === 'one') {
            let saveSrcImgMain = imgPhotomontageList.one.filter((src) => {
                return src.srcImg === 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg';
            })

            textBoxImgModal.innerHTML = '';
            textBoxImgModal.insertAdjacentHTML('beforeend', `<span class="lh-lg" >${textImgPhotomontageList.one.txt}</span>`);

            imgBoxLastModal.innerHTML = '';
            imgPhotomontageList.one.forEach((item) => {
                imgBoxLastModal.insertAdjacentHTML('beforeend', `<div class=""><img class="img_last" src="${item.srcImg}" width="70" alt=""></div>`);
            })
            clickSrc()
            imgMainModal.src = saveSrcImgMain[0].srcImg;
        }
        if (event.target.id === 'two') {
            let saveSrcImgMain = imgPhotomontageList.two.filter((src) => {
                return src.srcImg === 'img/flat-design-teacher-s-day-template_23-2150254244.jpg';
            })

            textBoxImgModal.innerHTML = '';
            textBoxImgModal.insertAdjacentHTML('beforeend', `<span class="lh-lg">${textImgPhotomontageList.one.txt}</span>`);

            imgBoxLastModal.innerHTML = '';
            imgPhotomontageList.two.forEach((item) => {
                imgBoxLastModal.insertAdjacentHTML('beforeend', `<div class=""><img class="img_last" src="${item.srcImg}" width="70" alt=""></div>`);
            })
            clickSrc()
            imgMainModal.src = saveSrcImgMain[0].srcImg;        
        }
        if (event.target.id === 'three') {
            let saveSrcImgMain = imgPhotomontageList.three.filter((src) => {
                return src.srcImg === 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg';
            })

            textBoxImgModal.innerHTML = '';
            textBoxImgModal.insertAdjacentHTML('beforeend', `<span class="lh-lg">${textImgPhotomontageList.one.txt}</span>`);

            imgBoxLastModal.innerHTML = '';
            imgPhotomontageList.three.forEach((item) => {
                imgBoxLastModal.insertAdjacentHTML('beforeend', `<div class=""><img class="img_last" src="${item.srcImg}" width="70" alt=""></div>`);
            })
            clickSrc()
            imgMainModal.src = saveSrcImgMain[0].srcImg;
        }
    })
})

function clickSrc() {
    let lastImg = $.querySelectorAll('.img_last');
    lastImg.forEach((item) => {
        item.addEventListener('click', (event) => {
            saveSrcLastImg = event.target.src;
            imgMainModal.src = saveSrcLastImg;
        })
    })
}

let imgBannerCardList = [
    { id: 1, srcImg: 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg', name: 'علی', content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 2, srcImg: 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg', name: 'رضا', content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 3, srcImg: 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg', name: 'مهدی', content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 4, srcImg: 'img/instagram-stories-template-with-online-shopping_23-2148545458.jpg', name: 'حسین', content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' }
]

let imgPostCardList = [
    { id: 1, srcImg: 'img/flat-design-teacher-s-day-template_23-2150254244.jpg', name: 'علی', content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 2, srcImg: 'img/flat-design-teacher-s-day-template_23-2150254244.jpg', name: 'رضا', content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 3, srcImg: 'img/flat-design-teacher-s-day-template_23-2150254244.jpg', name: 'امیر', content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 4, srcImg: 'img/flat-design-teacher-s-day-template_23-2150254244.jpg', name: 'امیررضا', content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' }
]

let boxBannerCard;
imgBannerCardList.forEach((item) => {
    // console.log(item.srcImg);

    bannerBoxContent.insertAdjacentHTML('beforeend', `<div class="col-12 col-sm-6 col-lg-3" data-aos="fade-up"><a href="#" id="${item.id}" data-bs-toggle="modal" data-bs-target="#bannerCard" class="banner_box_item anime_box_item background_color_two text-decoration-none d-flex flex-column rounded-4 overflow-hidden"><div><img src="${item.srcImg}" style="width: 100% !important;" alt=""></div><div class="py-lg-3 py-xl-4 py-sm-4 py-3 container text-light fs-4"><span>${item.name}</span></div></a></div>`)

    boxBannerCard = document.querySelectorAll('.banner_box_item');
    boxBannerCard.forEach((banner) => {
        banner.addEventListener('click', (event) => {
            saveSrcCartBanner = banner.firstElementChild.firstElementChild.src;
            imgBannerCard.src = saveSrcCartBanner;
            if (item.id === +banner.id) {
                textTitle.innerHTML = item.name;
                textSubTitle.innerHTML = item.content;
            }
            console.log(banner.id);
            
        })
    })
})

let boxPostCard;
imgPostCardList.forEach((item) => {
    postBoxContent.insertAdjacentHTML('beforeend', `<div class="col-12 col-sm-6 col-lg-3" data-aos="fade-up"><a href="#" id="${item.id}" data-bs-toggle="modal" data-bs-target="#postCard" class="post_box_item anime_box_item background_color_two text-decoration-none d-flex flex-column rounded-4 overflow-hidden"><div><img src="${item.srcImg}" style="width: 100% !important;" alt=""></div><div class="py-lg-3 py-xl-4 py-sm-4 py-3 container text-light fs-4"><span>${item.name}</span></div></a></div>`)

    boxPostCard = document.querySelectorAll('.post_box_item');
    boxPostCard.forEach((post) => {
        post.addEventListener('click', (event) => {
            saveSrcCartBanner = post.firstElementChild.firstElementChild.src;
            imgPostCard.src = saveSrcCartBanner;
            if (item.id === +post.id) {
                textTitlePost.innerHTML = item.name;
                textSubTitlePost.innerHTML = item.content;
            }
            console.log(post.id);
            
        })
    })
})

let imgModalLogoList = {
    one: [
        { id: 1, srcImg: 'img/LogoSample/01/one-01.jpg' },
        { id: 2, srcImg: 'img/LogoSample/01/one-02.jpg' },
        { id: 3, srcImg: 'img/LogoSample/01/one-03.jpg' },
    ],
    two: [
        { id: 4, srcImg: 'img/LogoSample/02/two-01.jpg' },
        { id: 5, srcImg: 'img/LogoSample/02/two-02.jpg' },
        { id: 6, srcImg: 'img/LogoSample/02/two-03.jpg' },
    ],
    three: [
        { id: 7, srcImg: 'img/LogoSample/01/one-03.jpg' },
        { id: 8, srcImg: 'img/LogoSample/01/one-02.jpg' },
        { id: 9, srcImg: 'img/LogoSample/01/one-01.jpg' },
    ],
}

let saveSrcValueLogos;
LogosBox.forEach((box) => {
    box.addEventListener('click', (event) => {
        if (box.classList[0] === 'one') {
            let saveSrcImgMain = imgModalLogoList.one.filter((src) => {
                return src.srcImg === 'img/LogoSample/01/one-01.jpg';
            })

            textBoxImgModalLogos.innerHTML = '';
            textBoxImgModalLogos.insertAdjacentHTML('beforeend' , `<span class="lh-lg">${textImgModalLogos.one.txt}</span>`);

            box_img_modal_discover.innerHTML = '';
            imgModalLogoList.one.forEach((item) => {
                box_img_modal_discover.insertAdjacentHTML('beforeend', `<div class=""><img class="img_last" src="${item.srcImg}" width="70" alt=""></div>`);
            })

            let lastImg = $.querySelectorAll('.img_last');
            lastImg.forEach((item) => {
                item.addEventListener('click', (event) => {
                    saveSrcValueLogos = event.target.src;
                    imgLogos.src = saveSrcValueLogos;
                })
            })

            imgLogos.src = saveSrcImgMain[0].srcImg;
            console.log(imgModalLogoList.one);

        }
        if (box.classList[0] === 'two') {
            let saveSrcImgMain = imgModalLogoList.two.filter((src) => {
                return src.srcImg === 'img/LogoSample/02/two-01.jpg';
            })

            textBoxImgModalLogos.innerHTML = '';
            textBoxImgModalLogos.insertAdjacentHTML('beforeend' , `<span class="lh-lg">${textImgModalLogos.two.txt}</span>`);

            box_img_modal_discover.innerHTML = '';
            imgModalLogoList.two.forEach((item) => {
                box_img_modal_discover.insertAdjacentHTML('beforeend', `<div class=""><img class="img_last" src="${item.srcImg}" width="70" alt=""></div>`);
            })

            let lastImg = $.querySelectorAll('.img_last');
            lastImg.forEach((item) => {
                item.addEventListener('click', (event) => {
                    saveSrcValueLogos = event.target.src;
                    imgLogos.src = saveSrcValueLogos;
                })
            })

            imgLogos.src = saveSrcImgMain[0].srcImg;
            console.log(imgModalLogoList.two);

        }
        if (box.classList[0] === 'three') {
            let saveSrcImgMain = imgModalLogoList.three.filter((src) => {
                return src.srcImg === 'img/LogoSample/01/one-01.jpg';
            })

            textBoxImgModalLogos.innerHTML = '';
            textBoxImgModalLogos.insertAdjacentHTML('beforeend' , `<span class="lh-lg">${textImgModalLogos.three.txt}</span>`);

            box_img_modal_discover.innerHTML = '';
            imgModalLogoList.three.forEach((item) => {
                box_img_modal_discover.insertAdjacentHTML('beforeend', `<div class=""><img class="img_last" src="${item.srcImg}" width="70" alt=""></div>`);
            })

            let lastImg = $.querySelectorAll('.img_last');
            lastImg.forEach((item) => {
                item.addEventListener('click', (event) => {
                    saveSrcValueLogos = event.target.src;
                    imgLogos.src = saveSrcValueLogos;
                })
            })

            imgLogos.src = saveSrcImgMain[0].srcImg;
            console.log(imgModalLogoList.three);

        }
    })
})