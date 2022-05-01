const sliderWrapper = document.querySelector(".slider-wrapper");
const slideWidth = sliderWrapper.querySelector(".slide").clientWidth;

// Slide
let index = 0;

const slide = () => {
  index++;
  sliderWrapper.style.transition =
    "transform 750ms cubic-bezier(0.92, 0.42, 0.28, 0.92)";
  if (index == 4) {
    index = 0;
    sliderWrapper.style.transition = "none";
  }
  sliderWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
};

setInterval(slide, 3000);
