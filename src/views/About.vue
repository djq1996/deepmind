<template>
  <div class="about">this is about page</div>
</template>
<script>
export default {
  name: "about",
  data: function() {
    return {
      $canvas: null,
      pointArry: []
    };
  },
  mounted: function() {},
  methods: {}
};
</script>
<style lang="scss">
$blue: #245ba0;
.about {
  height: 675px;
  background: $blue;
  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
