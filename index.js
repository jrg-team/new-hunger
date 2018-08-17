import './js/import-jquery'
import Swiper from 'swiper'

$(document).ready(function () {
  $('#banner-bg').animate({
    top:"-400px",
    opacity: 0.2
  }, 520,function(){
    $('#banner-bg').animate({ opacity: 1 },400)
  });

  $('#engineer').animate({
    left:"0px"
  },800)
  $('#engineer + p').animate({
    opacity: 1
  },2500)
  $('.book-button').animate({
    left:"0px"
  },900)
  $('#book-details').animate({
    right:"0px",
    opacity: 0.5
  },900)
})

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

$('.book-button > span').on('click',function(){
  $(this).toggleClass('active')
})

$('.banner-wrapper .aside > .loadMore').on('click',function(){
  $(this).find('.load-wrap').toggleClass('active')
})

$('section.banner-wrapper > .content-wrapper > header').on('click','li',function(){
  $(this).parent('ul').find('li').each((index,node)=>{
    $(node).removeClass('active')
  })
  $(this).addClass('active')
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
