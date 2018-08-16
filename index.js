import './js/import-jquery'
import Swiper from 'swiper'


let studySwiper = {
  spaceBetween: 13,
  autoplay: {
    autoplay: true,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
}
new Swiper ('.study-swiper-container', studySwiper)

$('.curriculum-wrapper').on('click','li',function () {
  $(this).toggleClass('active')
})

$('.qanda-wrapper').on('click','li',function () {
  $(this).toggleClass('active')
})

$('.connection-pc').on('click','li',function () {
  $(this).toggleClass('active')
})

let wechat_qrs = $('.wechat_qr')
let index = Math.floor(wechat_qrs.length * Math.random())
wechat_qrs.eq(index).show()