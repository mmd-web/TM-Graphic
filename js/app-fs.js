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
        { id: 1, srcImg: 'public/img/Photomontage/01/1.jpg' },
        { id: 2, srcImg: 'public/img/Photomontage/01/2.jpg' },
        { id: 3, srcImg: 'public/img/Photomontage/01/3.jpg' },
    ],
    two: [
        { id: 4, srcImg: 'public/img/Photomontage/02/1.jpg' },
        { id: 5, srcImg: 'public/img/Photomontage/02/2.jpg' },
        { id: 6, srcImg: 'public/img/Photomontage/02/3.jpg' },
    ],
    three: [
        { id: 7, srcImg: 'public/img/Photomontage/03/1.jpg' },
        { id: 8, srcImg: 'public/img/Photomontage/03/2.jpg' },
        { id: 9, srcImg: 'public/img/Photomontage/03/3.jpg' },
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
    { id: 1, srcImg: 'public/img-2/Visiting_Card/1.jpg', title: 'mahdi abbasi', subTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?' },
    { id: 2, srcImg: 'public/img-2/Visiting_Card/2.jpg', title: 'ali abbasi', subTitle: 'Lorem ipsum dolor sit' },
    { id: 3, srcImg: 'public/img-2/Visiting_Card/3.jpg', title: 'reza abbasi', subTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?' },
    { id: 4, srcImg: 'public/img-2/Visiting_Card/4.jpg', title: 'alireza abbasi', subTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?' },
    { id: 5, srcImg: 'public/img-2/Visiting_Card/5.jpg', title: 'adfd abbasi', subTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?' },
    { id: 6, srcImg: 'public/img-2/Visiting_Card/6.jpg', title: 'mxcvfi abbasi', subTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?' },
    { id: 7, srcImg: 'public/img-2/Visiting_Card/7.jpg', title: 'mah]gg abbasi', subTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?' },
    { id: 8, srcImg: 'public/img-2/Visiting_Card/8.jpg', title: 'adfd abbasi', subTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?' },
    { id: 9, srcImg: 'public/img-2/Visiting_Card/9.jpg', title: 'adfd abbasi', subTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?' },
    { id: 10, srcImg: 'public/img-2/Visiting_Card/10.jpg', title: 'adfd abbasi', subTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?' },
    { id: 11, srcImg: 'public/img-2/Visiting_Card/11.jpg', title: 'adfd abbasi', subTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?' },
    { id: 12, srcImg: 'public/img-2/Visiting_Card/12.jpg', title: 'adfd abbasi', subTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit ipsam explicabo voluptates accusantium iure necessitatibus magni voluptatem, mollitia eaque provident magnam nam doloribus rem quia quis suscipit beatae unde?' }
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

// عوض میشه
imgVisitingCardList.forEach((item) => {
    contentBoxVisitCarts.insertAdjacentHTML('beforeend', `<div class="col-12 col-sm-6 col-lg-3" data-aos="fade-up"><a href="#" id="${item.id}" data-bs-toggle="modal" data-bs-target="#bannerCard" class="banner_box_item anime_box_item background_color_two text-decoration-none d-flex flex-column rounded-4 overflow-hidden"><div><img src="${item.srcImg}" style="width: 100% !important;" alt=""></div><div class="py-lg-3 py-xl-4 py-sm-4 py-3 container text-light fs-4"><span>${item.title}</span></div></a></div>`);

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
// آدرس های زیر عوض میشن
imgBox.forEach((box) => {
    box.addEventListener('click', (event) => {   
        console.log(event);
           
        if (event.target.id === 'one') {
            let saveSrcImgMain = imgPhotomontageList.one.filter((src) => {
                return src.srcImg === 'public/img/Photomontage/01/1.jpg';
            })

            textBoxImgModal.innerHTML = '';
            textBoxImgModal.insertAdjacentHTML('beforeend', `<span>${textImgPhotomontageList.one.txt}</span>`);

            imgBoxLastModal.innerHTML = '';
            imgPhotomontageList.one.forEach((item) => {
                imgBoxLastModal.insertAdjacentHTML('beforeend', `<div class=""><img class="img_last" src="${item.srcImg}" width="70" alt=""></div>`);
            })
            clickSrc()
            imgMainModal.src = saveSrcImgMain[0].srcImg;
        }
        if (event.target.id === 'two') {
            let saveSrcImgMain = imgPhotomontageList.two.filter((src) => {
                return src.srcImg === 'public/img/Photomontage/02/1.jpg';
            })

            textBoxImgModal.innerHTML = '';
            textBoxImgModal.insertAdjacentHTML('beforeend', `<span>${textImgPhotomontageList.one.txt}</span>`);

            imgBoxLastModal.innerHTML = '';
            imgPhotomontageList.two.forEach((item) => {
                imgBoxLastModal.insertAdjacentHTML('beforeend', `<div class=""><img class="img_last" src="${item.srcImg}" width="70" alt=""></div>`);
            })
            clickSrc()
            imgMainModal.src = saveSrcImgMain[0].srcImg;        
        }
        if (event.target.id === 'three') {
            let saveSrcImgMain = imgPhotomontageList.three.filter((src) => {
                return src.srcImg === 'public/img/Photomontage/03/1.jpg';
            })

            textBoxImgModal.innerHTML = '';
            textBoxImgModal.insertAdjacentHTML('beforeend', `<span>${textImgPhotomontageList.one.txt}</span>`);

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

// عکس های اینجا عوض میشن
let imgBannerCardList = [
    { id: 1, srcImg: 'public/img/banner/1.jpg', name: 'علی', content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 2, srcImg: 'public/img/banner/2.jpg', name: 'رضا', content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 3, srcImg: 'public/img/banner/3.jpg', name: 'مهدی', content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 4, srcImg: 'public/img/banner/4.jpg', name: 'حسین', content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' }
]

// عکس های اینجا عوض میشن
let imgPostCardList = [
    { id: 1, srcImg: 'public/img/story-img/1.jpg', name: 'علی', content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 2, srcImg: 'public/img/story-img/2.jpg', name: 'رضا', content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 3, srcImg: 'public/img/story-img/3.jpg', name: 'امیر', content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' },
    { id: 4, srcImg: 'public/img/story-img/4.jpg', name: 'امیررضا', content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،' }
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
        { id: 1, srcImg: 'public/img-2/LogoSample/01/one-03.jpg' },
        { id: 2, srcImg: 'public/img-2/LogoSample/01/one-02.jpg' },
        { id: 3, srcImg: 'public/img-2/LogoSample/01/one-01.jpg' },
    ],
    two: [
        { id: 4, srcImg: 'public/img-2/LogoSample/02/two-01.jpg' },
        { id: 5, srcImg: 'public/img-2/LogoSample/02/two-02.jpg' },
        { id: 6, srcImg: 'public/img-2/LogoSample/02/two-03.jpg' },
    ],
    three: [
        { id: 7, srcImg: 'public/img-2/LogoSample/03/1.jpg' },
        { id: 8, srcImg: 'public/img-2/LogoSample/03/2.jpg' },
        { id: 9, srcImg: 'public/img-2/LogoSample/03/تصویر-سوم.jpg' },
    ],
}

let saveSrcValueLogos;
LogosBox.forEach((box) => {
    box.addEventListener('click', (event) => {
        if (box.classList[0] === 'one') {
            let saveSrcImgMain = imgModalLogoList.one.filter((src) => {
                return src.srcImg === 'img/LogoSample/01/one-03.jpg';
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
                return src.srcImg === 'img/LogoSample/03/1.jpg';
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

// کدهای جدیدی که باید اضافه کنی

let copyBtnEvent = document.getElementById('copy_event');
let spans = document.querySelectorAll('#phone_num');

for (const span of spans) {
  span.onclick = function() {
    document.execCommand("copy");
  }

  span.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", span.textContent);
      console.log(event.clipboardData.getData("text"))
    }
  });
}