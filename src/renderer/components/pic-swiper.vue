<template>
  <div id="certify">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img src="../assets/01.jpg" /></div>
				<div class="swiper-slide"><img src="../assets/02.jpg" /></div>
				<div class="swiper-slide"><img src="../assets/03.jpg" /></div>
				<div class="swiper-slide"><img src="../assets/04.jpg" /></div>
				<div class="swiper-slide"><img src="../assets/05.jpg" /></div>
				<div class="swiper-slide"><img src="../assets/06.jpg" /></div>
				<div class="swiper-slide"><img src="../assets/07.jpg" /></div>
				<div class="swiper-slide"><img src="../assets/08.jpg" /></div>
			</div>
		</div>
		<div class="swiper-pagination"></div>
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	</div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name:"pic-swiper",
  data(){
    return {

    }
  },
  mounted(){
    var certifySwiper = new Swiper("#certify .swiper-container", {
      watchSlidesProgress: true,
      slidesPerView: "auto",
      centeredSlides: true,
      loop: true,
      loopedSlides: 5,
      autoplay: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination"
        //clickable :true,
      },
      on: {
        progress: function(progress) {
          for (let i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i);
            var slideProgress = this.slides[i].progress;
            let modify = 1;
            if (Math.abs(slideProgress) > 1) {
              modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
            }
            let translate = slideProgress * modify * 260 + "px";
            let scale = 1 - Math.abs(slideProgress) / 5;
            let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            slide.transform(
              "translateX(" + translate + ") scale(" + scale + ")"
            );
            slide.css("zIndex", zIndex);
            slide.css("opacity", 1);
            if (Math.abs(slideProgress) > 3) {
              slide.css("opacity", 0);
            }
          }
        },
        setTransition: function(transition) {
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i);
            slide.transition(transition);
          }
        }
      }
    });
  }
}
</script>
<style >
#certify {
	position: relative;
	width: 100%;
	margin: 0 auto
}

#certify .swiper-container {
	padding-bottom: 60px;
}

#certify  .swiper-slide {
	width: 520px;
	height: 336px;
	background: #fff;
	box-shadow: 0 8px 30px #ddd;
}
#certify  .swiper-slide img{
	display:block;
}
#certify  .swiper-slide p {
	line-height: 98px;
	padding-top: 0;
	text-align: center;
	color: #636363;
	font-size: 1.1em;
	margin: 0;
}

#certify .swiper-pagination {
	width: 100%;
	bottom: 20px;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet {
	margin: 0 5px;
	border: 3px solid #fff;
	background-color: #d5d5d5;
	width: 10px;
	height: 10px;
	opacity: 1;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
	border: 3px solid #00aadc;
	background-color: #fff;
}

#certify .swiper-button-prev {
	left: 0px;
	width: 45px;
	height: 45px;
	background: url(../assets/wm_button_icon.png) no-repeat;
	background-position: 0 0;
  background-size: 100%;
  outline: none;
}

#certify .swiper-button-prev:hover {
	background-position: 0 -46px;
	background-size: 100%
}

#certify .swiper-button-next {
	right: 0px;
	width: 45px;
	height: 45px;
	background: url(../assets/wm_button_icon.png) no-repeat;
	background-position: 0 -93px;
  background-size: 100%;
  outline: none;
}

#certify .swiper-button-next:hover {
	background-position: 0 -139px;
	background-size: 100%
}
</style>

