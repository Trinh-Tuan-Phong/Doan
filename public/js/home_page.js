function smoothScrollToTop() {

    var currentTime = 0;
    var duration = 800; 
    var increment = 20; 
    var scrollStep = -window.scrollY / (duration / increment);
  
    var smoothScrollInterval = setInterval(function() {
      if (window.scrollY === 0) {
        clearInterval(smoothScrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, increment);
  }
  
  window.onscroll = function() {
    var button = document.querySelector(".scroll-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }
  
  $(document).ready(function () {
      $(".select__slider").slick({
          autoplay: true,
          autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots: false,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              arrows: false,
              infinite: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              arrows: false,
              infinite: false,
            },
          },
        ],
  
      });
    });
  
    