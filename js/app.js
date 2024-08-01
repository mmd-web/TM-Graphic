let $ = document;

let imgBox = $.querySelectorAll ('.img_one');
let imgMainModal = $.getElementById('img_main_modal');
let imgLastModal = $.querySelectorAll('.img_last');
let imgBoxLastModal = $.querySelector('.box_img_last_modal');
let textBoxImgModal = $.querySelector('.text_box_img_modal');

let imgTrandingList = {
    one : [
        {id : 1 , srcImg : '../img/img-trending/Primary Photo Placeholder.png'},
        {id : 2 , srcImg : '../img/img-trending/Secondary Photo Placeholder.png'},
        {id : 3 , srcImg : '../img/img-trending/Secondary Photo Placeholder-1.png'},
    ],
    two : [
        {id : 4 , srcImg : '../img/img-trending/Primary Photo Placeholder-1.png'},
        {id : 5 , srcImg : '../img/img-trending/Secondary Photo Placeholder-2.png'},
        {id : 6 , srcImg : '../img/img-trending/Secondary Photo Placeholder-3.png'},
    ],
    three : [
        {id : 7 , srcImg : '../img/img-trending/Primary Photo Placeholder-2.png'},
        {id : 8 , srcImg : '../img/img-trending/Secondary Photo Placeholder-4.png'},
        {id : 9 , srcImg : '../img/img-trending/Secondary Photo Placeholder-5.png'},
    ],
}

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
                return src.srcImg === '../img/img-trending/Primary Photo Placeholder.png';
            })

            textBoxImgModal.innerHTML = '';
            textBoxImgModal.insertAdjacentHTML('beforeend' , `<span>${textImgTrandingList.one.txt}</span>`);

            imgBoxLastModal.innerHTML = '';
            imgTrandingList.one.forEach((item) => {
                imgBoxLastModal.insertAdjacentHTML('beforeend' , `<div class=""><img class="img_last" src="${item.srcImg}" width="80" alt=""></div>`);
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

            textBoxImgModal.innerHTML = '';
            textBoxImgModal.insertAdjacentHTML('beforeend' , `<span>${textImgTrandingList.one.txt}</span>`);

            imgBoxLastModal.innerHTML = '';
            imgTrandingList.two.forEach((item) => {
                imgBoxLastModal.insertAdjacentHTML('beforeend' , `<div class=""><img class="img_last" src="${item.srcImg}" width="80" alt=""></div>`);
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

            textBoxImgModal.innerHTML = '';
            textBoxImgModal.insertAdjacentHTML('beforeend' , `<span>${textImgTrandingList.one.txt}</span>`);

            imgBoxLastModal.innerHTML = '';
            imgTrandingList.three.forEach((item) => {
                imgBoxLastModal.insertAdjacentHTML('beforeend' , `<div class=""><img class="img_last" src="${item.srcImg}" width="80" alt=""></div>`);
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