<template>
  <main class="home">
    <!-- banner -->
    <section class="banner">
      <div class="particles" v-if="toggleParticles">
        <canvas-particles
          canvas-id="particles1"
          lines-color="#fff"
        ></canvas-particles>
      </div>
      <swiper class="swiper-custom" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <article class="container cf story-hero--item-text">
            <header class="g-sm-col-4 g-md-col-5 g-lg-col-8 g-lg-push-1">
              <h1 class="h1 white">
                Integrated AI Product Solutions
              </h1>
            </header>
          </article>
        </swiper-slide>
        <swiper-slide>
          <article class="container cf story-hero--item-text">
            <header class="g-sm-col-4 g-md-col-5 g-lg-col-8 g-lg-push-1">
              <h1 class="h1 white">
                inuts.ai provides artificial intelligence algorithm and
                efficiency improvement services for enterprises
              </h1>
            </header>
          </article>
        </swiper-slide>
      </swiper>
      <span class="gradient-wrap">
        <span class="gradient"></span>
      </span>
    </section>
    <!-- MILESTONES -->
    <!-- <section class="hero-info section--block show">
      <div class="cf container">
        <header class="section-header g-sm-col-4 g-lg-col-11 g-lg-push-1">
          <h1 class="uppercase h6">Milestones</h1>
        </header>
      </div>
      <div class="hero-ctx">
        <div class="hero-scroll">
          <div class="slider--slide faux-link-block slider--slide--active">
            <article class="g-md-col-3-vw g-lg-col-4-vw milestones--item">
              <header class="left milestones--item-header">
                <h1 class="lg-h4 md-h3 sm-h3 h3 white underline">
                  <a class="white no-underline" href="void:;"
                    >Learn real world skills</a
                  >
                </h1>
              </header>
              <div class="right milestones--item-image">
                <div
                  class="img-holder img-holder--1-1 img-holder--research"
                ></div>
              </div>
              <footer class="milestones--item-footer">
                <time class="white p--meta">29 March 2018</time>
              </footer>
            </article>
          </div>
          <div class="slider--slide faux-link-block slider--slide--active">
            <article class="g-md-col-3-vw g-lg-col-4-vw milestones--item">
              <header class="left milestones--item-header">
                <h1 class="lg-h4 md-h3 sm-h3 h3 white underline">
                  <a class="white no-underline" href="void:;"
                    >A curriculum by world class Instructors</a
                  >
                </h1>
              </header>
              <div class="right milestones--item-image">
                <div
                  class="img-holder img-holder--1-1 img-holder--research"
                ></div>
              </div>
              <footer class="milestones--item-footer">
                <time class="white p--meta">29 March 2018</time>
              </footer>
            </article>
          </div>
          <div class="slider--slide faux-link-block slider--slide--active">
            <article class="g-md-col-3-vw g-lg-col-4-vw milestones--item">
              <header class="left milestones--item-header">
                <h1 class="lg-h4 md-h3 sm-h3 h3 white underline">
                  <a class="white no-underline" href="void:;"
                    >Get fluent with case studies and practice mode</a
                  >
                </h1>
              </header>
              <div class="right milestones--item-image">
                <div
                  class="img-holder img-holder--1-1 img-holder--research"
                ></div>
              </div>
              <footer class="milestones--item-footer">
                <time class="white p--meta">29 March 2018</time>
              </footer>
            </article>
          </div>
          <div class="slider--slide faux-link-block slider--slide--active">
            <article class="g-md-col-3-vw g-lg-col-4-vw milestones--item">
              <header class="left milestones--item-header">
                <h1 class="lg-h4 md-h3 sm-h3 h3 white underline">
                  <a class="white no-underline" href="void:;"
                    >A curriculum by world class Instructors</a
                  >
                </h1>
              </header>
              <div class="right milestones--item-image">
                <div
                  class="img-holder img-holder--1-1 img-holder--research"
                ></div>
              </div>
              <footer class="milestones--item-footer">
                <time class="white p--meta">29 March 2018</time>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section> -->
    <!-- LATEST NEWS -->
    <section class="latest-news">
      <div class="cf container">
        <header class="section-header g-sm-col-4 g-lg-col-11 g-lg-push-1">
          <h1 class="uppercase h6">Latest News</h1>
        </header>

        <article
          class="g-sm-col-4 featured-block featured-block-research faux-link-block show"
        >
          <header class="featured-block-header g-md-col-5 g-lg-col-9 show">
            <h1 class="heading heading--research h1">
              <a class="underline" href
                >Providing Integrated Artificial Intelligence Product
                Technological Innovation Service for Enterprises</a
              >
            </h1>
          </header>
          <div class="right featured-block-hero-img g-md-col-5 g-lg-col-6 show">
            <div class="img-holder img-holder-1-1 img-holder-research">
              <img class="img-object-fit" src="../assets/images/2.png" alt />
            </div>
          </div>
          <section
            class="featured-block-info g-sm-col-4 g-md-col-5 g-lg-col-5 g-md-push-1 g-lg-push-1"
          >
            <p>
              For enterprises whose core competitiveness and resources depend
              continuously on advanced IT technology, we will deeply understand
              the business of enterprises, help enterprises plan, design and
              complete online product artificial intelligence model. We use the
              ability of professional AI to build customized solutions to
              enhance the capability of AI products for every enterprise that
              has served, so as to help enterprises keep the leading edge in the
              increasingly fierce competition.
            </p>
            <footer class="cf featured-block-author">
              <img class="left featured-block-author-profile" src alt />
              <p class="p--meta left">
                <span class="black">The Datacamp Team</span>
                <br />
                <time class="grey-mid-light">12 October 2016</time>
              </p>
            </footer>
          </section>
        </article>
        <!-- children -->
        <section class="g-sm-col-4 three-up show">
          <article
            class="three-up--item three-up--item--research faux-link-block g-sm-col-4 g-md-col-3 g-lg-col-4"
          >
            <div class="right three-up--image">
              <div class="img-holder img-holder--16-9 img-holder--research">
                <img
                  class="img--object-fit img--object-width three-up--image-untreated"
                  src
                  alt
                />
              </div>
            </div>
            <div class="cf three-up--info">
              <header class="three-up--header left">
                <h1 class="heading heading--research h6">
                  We will use artificial intelligence technology to help
                  enterprises improve operational efficiency, improve service
                  quality and save operating costs.
                </h1>
              </header>
              <footer class="g-sm-col-4 three-up--footer">
                <time class="p--meta grey-mid">6 December 2018</time>
              </footer>
            </div>
          </article>
          <article
            class="three-up--item three-up--item--research faux-link-block g-sm-col-4 g-md-col-3 g-lg-col-4"
          >
            <div class="right three-up--image">
              <div class="img-holder img-holder--16-9 img-holder--research">
                <img
                  class="img--object-fit img--object-width three-up--image-untreated"
                  src
                  alt
                />
              </div>
            </div>
            <div class="cf three-up--info">
              <header class="three-up--header left">
                <h1 class="heading heading--research h6">
                  Through understanding the existing product operation process
                  and status of enterprises, help enterprises to build
                  artificial intelligence model machine learning, so that the
                  product life cycle of enterprises continues to extend.
                </h1>
              </header>
              <footer class="g-sm-col-4 three-up--footer">
                <time class="p--meta grey-mid">6 December 2018</time>
              </footer>
            </div>
          </article>
          <article
            class="three-up--item three-up--item--research faux-link-block g-sm-col-4 g-md-col-3 g-lg-col-4"
          >
            <div class="right three-up--image">
              <div class="img-holder img-holder--16-9 img-holder--research">
                <img
                  class="img--object-fit img--object-width three-up--image-untreated"
                  src
                  alt
                />
              </div>
            </div>
            <div class="cf three-up--info">
              <header class="three-up--header left">
                <h1 class="heading heading--research h6">
                  For any large-scale enterprise, it is very important to make
                  efficient use of artificial intelligence technology. For
                  today's enterprises, cost savings, efficiency improvement,
                  product liquidity and life cycle improvement has become the
                  most important part of the improvement.
                </h1>
              </header>
              <footer class="g-sm-col-4 three-up--footer">
                <time class="p--meta grey-mid">6 December 2018</time>
              </footer>
            </div>
          </article>
        </section>
      </div>
    </section>
    <!-- Working at  deepmind -->
    <section
      class="at-deepmind bg-blue-4 section--block"
      ref="workingDeepmind"
      style="height:1050px"
    >
      <canvas-particles
        lines-color="#1ea9ef"
        :lines-distance="Number(300)"
        class="at-deepmind-canvas"
      ></canvas-particles>
      <div class="cf container">
        <header class="section-header g-sm-col-4 g-lg-col-11 g-lg-push-1">
          <h1 class="uppercase h6">WORKING AT DEEPMIND</h1>
        </header>
        <article
          class="g-sm-col-4 featured-block featured-block-research faux-link-block show"
        >
          <header class="featured-block-header g-md-col-5 g-lg-col-9 show">
            <h1 class="heading heading--research h2">
              <a class href="void:;"
                >THE SMARTEST WAY TO Learn Data Science Online</a
              >
            </h1>
          </header>
          <div
            class="culture--image right featured-block--hero-img g-md-col-5 g-lg-col-10 show"
          >
            <div class="img-holder img-holder-1-1 img-holder-research">
              <img class="img-object-fit" src="../assets/images/5.jpg" alt />
            </div>
          </div>
        </article>
      </div>
    </section>
    <!-- MEET SOME OF THE TEAM -->
    <section class="meet-some-team bg-blue-1 section--block">
      <div class="cf container">
        <header class="section-header g-sm-col-4 g-lg-col-11 g-lg-push-1">
          <h1 class="uppercase h6">MEET SOME OF THE TEAM</h1>
        </header>
        <article class="g-sm-col-4">
          <swiper
            class="swiper-custom"
            :options="swiperOptionTwo"
            ref="mySwiper"
          >
            <!-- slides -->
            <swiper-slide v-for="i in 4" :key="i">
              <header class="team-item--header">
                <h1 class="h2 white">Raia HadSell</h1>
                <div class="team-item--picture img-holder--deepmind">
                  <div class="img-holder img-holder--1-1">
                    <img
                      class="img--object-fit"
                      src="../assets/images/6.jpg"
                      alt
                    />
                  </div>
                </div>
              </header>
              <section class="team-item--info">
                <h2 class="h6 blue-3">Senior Research Scientist</h2>
                <div class="p--module rich-text--deepmind white">
                  <div class="rich-text">
                    <p>
                      Raia is a Senior Research Scientist working on Deep
                      Learning at DeepMind, with a particular focus on solving
                      robotics and navigation using deep neural networks. She
                      joined DeepMind following positions at Carnegie Mellon and
                      SRI International as she saw the combination of research
                      into games, neuroscience, deep learning and reinforcement
                      learning as a unique proposition that could lead to
                      fundamental breakthroughs in AI. She says that one of her
                      favourite moments at DeepMind was watching the livestream
                      of Lee Sedol playing AlphaGo at 4am surrounded by the rest
                      of the team, despite the difference in timezone!
                    </p>
                  </div>
                </div>
              </section>
            </swiper-slide>
          </swiper>
        </article>
      </div>
    </section>
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
      workingDeepmindHeight: 0,
      swiperOption: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        loop: true,
        //   speed: 600,
        //   effect: "fade",
        on: {
          slideChangeTransitionStart: function() {
            that.toggleParticles = false;
            that.$nextTick(() => (that.toggleParticles = true));
          }
        }
      },
      swiperOptionTwo: {}
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
    //  setTimeout(() => {
    //    this.workingDeepmindHeight =
    //      this.$refs.workingDeepmind.offsetHeight + "px";
    //    this.$refs.workingDeepmind.style.height =
    //      this.$refs.workingDeepmind.offsetHeight + "px";
    //  }, 5);
    //  this.swiper.slideTo(3, 1000, false);
    //  this.print(this.$refs.djq);
  },
  methods: {
    menu() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      window.console.log(this.scroll);
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
      z-index: 2;
    }
    .swiper-container {
      z-index: 4;
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
      .story-hero--item-text {
        position: absolute;
        z-index: 2;
        margin-top: 30vh;
        left: 50%;
        -ms-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
        transform: translate3d(-50%, 0, 0);
        width: 100%;
        height: 100%;
        transition: all 0.7s ease-in-out;
      }
      h1 {
        transition: all 0.7s ease-in-out;
        font-size: 6rem;
        line-height: 6.8rem;
      }
      @media screen and (max-width: 47.9375em) {
        h1 {
          font-size: 3.5rem;
          line-height: 4rem;
        }
      }

      // @media screen and (max-width: 63.9375em) {
      //   h1 {
      //     font-size: 5rem;
      //     line-height: 5.6rem;
      //   }
      // }
    }
  }
  //   hero
  .hero-info {
    background-color: #104870;
    .section-header {
      h1 {
        color: #2f9eef;
      }
    }
    .hero-ctx {
      padding-left: 2.94118%;
      padding-right: 2.94118%;
      overflow-y: hidden;
      // overflow-x: auto;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .hero-scroll {
      width: 4000px;
      font-size: 0;
      line-height: 0;
      position: relative;
      white-space: nowrap;
    }
    .slider--slide {
      display: inline-block;
      margin-bottom: 36px;
      position: relative;
      transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
      vertical-align: top;
      white-space: normal;
    }
    .slider--slide {
      margin-bottom: 0;
      opacity: 1 !important;
    }

    .img-holder--1-1 {
      padding-top: 100%;
      width: 100%;
    }
    .img-holder {
      overflow: hidden;
      position: relative;
    }
    .img-holder--publication,
    .img-holder--research {
      background-image: linear-gradient(
        0deg,
        rgba(83, 66, 169, 0) 0,
        #246cb8 100%
      );
    }
  }
  //   latest news
  .latest-news {
    padding: 54px 0 64px;
    .featured-block-header {
      padding: 0 12px;
      z-index: 10;
      position: relative;
    }
    .faux-link-block {
      position: relative;
    }
    .heading--publication,
    .heading--research {
      background-color: #5342a9;
      border: 1px solid #5342a9;
      box-shadow: 12px 0 0 #5342a9, -12px 0 0 #5342a9;
      color: #fff;
      a {
        color: #fff;
      }
    }
    .img-holder-publication,
    .img-holder-research {
      background-image: linear-gradient(
        0deg,
        rgba(83, 66, 169, 0) 0,
        #5342a9 100%
      );
    }
    .featured-block-hero-img {
      display: none;
    }
    .img-object-fit {
      height: calc(100% + 2px);
      object-fit: cover;
      object-position: center;
      position: absolute;
      top: -2px;
      width: 100%;
    }
    .img-holder-1-1 {
      padding-top: 100%;
      width: 100%;
    }
    .img-holder {
      overflow: hidden;
      position: relative;
    }
    .featured-block-info {
      margin-top: 5.26316vw;
      p {
        margin: 0 0 24px;
      }
    }
    .featured-block-author {
      border-top: 1px solid #eff0f1;
      padding: 36px 0;
    }
    .featured-block-author-profile {
      height: 60px;
      margin-right: 10px;
      width: 60px;
      background: #5b64b7;
    }
    .three-up--image {
      position: relative;
      width: calc(100% - 5.26316vw);
    }
    .featured-block + .three-up,
    .three-up + .three-up {
      margin-top: 5.26316vw;
    }

    .three-up--item:nth-of-type(2) {
      text-align: right;
    }
    .three-up--item:not(:first-of-type) {
      margin-top: 5.26316vw;
    }
    .three-up--header {
      margin-top: -24px;
      padding: 0 12px;
      width: 84.21053%;
    }
    .three-up--info {
      position: relative;
      z-index: 1;
    }
    .three-up--footer {
      margin-top: 12px;
    }
    .img-holder--16-9 {
      padding-top: 56.25%;
      width: 100%;
      background: #104870;
    }
    .img--object-fit {
      height: calc(100% + 2px);
      object-fit: cover;
      object-position: center;
      position: absolute;
      top: -2px;
      width: 100%;
    }
    .three-up--image .img-holder > img {
      z-index: 1;
    }
    @media screen and (min-width: 48em) {
      .featured-block-header {
        margin-bottom: -6.6rem;
        padding: 0 1.42857vw;
      }
      .featured-block-hero-img {
        display: block;
        position: relative;
      }
      .featured-block-info {
        margin-top: 6.6rem;
      }
      .three-up--image {
        width: calc(100% - 2.85714vw);
      }
      .three-up--header {
        padding: 0 1.42857vw;
        width: 64.70588%;
      }
      .three-up--item:not(:first-of-type) {
        margin-left: 2.85714%;
      }
    }
    @media screen and (min-width: 64.0625em) {
      .featured-block-header {
        margin-bottom: -7.2rem;
        padding: 0 0.98039vw;
      }
      .featured-block-info {
        margin-top: 14.4rem;
      }
      .three-up--item {
        min-height: 260px;
        max-height: 260px;
      }
      .three-up--image {
        width: calc(100% - 2.94118vw);
      }
      .three-up--item:nth-of-type(2) {
        text-align: left;
      }
      .three-up--header {
        padding: 0 0.98039vw;
        width: 72.65625%;
      }
      .three-up--info {
        bottom: 0;
        position: absolute;
      }
    }
    .three-up--item:not(:first-of-type) {
      margin-left: 2.94118%;
      margin-top: 0;
    }
  }
  // Working at Deepmind
  .at-deepmind {
    position: relative;
    .heading--publication,
    .heading--research {
      background-color: #104870;
      border: 1px solid #104870;
      box-shadow: 12px 0 0 #104870, -12px 0 0 #104870;
      color: #fff;
      a {
        color: #fff;
      }
    }
    .at-deepmind-canvas {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  //   meet-some-team
  .meet-some-team {
    .section-header {
      color: #fff;
    }
    .team-item--header {
      position: relative;
      width: 45.28368%;
    }
    .team-item--header,
    .team-item--info {
      float: left;
    }
    .team-item--info {
      margin-left: 2.94118vw;
      width: 45.28368%;
    }
    .team-item--info .p--module {
      margin-top: 24px;
      margin-bottom: 24px;
    }
    .team-item--picture {
      float: right;
      position: relative;
      width: 79.28994%;
      img {
        width: 100%;
        max-width: 700px;
      }
    }
    .img-holder--1-1 {
      padding-top: 100%;
      width: 100%;
    }
    .img-holder {
      overflow: hidden;
      position: relative;
    }
    .team-item--info .p--module p {
      color: #fff;
    }
    .swiper-slide {
      max-width: 1426px;
    }
    @media screen and (max-width: 64em) {
      .team-item--header {
        margin-bottom: 60px;
        width: 77%;
      }
      .team-item--info {
        margin-left: 0;
        width: 77%;
      }
    }
  }
}
</style>
