// Passive event listeners
jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    'use strict';
    this.addEventListener('touchstart', handle, {
      passive: !ns.includes('noPreventDefault')
    });
  }
};
jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    'use strict';
    this.addEventListener('touchmove', handle, {
      passive: !ns.includes('noPreventDefault')
    });
  }
};

// Preloader js
$(window).on('load', function () {
  'use strict';
  $('.preloader').fadeOut(0);
});

$(document).ready(function () {
  'use strict';

  // Shuffle js filter and masonry
  var containerEl = document.querySelector('.shuffle-wrapper');
  if (containerEl) {
    var Shuffle = window.Shuffle;
    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
      itemSelector: '.shuffle-item',
      buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
  }

  $('.portfolio-single-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000

  });

  $('.clients-logo').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.testimonial-slider').slick({
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  //  Count Up
  function counter() {
    var oTop;
    if ($('.count').length !== 0) {
      oTop = $('.count').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.count').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  $(window).on('scroll', function () {
    counter();
  });

  // Turn cloaked e-mail addresses into clickable mailto links
  let emailSpans = document.getElementsByClassName("cloaked-e-mail");

  for (let emailSpan of emailSpans) {
    let emailLink = document.createElement("a");
    let emailAddress = emailSpan.attributes.getNamedItem("data-user").value.split('').reverse().join('') + "@" + emailSpan.attributes.getNamedItem("data-domain").value.split('').reverse().join('');
    emailLink.href = "mailto:" + emailAddress;
    emailLink.innerText = emailAddress;
    emailSpan.parentElement.insertBefore(emailLink, emailSpan);
    emailSpan.parentElement.removeChild(emailSpan)
  }

  // map initialize
  $(map);
});



// File#: _1_vertical-timeline
// Usage: codyhouse.co/license
(function () {
  var VTimeline = function (element) {
    this.element = element;
    this.sections = this.element.getElementsByClassName('js-v-timeline__section');
    this.animate = this.element.getAttribute('data-animation') && this.element.getAttribute('data-animation') == 'on' ? true : false;
    this.animationClass = 'v-timeline__section--animate';
    this.animationDelta = '-150px';
    initVTimeline(this);
  };

  function initVTimeline(element) {
    if (!element.animate) return;
    for (var i = 0; i < element.sections.length; i++) {
      var observer = new IntersectionObserver(vTimelineCallback.bind(element, i),
        { rootMargin: "0px 0px " + element.animationDelta + " 0px" });
      observer.observe(element.sections[i]);
    }
  };

  function vTimelineCallback(index, entries, observer) {
    if (entries[0].isIntersecting) {
      Util.addClass(this.sections[index], this.animationClass);
      observer.unobserve(this.sections[index]);
    }
  };

  //initialize the VTimeline objects
  var timelines = document.querySelectorAll('.js-v-timeline'),
    intersectionObserverSupported = ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype),
    reducedMotion = Util.osHasReducedMotion();
  if (timelines.length > 0) {
    for (var i = 0; i < timelines.length; i++) {
      if (intersectionObserverSupported && !reducedMotion) (function (i) { new VTimeline(timelines[i]); })(i);
      else timelines[i].removeAttribute('data-animation');
    }
  }
}());


/////// Card Slider
// var bg = document.querySelector('.item-bg');
var items = document.querySelectorAll('.news__item');
var item = document.querySelector('.news__item');

function cLog(content) {
  console.log(content)
}

if ($(window).width() > 800) {
  $(document).on("mouseover", ".news__item", function (_event, _element) {

    var newsItem = document.querySelectorAll('.news__item');
    newsItem.forEach(function (element, index) {
      // element.addEventListener('mouseover', function () {
      //     var x = this.getBoundingClientRect().left;
      //     var y = this.getBoundingClientRect().top;
      //     var width = this.getBoundingClientRect().width;
      //     var height = this.getBoundingClientRect().height;

      //     // $('.item-bg').addClass('active');
      //     $('.news__item').removeClass('active');
      //     // $('.news__item').removeClass('active');


      //     // bg.style.width = width + 'px';
      //     // bg.style.height = height + 'px';
      //     // bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
      // });

      element.addEventListener('mouseleave', function () {
        // $('.item-bg').removeClass('active');
        $('.news__item').removeClass('active');
      });

    });

  });
}


var swiper = new Swiper('.news-slider', {
  effect: 'coverflow',
  grabCursor: false,
  loop: true,
  centeredSlides: true,
  keyboard: true,
  spaceBetween: 0,
  slidesPerView: 'auto',
  speed: 300,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 3,
    slideShadows: false
  },
  breakpoints: {
    480: {
      spaceBetween: 0,
      centeredSlides: true
    }
  },
  simulateTouch: true,
  navigation: {
    nextEl: '.news-slider-next',
    prevEl: '.news-slider-prev'
  },
  pagination: {
    el: '.news-slider__pagination',
    clickable: true
  },
  on: {
    init: function () {
      var activeItem = document.querySelector('.swiper-slide-active');

      var sliderItem = activeItem.querySelector('.news__item');

      $('.swiper-slide-active .news__item').addClass('active');


      // var x = sliderItem.getBoundingClientRect().left;
      // var y = sliderItem.getBoundingClientRect().top;
      // var width = sliderItem.getBoundingClientRect().width;
      // var height = sliderItem.getBoundingClientRect().height;


      // $('.item-bg').addClass('active');

      // bg.style.width = width + 'px';
      // bg.style.height = height + 'px';
      // bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
    }
  }
});

swiper.on('touchEnd', function () {
  $('.news__item').removeClass('active');
  $('.swiper-slide-active .news__item').addClass('active');
});

swiper.on('slideChange', function () {
  $('.news__item').removeClass('active');
});

swiper.on('slideChangeTransitionEnd', function () {
  $('.news__item').removeClass('active');
  var activeItem = document.querySelector('.swiper-slide-active');

  var sliderItem = activeItem.querySelector('.news__item');

  $('.swiper-slide-active .news__item').addClass('active');

  // var x = sliderItem.getBoundingClientRect().left;
  // var y = sliderItem.getBoundingClientRect().top;
  // var width = sliderItem.getBoundingClientRect().width;
  // var height = sliderItem.getBoundingClientRect().height;


  // $('.item-bg').addClass('active');

  // bg.style.width = width + 'px';
  // bg.style.height = height + 'px';
  // bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
});

