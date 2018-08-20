import '../components/import-jquery'
import Swiper from 'swiper'

$(document).ready(function () {
  $('#banner-bg').animate({
    top:"-300px",
    opacity: 0.2
  }, 620,function(){
    $('#banner-bg').animate({ opacity: 1 },400)
  });

  $('.engineer').animate({
    left:"0px"
  },800)
  $('.engineer + p').animate({
    opacity: 1
  },2500)
  $('.book-button').animate({
    left:"0px"
  },900)
  $('.book-details').animate({
    right:"0px",
    opacity: 0.3
  },900,function(){
    $(this).animate({ opacity: 1 },500)
    $(this).find('ul').animate({ opacity: 1 },500)
  })
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

$('.contact-wrapper .contact-phone').on('click','li',function () {
  $(this).toggleClass('active')
})

$('.book-button > span').on('click',function(){
  $(this).toggleClass('active')
})

$('.aside > .loadMore').on('click',function(){
  $(this).find('.load-wrap').toggleClass('active')
  $(this).find('.more-icon').toggleClass('active')
})

$('.connection-pc').on('click','li',function () {
  if($(this).hasClass('active')){
    $(this).removeClass('active')
    return
  }
  $('.connection-pc li').removeClass('active')
  $(this).toggleClass('active')
})
$('section.free_trial_request > .container > .content-wrap > .from-wrap > .submit > span').on('click',function(){
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