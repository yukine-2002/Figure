var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    coverflowEffect: {
      rotate: 200,
      stretch: 1,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }
    // ,
    // pagination: {
    //   el: ".swiper-pagination"
    // }
  });