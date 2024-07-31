let $ = document;

let imgBox = $.querySelectorAll ('.img_one');
let imgMainModal = $.getElementById('img_main_modal');
let imgLastModal = $.querySelectorAll('.img_last');
let imgBoxLastModal = $.querySelector('.box_img_last_modal');

let imgTrandingList = {
    one : [
        {id : 1 , srcImg : '../img/img-trending/Primary Photo Placeholder.png'},
        {id : 1 , srcImg : '../img/img-trending/Secondary Photo Placeholder.png'},
        {id : 1 , srcImg : '../img/img-trending/Secondary Photo Placeholder-1.png'},
    ],
    two : [
        {id : 1 , srcImg : '../img/img-trending/Primary Photo Placeholder-1.png'},
        {id : 1 , srcImg : '../img/img-trending/Secondary Photo Placeholder-2.png'},
        {id : 1 , srcImg : '../img/img-trending/Secondary Photo Placeholder-3.png'},
    ],
    three : [
        {id : 1 , srcImg : '../img/img-trending/Primary Photo Placeholder-2.png'},
        {id : 1 , srcImg : '../img/img-trending/Secondary Photo Placeholder-4.png'},
        {id : 1 , srcImg : '../img/img-trending/Secondary Photo Placeholder-5.png'},
    ],
}

let saveSrcLastImg ;
imgBox.forEach((box) => {
    box.addEventListener('click' , (event) => {
        if (event.target.id === 'one') {
            let saveSrcImgMain = imgTrandingList.one.filter((src) => {
                return src.srcImg === '../img/img-trending/Primary Photo Placeholder.png';
            })
            imgBoxLastModal.innerHTML = '';
            imgTrandingList.one.forEach((item) => {
                imgBoxLastModal.insertAdjacentHTML('beforeend' , `<div class="col-6"><img class="img_last" src="${item.srcImg}" width="150" alt=""></div>`);
            })
            let lastImg = $.querySelectorAll('.img_last');
            lastImg.forEach((item) => {
                item.addEventListener('click' ,(event) => {
                    saveSrcLastImg = event.target.src;
                    imgMainModal.src = saveSrcLastImg;
                })
            })
            imgMainModal.src = saveSrcImgMain[0].srcImg;
        }
        if (event.target.id === 'two') {
            let saveSrcImgMain = imgTrandingList.two.filter((src) => {
                return src.srcImg === '../img/img-trending/Primary Photo Placeholder-1.png';
            })
            imgBoxLastModal.innerHTML = '';
            imgTrandingList.two.forEach((item) => {
                imgBoxLastModal.insertAdjacentHTML('beforeend' , `<div class="col-6"><img class="img_last" src="${item.srcImg}" width="150" alt=""></div>`);
            })
            let lastImg = $.querySelectorAll('.img_last');
            lastImg.forEach((item) => {
                item.addEventListener('click' ,(event) => {
                    saveSrcLastImg = event.target.src;
                    imgMainModal.src = saveSrcLastImg;
                })
            })
            imgMainModal.src = saveSrcImgMain[0].srcImg;
        }
        if (event.target.id === 'three') {
            let saveSrcImgMain = imgTrandingList.three.filter((src) => {
                return src.srcImg === '../img/img-trending/Primary Photo Placeholder-2.png';
            })
            imgBoxLastModal.innerHTML = '';
            imgTrandingList.three.forEach((item) => {
                imgBoxLastModal.insertAdjacentHTML('beforeend' , `<div class="col-6"><img class="img_last" src="${item.srcImg}" width="150" alt=""></div>`);
            })
            let lastImg = $.querySelectorAll('.img_last');
            lastImg.forEach((item) => {
                item.addEventListener('click' ,(event) => {
                    saveSrcLastImg = event.target.src;
                    imgMainModal.src = saveSrcLastImg;
                })
            })
            imgMainModal.src = saveSrcImgMain[0].srcImg;
        }
    })
})