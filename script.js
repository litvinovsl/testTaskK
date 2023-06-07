//scroll
const nextBtn = document.querySelector('.content__btn_next')
const prevBtn = document.querySelector('.content__btn_previous')
const widthItemsWindow = document.querySelector('.content__items').getBoundingClientRect().width
const itemOnWindow = Math.floor(widthItemsWindow / 128)
let i = itemOnWindow
const items = document.querySelectorAll('.content__item').length;
nextBtn.addEventListener('click', slideNext);
prevBtn.addEventListener('click', slidePrev);

function slideNext() {
    i = i + 1;
    i === items ? nextBtn.classList.add('content__btn_inactive') : '';
    prevBtn.removeAttribute("disabled");
    if (i <= items) {
        scroll(128)
        prevBtn.classList.remove('content__btn_inactive');
    } else {
        nextBtn.classList.add('content__btn_inactive');
        nextBtn.setAttribute('disabled', true);
    }
}
function slidePrev() {
    if (i === itemOnWindow + 1) {
        prevBtn.classList.add('content__btn_inactive');
        prevBtn.setAttribute('disabled', true);
    }
    i = i - 1;
    nextBtn.removeAttribute("disabled");
    nextBtn.classList.remove('content__btn_inactive');
    scroll(-128)
}

function scroll(val) {
    document.querySelector('.content__items').scrollBy({
        left: val,
        behavior: 'smooth'
    });
}

//open\close  content__items-conteiner_none

const expandBtn = document.querySelector('.content__btn_actions')
const itemsConteiner = document.querySelector('.content__items-conteiner').classList
const expandIcon = document.getElementById('expand')
let isExpand = true
expandBtn.addEventListener('click', expand);

function expand(){
    if (isExpand){
        itemsConteiner.add('content__items-conteiner_none')
        expandIcon.textContent = 'expand_more'
        isExpand = !isExpand
    } else {
        itemsConteiner.remove('content__items-conteiner_none')
        expandIcon.textContent = 'expand_less'
        isExpand = !isExpand
    }
}



