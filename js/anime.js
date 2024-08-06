// let parentBoxItem = $.querySelectorAll('.parent_box_item');
// let boxItem = $.querySelectorAll('.box_item');
// let flogAnime = false;

// boxItem.forEach((item) => {
//     item.addEventListener('mouseenter' , (event) => {
//         console.log('hello');
//         if (!flogAnime) {
//             item.classList.add('anime_box_item');
//             // parentBoxItem.classList.add('anime_box_par');
//             event.target.parentElement.classList.add('anime_box_par');
            
//             flogAnime = !flogAnime;
//         }else if (flogAnime) {
//             item.classList.remove('anime_box_item');
//             event.target.parentElement.classList.remove('anime_box_par');
//             flogAnime = !flogAnime;
//         }
//     })
// })

// boxItem.addEventListener('mouseenter' , () => {
//     console.log('enter');
//     boxItem.classList.add('anime_box_item');
//     parentBoxItem.classList.add('anime_box_par');
// })

// boxItem.addEventListener('mouseleave' , () => {
//     console.log('leave');
    
//     boxItem.classList.remove('anime_box_item');
//     parentBoxItem.classList.remove('anime_box_par');
// })