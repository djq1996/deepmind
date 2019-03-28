<template>
  <header class="header" :class="{ 'has-hero': hasHero, 'is-beyond': topnum }">
    <div class="cf container">
      <div
        class="burger-btn--wrap"
        :class="{ 'is-open': menuBlock }"
        @click="burgerClick"
      >
        <button class="burger-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav
        class="nav site-nav g-md-col-5 g-lg-col-11 g-md-push-1 g-lg-push-1 site-nav--is-home"
        v-if="!menuBlock"
      >
        <ul class="nav-list cf unstyled">
          <li
            class="site-nav--list-item"
            :class="{ 'hover-active site-nav--deepmind': hoverIndex == 0 }"
            @mouseenter="
              changeColor(0, 'nav-item--hover-deepmind nav-item--hover')
            "
            @click="changeColor(null)"
            @mouseleave="changeColor(null)"
          >
            <router-link to="/">{{ $t("lang.menu.home") }}</router-link>
          </li>
          <li
            class="site-nav--list-item"
            :class="{ 'hover-active site-nav--research': hoverIndex == 1 }"
            @mouseenter="
              changeColor(1, 'nav-item--hover-research nav-item--hover')
            "
            @click="changeColor(null)"
            @mouseleave="changeColor(null)"
          >
            <router-link to="/practice">{{
              $t("lang.menu.solutions")
            }}</router-link>
          </li>
          <li
            class="site-nav--list-item"
            :class="{ 'hover-active site-nav--applied': hoverIndex == 2 }"
            @mouseenter="
              changeColor(2, 'nav-item--hover-applied nav-item--hover')
            "
            @click="changeColor(null)"
            @mouseleave="changeColor(null)"
          >
            <router-link to="/test">{{ $t("lang.menu.cases") }}</router-link>
          </li>
          <li
            class="site-nav--list-item"
            :class="{
              'hover-active site-nav--ethics-society': hoverIndex == 3
            }"
            @mouseenter="
              changeColor(3, 'nav-item--hover-ethics-society nav-item--hover')
            "
            @click="changeColor(null)"
            @mouseleave="changeColor(null)"
          >
            <router-link to="/about">{{
              $t("lang.menu.forBusiness")
            }}</router-link>
          </li>
          <li class="site-nav--list-item" @click="changeSeupe">
            <a href="void:;">{{ $t("lang.locale") }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="menu bg-grey-light menu--is-open" v-show="menuBlock">
      <div class="cf container relative">
        <ul class="menu-list unstyled">
          <li class="menu-list-item">
            <router-link to="/">{{ $t("lang.menu.home") }}</router-link>
          </li>
          <li class="menu-list-item">
            <router-link to="/">{{ $t("lang.menu.solutions") }}</router-link>
          </li>
          <li class="menu-list-item">
            <router-link to="/">{{ $t("lang.menu.cases") }}</router-link>
          </li>
          <li class="menu-list-item">
            <router-link to="/">{{ $t("lang.menu.forBusiness") }}</router-link>
          </li>
          <li class="menu-list-item" @click="changeSeupe">
            <a href="void:;">{{ $t("lang.locale") }}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "TopNav",
  data: function() {
    return {
      hasHero: true,
      hoverIndex: null,
      topnum: false,
      menuBlock: false
    };
  },
  watch: {
    $route: "routeChange"
  },
  methods: {
    routeChange(route) {
      this.print(route);
      if (route.path == "/") {
        this.hasHero = true;
      } else {
        this.hasHero = false;
      }
    },
    changeColor(i, val) {
      this.hoverIndex = i;
      this.$emit("onHover", val);
    },
    menu() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      this.topnum = scrollTop > 500 ? true : false;
    },
    burgerClick() {
      this.menuBlock = !this.menuBlock;
      if (this.menuBlock) {
        document.body.classList.add("overlay--is-open");
      } else {
        document.body.classList.remove("overlay--is-open");
      }
    },
    changeSeupe() {
      if (this.$i18n.locale === "zh") {
        window.setup("en");
      } else {
        window.setup("zh");
      }
    }
  },
  mounted() {
    this.routeChange(this.$route);
    window.addEventListener("scroll", this.menu);
    //  this.$router.beforeEach((to, from, next) => {
    //    // this.print(from, to);
    //    if (from.path == "/") {
    //      this.hasHero = false;
    //    } else {
    //      this.hasHero = true;
    //    }
    //    next();
    //  });
  }
};
</script>

