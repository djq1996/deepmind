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
                {{ $t("lang.header") }}
              </h1>
              <p class="h2 white">
                {{ $t("lang.headerDes") }}
              </p>
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
        <!-- <header class="section-header g-sm-col-4 g-lg-col-11 g-lg-push-1">
          <h1 class="uppercase h6">Latest News</h1>
        </header> -->

        <article
          class="g-sm-col-4 featured-block featured-block-research faux-link-block show"
        >
          <header class="featured-block-header g-md-col-5 g-lg-col-9 show">
            <h1 class="heading heading--research h1">
              <a class="underline" href>{{ $t("lang.providingIntegrated") }}</a>
            </h1>
          </header>
          <!-- <div class="right featured-block-hero-img g-md-col-5 g-lg-col-6 show">
            <div class="img-holder img-holder-1-1 img-holder-research">
              <img class="img-object-fit" src="@/assets/images/2.png" alt />
            </div>
          </div> -->
          <section
            class="featured-block-info g-sm-col-4 g-md-col-5 g-lg-col-5 g-md-push-1 g-lg-push-1"
          >
            <p>
              {{ $t("lang.providingIntegratedDes") }}
            </p>
            <!-- <footer class="cf featured-block-author">
              <img class="left featured-block-author-profile" src alt />
              <p class="p--meta left">
                <span class="black">The Datacamp Team</span>
                <br />
                <time class="grey-mid-light">12 October 2016</time>
              </p>
            </footer> -->
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
                  src="@/assets/images/hand.jpg"
                  alt
                />
              </div>
            </div>
            <div class="cf three-up--info">
              <header class="three-up--header left">
                <h1 class="heading heading--research h6">
                  {{ $t("lang.weWill") }}
                </h1>
              </header>
              <footer class="g-sm-col-4 three-up--footer">
                <!-- <time class="p--meta grey-mid">6 December 2018</time> -->
              </footer>
            </div>
          </article>
          <article
            class="three-up--item three-up--item--research faux-link-block g-sm-col-4 g-md-col-3 g-lg-col-4"
          >
            <!-- <div class="right three-up--image">
              <div class="img-holder img-holder--16-9 img-holder--research">
                <img
                  class="img--object-fit img--object-width three-up--image-untreated"
                  src
                  alt
                />
              </div>
            </div> -->
            <div class="cf three-up--info">
              <header class="three-up--header left">
                <h1 class="heading heading--research h6">
                  {{ $t("lang.through") }}
                </h1>
              </header>
              <footer class="g-sm-col-4 three-up--footer">
                <!-- <time class="p--meta grey-mid">6 December 2018</time> -->
              </footer>
            </div>
          </article>
          <article
            class="three-up--item three-up--item--research faux-link-block g-sm-col-4 g-md-col-3 g-lg-col-4"
          >
            <!-- <div class="right three-up--image">
              <div class="img-holder img-holder--16-9 img-holder--research">
                <img
                  class="img--object-fit img--object-width three-up--image-untreated"
                  src
                  alt
                />
              </div>
            </div> -->
            <div class="cf three-up--info">
              <header class="three-up--header left">
                <h1 class="heading heading--research h6">
                  {{ $t("lang.forAny") }}
                </h1>
              </header>
              <footer class="g-sm-col-4 three-up--footer">
                <!-- <time class="p--meta grey-mid">6 December 2018</time> -->
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
      style="height:390px"
    >
      <canvas-particles
        lines-color="#1ea9ef"
        :lines-distance="Number(300)"
        class="at-deepmind-canvas"
      ></canvas-particles>
      <div class="cf container">
        <!-- <header class="section-header g-sm-col-4 g-lg-col-11 g-lg-push-1">
          <h1 class="uppercase h6">WORKING AT DEEPMIND</h1>
        </header> -->
        <article
          class="g-sm-col-4 featured-block featured-block-research faux-link-block show"
        >
          <header class="featured-block-header g-md-col-5 g-lg-col-9 show">
            <h1 class="heading heading--research h2">
              <a class href="void:;">{{ $t("lang.wePrivide") }}</a>
            </h1>
          </header>
          <!-- <div
            class="culture--image right featured-block--hero-img g-md-col-5 g-lg-col-10 show"
          >
            <div class="img-holder img-holder-1-1 img-holder-research">
              <img class="img-object-fit" src="@/assets/images/5.jpg" alt />
            </div>
          </div> -->
        </article>
      </div>
    </section>
    <!-- MEET SOME OF THE TEAM -->
    <!-- <section class="meet-some-team bg-blue-1 section--block">
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
    </section> -->
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
        //   autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false
        //   },
        //   loop: true,
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
    //  setTimeout(() => {
    //    this.workingDeepmindHeight =
    //      this.$refs.workingDeepmind.offsetHeight + "px";
    //    this.$refs.workingDeepmind.style.height =
    //      this.$refs.workingDeepmind.offsetHeight + "px";
    //  }, 5);
    //  this.swiper.slideTo(3, 1000, false);
    //  this.print(this.$refs.djq);
  },
  methods: {}
};
</script>
<style lang="scss">
@import "./Home.scss";
</style>
