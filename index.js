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
let commentSwiperPhone = {
  autoplay: {
    autoplay: true,
    disableOnInteraction: false
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

if($(document).width() > 800){
  new Swiper ('.comment-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      autoplay: true,
      disableOnInteraction: false
    },
    pagination: {
      el: '.comment-swiper-pagination',
      clickable: true
    }
  })
} else if($(document).width() < 800 && $(document).width() > 500){
  new Swiper ('.comment-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
      autoplay: true,
      disableOnInteraction: false
    },
    pagination: {
      el: '.comment-swiper-pagination',
      clickable: true
    }
  })
} else{
  new Swiper ('.comment-container', {
    autoplay: {
      autoplay: true,
      disableOnInteraction: false
    }
  })
}