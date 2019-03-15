<template>
  <div class="about">
    this is page
    <!-- <canvas id="canvas" width="1000" height="600"></canvas> -->
  </div>
</template>
<script>
export default {
  name: "about",
  data: function() {
    return {
      count: 1,
      $canvas: null,
      pointArry: []
    };
  },
  mounted: function() {
    //  window.requestAnimationFrame(this.log);
    window.requestAnimationFrame(this.init);
  },
  methods: {
    log() {
      window.console.log(this.count);
      let a = window.requestAnimationFrame(this.log);
      this.count++;
      if (this.count > 100) {
        window.cancelAnimationFrame(a);
      }
    },
    init() {
      window.console.log("init...");
      this.$canvas = document.getElementById("canvas");
      var context = this.$canvas.getContext("2d"); //得到绘图的上下文环境
      context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);

      context.beginPath(); //开始绘制线条，若不使用beginPath，则不能绘制多条线条
      context.moveTo(~~(Math.random() * 100), ~~(Math.random() * 100)); //线条开始位置
      context.lineTo(~~(Math.random() * 700), ~~(Math.random() * 500)); //线条经过点
      context.closePath(); //结束绘制线条，不是必须的

      context.lineWidth = 1; //设置线条宽度
      context.strokeStyle = "pink"; //设置线条颜色
      context.stroke(); //用于绘制线条
      window.requestAnimationFrame(this.init);
    }
  }
};
</script>
<style lang="scss">
.about {
  height: 100vh;
  background: #245ba0;
  color: #fff;
  vertical-align: 0;
  text-align: center;
  line-height: 600px;
}
</style>
