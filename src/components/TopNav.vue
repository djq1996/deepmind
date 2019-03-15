<template>
  <header class="top-nav">
    <div class="cf container">
      <div class="menu">
        <button class="burger-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav
        class="nav site-nav g-md-col-5 g-lg-col-11 g-md-push-1 g-lg-push-1 site-nav--is-home"
      >
        <ul class="nav-list">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">Learn</router-link>
          </li>
          <li>
            <router-link to="/about">Practice</router-link>
          </li>
          <li>
            <router-link to="/about">Projects</router-link>
          </li>
          <li>
            <router-link to="/sky">Pricing</router-link>
          </li>
          <li>
            <router-link to="/test">For Business</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: "TopNav",
  data: function() {
    return {};
  }
};
</script>

<style lang="scss">
.top-nav {
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 2;
  .menu {
    box-sizing: content-box;
    cursor: pointer;
    height: 86px;
    left: 0;
    position: fixed;
    transition: background-color 0.4s ease-in-out, top 0.2s ease-in-out;
    width: 86px;
    z-index: 1001;
    overflow: hidden;
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
    }
  }
  .nav-list {
    display: flex;
  }
  a {
    display: block;
    color: #fff;
    font-size: 1.4em;
    padding: 30px 1.60858vw;
    font-size: 1.4rem;
    line-height: 2.6rem;
    letter-spacing: 0.05em;
  }
}
</style>
