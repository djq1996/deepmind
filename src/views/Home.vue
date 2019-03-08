<template>
  <main class="home">
    <!-- banner -->
    <section class="banner">
      <div class="particles" v-if="toggleParticles">
        <canvas-particles></canvas-particles>
      </div>
      <swiper class="swiper-custom" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="i in 4" :key="i">
          <h1>{{ i + " ." }} Better Language Models and Their Implications.</h1>
        </swiper-slide>
      </swiper>
      <span class="gradient-wrap">
        <span class="gradient"></span>
      </span>
    </section>
    <!-- 英雄滚动 -->
    <section class="hero-info">
      <div class="cf container section-header">
        <h1 class="uppercase h6">Milestones</h1>
      </div>
      <div class="hero-ctx">
        <div class="hero-scroll">
          <article class="hero-item">
            <h1 class="title">Learn real world skills</h1>
            <div class="photo"></div>
            <p class="time">2 December 2018</p>
          </article>
          <article class="hero-item">
            <h1 class="title">A curriculum by world class Instructors</h1>
            <div class="photo"></div>
            <p class="time">2 December 2018</p>
          </article>
          <article class="hero-item">
            <h1 class="title">
              Get fluent with case studies and practice mode
            </h1>
            <div class="photo"></div>
            <p class="time">2 December 2018</p>
          </article>
        </div>
      </div>
    </section>
    <!--  -->
  </main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import CanvasParticles from "@/components/CanvasParticles";

export default {
  name: "home",
  components: {
    //  HelloWorld
    CanvasParticles
  },
  data() {
    const that = this;
    return {
      toggleParticles: true,
      swiperOption: {
        //   autoplay: true,
        loop: true,
        //   effect: "fade",
        on: {
          init: function() {
            window.console.log("swiper initialized");
          },
          slideChangeTransitionStart: function() {
            that.toggleParticles = false;
            that.$nextTick(() => (that.toggleParticles = true));
          }
        }
      },
      num_random: 0.8
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    window.console.log("this is current swiper instance object", this.swiper);
    //  this.swiper.slideTo(3, 1000, false);
    //  setInterval(() => {
    //    if (this.num_random < 10) {
    //      this.num_random = this.num_random + 1;
    //      window.console.log(this.num_random);
    //    }
    //  }, 1000);
  },
  methods: {
    callback() {
      window.console.log(12);
    }
  }
};
</script>
<style lang="scss">
.home {
  .banner {
    background: #245ba0;
    overflow: hidden;
    height: 75vh;
    position: relative;
    .particles {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
    }
    .gradient-wrap {
      pointer-events: none;
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 66%;
      bottom: 0;
      left: 0;
      overflow: hidden;
      .gradient {
        background: linear-gradient(
          to right,
          rgba(55, 160, 236, 0) 0,
          rgba(55, 160, 236, 0) 7%,
          #37a0ec 100%
        );
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 200%;
      }
    }
    .swiper-custom {
      height: 100%;
      h1 {
        margin-top: 30vh;
        width: 53.68627%;
        margin-left: 11.57843%;
        letter-spacing: 0.015em;
        color: #fff;
        font-size: 6rem;
        line-height: 6.8rem;
      }
    }
  }
  .hero-info {
    background: #104870;
    padding: 54px 0 64px;
    .section-header {
      h1 {
        color: #2f9eef;
      }
    }
    .hero-ctx {
      margin: 0 60px;
    }
    .hero-scroll {
      width: 4000px;
      overflow-x: auto;
      .hero-item {
        display: inline-block;
        width: 33vw;
        position: relative;
        .title {
          color: #fff;
          font-size: 54px;
          letter-spacing: 1.5px;
        }
        .photo {
          width: 70%;
          right: 0;
          top: 10%;
          background: plum;
        }
      }
    }
  }
}
</style>
