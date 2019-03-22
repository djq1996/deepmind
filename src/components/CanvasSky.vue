<template>
  <canvas
    class="canvas-sky"
    :class="skyName"
    width="1000"
    height="400"
  ></canvas>
</template>
<script>
export default {
  name: "canvas-sky",
  data() {
    return {
      timer: null,
      $canvas: null,
      width: window.innerWidth,
      height: 625,
      mouseX: -1,
      mouseY: -1,
      pointArry: [],
      zoom: 1 //页面的缩放,
    };
  },
  props: {
    skyName: {
      default: "canvas-sky"
    }
  },
  mounted() {
    this.mainBgFullScreen();
    //  window.addEventListener("resize", function () {
    //    if (this.timer) {
    //      window.cancelAnimationFrame(this.timer);
    //    }
    //    this.mainBgFullScreen();
    //  });
  },
  methods: {
    //初始化canvas全屏
    mainBgFullScreen() {
      this.$canvas = document.querySelector("." + this.skyName);
      window.console.log(this.$canvas);
      this.zoom = this.getZoom();
      this.$canvas.width = this.width;
      this.$canvas.height = this.height;
      this.pointArry.splice(0, this.pointArry.length);
      //开始先放200个点
      for (var i = 0; i < ~~(150 * this.zoom); i++) {
        this.pointArry.push(this.creatPoint());
      }
      //绘制canvas
      if (this.$canvas.getContext) {
        var ctx = this.$canvas.getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.strokeStyle = "rgba(255,255,255,0)";
        ctx.lineWidth = 0.8;
        this.drawCanvas(ctx);
      }
      this.$canvas.addEventListener("mousemove", function(ev) {
        ev = ev || event;
        this.mouseX = ev.offsetX;
        this.mouseY = ev.offsetY;
      });
    },
    //随机生成一个点
    creatPoint() {
      var xsKew = (Math.random() - 0.5) * this.zoom; //x轴偏移量
      var ysKew = (Math.random() - 0.5) * this.zoom; //y轴偏移量
      var r = ~~(Math.random() * 4 * this.zoom);
      var x = ~~(Math.random() * (this.width - r)) + 2 * r;
      var y = ~~(Math.random() * (this.height - r)) + 2 * r;
      var point = {
        x: x,
        y: y,
        xsKew: xsKew,
        ysKew: ysKew,
        r: r
      };
      // window.console.log(point);
      return point;
    },

    //绘制canvas
    drawCanvas(ctx) {
      ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
      const that = this;
      this.pointArry.forEach(function(res, index) {
        var i = index;
        ctx.beginPath();
        res.x += res.xsKew;
        res.y += res.ysKew;
        //处理边缘碰撞
        if (res.x <= res.r || res.x >= that.$canvas.width - res.r) {
          res.xsKew = -res.xsKew;
          res.x = res.x + res.xsKew;
        }
        if (res.y <= res.r || res.y >= that.$canvas.height - res.r) {
          res.ysKew = -res.ysKew;
          res.y = res.y + res.ysKew;
        }
        //绘制点
        //   ctx.arc(res.x, res.y, res.r, 0, 2 * Math.PI);
        ctx.arc(res.x, res.y, 0, 0, 2 * Math.PI);
        ctx.fill();
        that.pointArry.forEach(function(el, index) {
          if (index != i) {
            that.drawLine(
              ctx,
              that.pointArry[i].x,
              that.pointArry[i].y,
              el.x,
              el.y
            );
          }
        });
        if (that.mouseX > 0 && that.mouseY > 0) {
          that.drawLine(ctx, that.mouseX, that.mouseY, res.x, res.y);
        }
      });
      if (window.requestAnimationFrame)
        this.timer = window.requestAnimationFrame(
          this.drawCanvas.bind(this, ctx)
        );
      else if (window.msRequestAnimationFrame)
        this.timer = window.msRequestAnimationFrame(
          this.drawCanvas.bind(this, ctx)
        );
      else if (window.mozRequestAnimationFrame)
        this.timer = window.mozRequestAnimationFrame(
          this.drawCanvas.bind(this, ctx)
        );
      else if (window.webkitRequestAnimationFrame)
        this.timer = window.webkitRequestAnimationFrame(
          this.drawCanvas.bind(this, ctx)
        );
    },
    //画线
    drawLine(ctx, p1x, p1y, p2x, p2y) {
      var xDistance = Math.abs(p1x - p2x); //计算两点间的x距离
      var yDistance = Math.abs(p1y - p2y); //计算两点间的y距离
      var distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);
      if (distance <= 300) {
        ctx.fillStyle = "#ffffff"; //解决窗口缩放时圆点变黑
        ctx.strokeStyle = "rgba(221,221,221," + (1 - distance / 120) + ")";
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(p1x, p1y);
        ctx.lineTo(p2x, p2y);
        ctx.stroke();
        ctx.restore();
      }
    },
    //获取页面被缩放的比例
    getZoom() {
      var zoom;
      zoom = window.innerWidth / window.screen.width;
      window.console.log(zoom);
      return 1;
    }
  }
};
</script>
<style lang="scss" scoped></style>
