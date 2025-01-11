'use strict';
// import { isSmallDesktop, isTablet, isSmallTablet, isMobile } from "../functions/check-viewport";

const reviewsSliderList = document.querySelector('.reviews-slider__list');
const reviewsSlideCollection = reviewsSliderList.querySelectorAll('.reviews-slide');
const reviewsButtonNext = document.querySelector('.reviews-slider__button--next');
const reviewsButtonPrev = document.querySelector('.reviews-slider__button--prev');

const getSlideWidth = () => {
  let carouselGap = 30;

  // if (isSmallDesktop() || isTablet()) {
  //   carouselGap = 20;
  // }
  // if (isSmallTablet() || isMobile()) {
  //   carouselGap = 0;
  // }
  return reviewsSlideCollection[0].getBoundingClientRect().width + carouselGap;
}

reviewsButtonNext.addEventListener('click', () => {
  const gap = getSlideWidth();
  reviewsSliderList.scrollBy(gap, 0);

  if (reviewsSliderList.scrollWidth !== 0) {
    reviewsButtonPrev.style.opacity = 1;
  }
  if (reviewsSliderList.scrollWidth - gap <= reviewsSliderList.scrollLeft + width) {
    reviewsButtonNext.style.opacity = 0.5;
  }
});
reviewsButtonPrev.addEventListener('click', () => {
  const gap = getSlideWidth();
  reviewsSliderList.scrollBy(-(gap), 0);

  if (reviewsSliderList.scrollLeft - gap <= 0) {
    reviewsButtonPrev.style.opacity = 0.5;
  }
  if (!reviewsSliderList.scrollWidth - gap <= reviewsSliderList.scrollLeft + width) {
    reviewsButtonNext.style.opacity = 1;
  }
});

let width = reviewsSliderList.offsetWidth;
window.addEventListener('resize', () => (width = reviewsSliderList.offsetWidth));