<style lang="scss">
.header {
  .burger-btn--wrap {
    box-sizing: content-box;
    cursor: pointer;
    height: 86px;
    left: 0;
    position: fixed;
    transition: background-color 0.4s ease-in-out, top 0.2s ease-in-out;
    width: 86px;
    z-index: 1001;
    overflow: hidden;
  }
  .burger-btn {
    background: 0 0;
    border: 0;
    cursor: pointer;
    height: 14px;
    outline: 0;
    padding: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    -ms-transform: translateY(-50%) translateX(-50%);
    transform: translateY(-50%) translateX(-50%);
    transform: translate3d(-50%, -50%, 0);
    width: 24px;
    z-index: 1;
    transition: all 0.2s ease-in-out;
    span {
      background-color: #fff;
      height: 2px;
      left: 0;
      position: absolute;
      -ms-transform-origin: center;
      transform-origin: center;
      transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
      width: 100%;
      z-index: 0;
    }
    span:nth-of-type(1) {
      top: 0;
    }
    span:nth-of-type(2) {
      top: 6px;
    }
    span:nth-of-type(3) {
      top: 12px;
    }
    span:nth-of-type(2):after {
      transition-delay: 75ms;
      transform-origin: right bottom;
    }
    span:after {
      background-color: #3d346c;
      content: "";
      display: block;
      height: 2px;
      left: 0;
      position: absolute;
      top: 0;
      -ms-transform-origin: left bottom;
      transform-origin: left bottom;
      -ms-transform: scaleX(0);
      transform: scaleX(0);
      transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
      width: 100%;
      z-index: 1;
    }
  }
  .is-open .burger-btn span:nth-of-type(1) {
    transform: translateY(-50%) rotate(45deg);
  }
  .is-open .burger-btn span:nth-of-type(2) {
    transform: scale(0);
  }
  .is-open .burger-btn span:nth-of-type(3) {
    transform: translateY(-50%) rotate(-45deg);
  }
  .is-open .burger-btn {
    span {
      top: 50%;
    }
  }
  .burger-btn--wrap:after {
    background-color: #0074c8;
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -ms-transform: scaleY(0);
    transform: scaleY(0);
    transition: all 0.4s ease-in-out;
    width: 100%;
    z-index: 0;
  }
  .burger-btn--wrap:hover {
    &:after {
      transform: none;
    }
    span:after {
      transform: none;
    }
  }

  .site-nav {
    a {
      display: block;
      color: #fff;
      font-size: 1.4em;
      padding: 30px 3.21716vw;
      font-size: 1.4rem;
      line-height: 2.6rem;
      letter-spacing: 0.05em;
      transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    a:before {
      background-color: #fff;
      content: "";
      display: block;
      left: 0;
      height: 6px;
      position: absolute;
      opacity: 0.5;
      top: 0;
      transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
      -ms-transform: scaleY(0);
      transform: scaleY(0);
      -ms-transform-origin: top center;
      transform-origin: top center;
      width: 100%;
    }
    a:hover:before {
      -ms-transform: none;
      transform: none;
    }
    a.router-link-exact-active::before {
      -ms-transform: none;
      transform: none;
    }
  }
  @media screen and (max-width: 47.9375em) {
    .burger-btn--wrap {
      right: 0;
      left: auto;
      width: 62px;
      height: 62px;
    }
  }
  @media screen and (min-width: 97.5em) {
    .burger-btn--wrap {
      left: calc(50.6% - 735px - 45px);
    }
  }
}
.is-beyond .burger-btn--wrap {
  &:after {
    transform: none;
  }
}
.burger-btn--wrap.is-open {
  &:after {
    transform: none;
  }
}
.header.has-hero {
  a.router-link-exact-active::before {
    -ms-transform: scaleY(0);
    transform: scaleY(0);
  }
}
.site-nav--list-item {
  position: relative;
  float: left;
}

.site-nav--list-item.hover-active {
  background-color: #0074c8;
}

.site-nav--list-item.hover-active.site-nav--research {
  background-color: #5342a9;
}

.site-nav--list-item.hover-active.site-nav--applied {
  background-color: #00a6ad;
}

.site-nav--list-item.hover-active.site-nav--ethics-society {
  background-color: #8c305c;
}

.site-nav--list-item.hover-active.site-nav--deepmind {
  background-color: #0074c8;
}
.menu {
  height: 100%;
  left: 0;
  opacity: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding-top: 120px;
  position: fixed;
  top: 0;
  -ms-transform: none;
  transform: none;
  transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1),
    opacity 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  -ms-transform-origin: top center;
  transform-origin: top center;
  width: 100%;
  z-index: 999;
  .menu-list-item {
    border-bottom: 2px solid #dfe0e4;
    a {
      font-size: 1.3rem;
      color: #000000;
      font-weight: bold;
      letter-spacing: 0.5px;
      line-height: 4.5rem;
    }
  }
}
.header.hide-nav .site-nav,
body.nav--is-hidden .site-nav {
  opacity: 0;
  -ms-transform: translateY(-100%);
  transform: translateY(-100%);
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
</style>
