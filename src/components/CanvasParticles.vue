<template>
  <div class="canvas-particles">
    <vue-particles
      color="#245ba0"
      class="particles-custom"
      :particleOpacity="0.7"
      :particlesNumber="40"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="0.8"
      :lineLinked="true"
      :lineOpacity="0.5"
      :linesDistance="300"
      :moveSpeed="0.5"
      :hoverEffect="true"
      hoverMode="grab"
    ></vue-particles>
    <canvas id="line-custom" class="line-custom"></canvas>
  </div>
</template>
<script>
export default {
  name: "about",
  data: function () {
    return {
      $canvas: null,
      pointArry: []
    };
  },
  mounted: function () {
    this.$canvas = document.querySelector("#line-custom");
    this.$canvas.width = window.innerWidth;
    this.$canvas.height = 675;
    const ctx = this.$canvas.getContext("2d");
    this.pointArry.splice(0, this.pointArry.length);
    //开始先放200个点
    for (var i = 0; i < 4; i++) {
      this.pointArry.push(this.creatPoint());
    }
    //  window.console.log(this.pointArry);
    this.drawCanvas(ctx);
    //  window.console.log(ctx);
  },
  methods: {
    creatPoint () {
      const point = [];
      let x = 10,
        y = 0;
      for (let i = 0; i < 15; i++) {
        x += ~~(Math.random() * 100) * i;
        y = ~~(Math.random() * 50) * i + 300;
        point.push({ x: x, y: y });
      }
      // window.console.log(point);
      return point;
    },
    drawCanvas (ctx) {
      this.pointArry.forEach(el => {
        for (let i = 0; i < el.length; i++) {
          if (i < el.length - 1) {
            this.drawLine(ctx, el[i].x, el[i].y, el[i + 1].x, el[i + 1].y);
          }
        }
      });
      // window.requestAnimationFrame(this.drawCanvas(ctx));
    },
    drawLine (ctx, m1, m2, l1, l2) {
      ctx.strokeStyle = "#1ea9ef";
      ctx.lineWidth = 1;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(m1, m2);
      ctx.lineTo(l1, l2);
      ctx.stroke();
      ctx.restore();
    }
  }
};
</script>
<style lang="scss">
$blue: #245ba0;
.canvas-particles {
  height: 100%;
  background: $blue;
  position: relative;
  .particles-custom {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .line-custom {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
