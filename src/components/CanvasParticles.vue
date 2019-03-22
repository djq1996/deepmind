<template>
  <div class="canvas-particles" ref="canvasParticles">
    <div :id="canvasId" class="particles-custom"></div>
    <svg
      class="svg"
      v-html="svgPoyline"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    ></svg>
  </div>
</template>
<script>
import "particles.js";
export default {
  name: "about",
  data: function() {
    return {
      width: 0,
      height: 0,
      svgPoyline: ""
    };
  },
  props: {
    canvasId: {
      default: "particles"
    },
    linesColor: {
      default: "#000"
    },
    linesDistance: {
      default: 200
    }
  },
  mounted: function() {
    this.width = this.$refs.canvasParticles.offsetWidth;
    this.height = this.$refs.canvasParticles.offsetHeight;
    //  setInterval(() => {
    //    this.createSvg();
    //    this.initParticles();
    //  }, 5000);
    // this.print(window.particlesJS);
    this.createSvg();
    this.initParticles();
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
        let j = i <= 1 ? i : 1;
        if (i == 6) {
          x = this.width - 10;
          y = this.height * pinty;
        } else {
          x += Number(Math.random().toFixed(1)) * (this.width / 5) * j;
          y = ~~(Math.random() * 60) * i + 300;
        }
        point.push({ x: parseInt(x), y: parseInt(y) });
      }
      // this.print(point);
      return point;
    },
    initParticles() {
      this.print(this.canvasId);
      window.particlesJS(this.canvasId, {
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1000
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: 0,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 0,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: this.linesDistance,
            color: this.linesColor,
            opacity: 0.3,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: false,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
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
  stroke-width: 1.8;
  fill: none;
  stroke-dasharray: 2200;
  stroke-dashoffset: 2200;
  animation: dash 5s linear normal;
}

@keyframes dash {
  0% {
    stroke-dashoffset: 2200;
  }
  25% {
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dashoffset: 0;
  }
  75% {
    stroke-dashoffset: -2200;
  }
  100% {
    stroke-dashoffset: -2200;
  }
}
</style>
