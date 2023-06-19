import Swiper, { Navigation, Pagination } from "swiper";

const swiperExample = new Swiper (".example__slider",{
  modules: [Navigation, Pagination],
  slidesPerView:1,
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    576:{
      slidesPerView:2,
    },
    768:{
      slidesPerView:3,
    }
  }
})

const swiperOffer = new Swiper (".offer__slider",{
  modules: [Navigation, Pagination],
  slidesPerView:1,
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
