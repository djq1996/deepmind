<template>
  <!-- Footer -->
  <section class="footer bg-grey-light">
    <section class="cf container">
      <header class="g-sm-col-4 g-lg-col-10 g-lg-push-1">Inuts.ai</header>
      <nav class="g-sm-col-4 g-md-col-3 g-lg-col-4 g-lg-push-1">
        <ul class="cf unstyled footer--nav-list">
          <li class="g-sm-col-4 footer--nav-list--item faux-link-block">
            <a class="no-underline grey-dark p--module" href="void:;">Home</a>
            <a class="faux-link-block--link" href="void:;">Home</a>
          </li>

          <li class="g-sm-col-4 footer--nav-list--item faux-link-block">
            <a class="no-underline grey-dark p--module" href="void:;"
              >Solutions</a
            >
            <a class="faux-link-block--link" href="void:;">Solutions</a>
          </li>

          <li class="g-sm-col-4 footer--nav-list--item faux-link-block">
            <a class="no-underline grey-dark p--module" href="void:;">Cases</a>
            <a class="faux-link-block--link" href="void:;">Cases</a>
          </li>

          <li class="g-sm-col-4 footer--nav-list--item faux-link-block">
            <a class="no-underline grey-dark p--module" href="void:;"
              >For business</a
            >
            <a class="faux-link-block--link" href="void:;">For business</a>
          </li>

          <li class="g-sm-col-4 footer--nav-list--item faux-link-block">
            <a class="no-underline grey-dark p--module" href="void:;">About</a>
            <a class="faux-link-block--link" href="void:;">About</a>
          </li>
        </ul>
      </nav>
      <div class="g-sm-col-4 g-md-col-2 g-lg-col-5 right">
        <ul class="cf unstyled footer--nav-list">
          <li class="g-sm-col-4 footer--nav-list--item-secondary">
            <a class="no-underline grey-mid p--module" href="void:;">Press</a>
          </li>

          <li class="g-sm-col-4 footer--nav-list--item-secondary">
            <a class="no-underline grey-mid p--module" href="void:;"
              >Terms and Conditions</a
            >
          </li>

          <li class="g-sm-col-4 footer--nav-list--item-secondary">
            <a class="no-underline grey-mid p--module" href="void:;"
              >Privacy Policy –&nbsp;Updated</a
            >
          </li>

          <li class="g-sm-col-4 footer--nav-list--item-secondary">
            <a class="no-underline grey-mid p--module" href="void:;"
              >Alphabet Inc</a
            >
          </li>
        </ul>
        <p class="grey-mid-light p--module">
          AI Wish You Take Off@2019 inuts.ai
        </p>
      </div>
    </section>
  </section>
</template>
<style lang="scss">
//   footer
.footer {
  .footer--nav-list--item:not(:last-of-type) {
    border-bottom: 1px solid rgba(16, 72, 112, 0.1);
  }
  .footer--nav-list--item:not(:first-of-type) {
    padding-top: 14px;
  }
  .footer--nav-list--item {
    padding-bottom: 14px;
    transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .faux-link-block {
    position: relative;
  }
  .faux-link-block--link {
    bottom: 0;
    display: block;
    left: 0;
    position: absolute;
    overflow: hidden;
    right: 0;
    text-indent: 200%;
    top: 0;
    visibility: visible;
    white-space: nowrap;
    z-index: 10000;
  }
  .footer--nav-list--item-secondary:not(:last-of-type) {
    margin-bottom: -2px;
  }
}
</style>
