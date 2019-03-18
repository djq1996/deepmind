<template>
  <div class="canvas-particles" ref="canvasParticles">
    <vue-particles
      color="#245ba0"
      class="particles-custom"
      :particleOpacity="0"
      :particlesNumber="40"
      :particleSize="0"
      shapeType="circle"
      :linesColor="linesColor"
      :linesWidth="0.8"
      :lineLinked="true"
      :lineOpacity="0.3"
      :linesDistance="linesDistance"
      :moveSpeed="0.7"
      :hoverEffect="true"
      hoverMode="grab"
    ></vue-particles>
    <svg
      class="svg"
      v-html="svgPoyline"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    ></svg>
  </div>
</template>
<script>
export default {
  name: "about",
  data: function() {
    return {
      svg_box: null,
      width: 0,
      height: 0,
      svgPoyline: ""
    };
  },
  props: {
    linesColor: {
      default: "#000"
    },
    linesDistance: {
      default: 300
    }
  },
  mounted: function() {
    this.svg_box = document.querySelector(".svg");
    this.width = this.$refs.canvasParticles.offsetWidth;
    this.height = this.$refs.canvasParticles.offsetHeight;
    setInterval(() => {
      this.createSvg();
    }, 4500);
    this.createSvg();
  },
  methods: {
    createSvg() {
      const pointArry = [];

      let pinty = Number(Math.random().toFixed(1));

      for (var i = 0; i < 4; i++) {
        pointArry.push(this.creatPoint(pinty));
      }

      var svgPonit = [];
      pointArry.forEach(el => {
        // console.log(el)
        var c = "";
        for (let i = 0; i < el.length; i++) {
          c += `${el[i].x},${el[i].y} `;
        }
        svgPonit.push(c);
      });
      this.svgPoyline = "";
      svgPonit.forEach(el => {
        this.svgPoyline += `<polyline class="path" points="${el}" >
          </polyline>
          `;
      });
    },
    creatPoint(pinty) {
      const point = [];
      let x = 10,
        y = 0;

      for (let i = 0; i < 7; i++) {
        if (i == 6) {
          x = this.width - 20;
          y = (this.height / 2) * pinty;
        } else {
          x += ~~(Math.random() * 130) * i;
          y = ~~(Math.random() * 50) * i + 300;
        }
        point.push({ x: x, y: y });
      }
      // window.console.log(point);
      return point;
    }
  }
};
</script>
<style lang="scss">
.canvas-particles {
  height: 100%;
  position: relative;
  .particles-custom {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  .svg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
}

.path {
  stroke: #1ea9ef;
  stroke-width: 1.2;
  fill: none;
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: dash 4s linear normal;
}

@keyframes dash {
  0% {
    stroke-dashoffset: 2000;
  }
  25% {
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dashoffset: 0;
  }
  75% {
    stroke-dashoffset: -2000;
  }
  100% {
    stroke-dashoffset: -2000;
  }
}
</style>
