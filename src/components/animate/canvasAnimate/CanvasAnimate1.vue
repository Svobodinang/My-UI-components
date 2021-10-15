<template>
  <div class="item">
    <p class="acion-text">Наведи курсор на круг</p>
    <canvas ref="canvas" :width="canvasWidth" :height="canvasWidth"> </canvas>
  </div>
</template>

<script>
import CursorInCanvas from "@/customClasses/canvasAnimate1/cursorInCanvas.js";
import Ball from "@/customClasses/canvasAnimate1/ball.js";

export default {
  data: () => ({
    canvasWidth: 600,
    ctx: null,
    cursorPosInCanvas: null,
    balls: [],
    ballsCount: 10,
    circleRadius: 100,
    mouse: null,
    mouseRadius: 50,
  }),
  mounted() {
    this.setCanvas();
    this.setMouse();
    this.initBalls();

    this.render();
  },
  methods: {
    setCanvas() {
      let canvas = this.$refs.canvas;
      this.ctx = canvas.getContext("2d");

      this.cursorPosInCanvas = new CursorInCanvas(canvas);
    },
    setMouse() {
      this.mouse = new Ball(0, 0, this.mouseRadius, "#9ACEEB");
    },
    // Зполняем шарики
    initBalls() {
      for (let i = 0; i < this.ballsCount; i++) {
        this.balls.push(
          new Ball(
            300 + this.circleRadius * Math.cos((i * 2 * Math.PI) / this.ballsCount),
            300 + this.circleRadius * Math.sin((i * 2 * Math.PI) / this.ballsCount)
          )
        );
      }
    },
    
    // Соединяем точки, получается многоугольник
    // connectDots() {
    //   this.ctx.beginPath()
    //   this.ctx.moveTo(this.balls[0].x, this.balls[0].y)
    //   this.balls.forEach(ball => {
    //     this.ctx.lineTo(ball.x, ball.y)
    //   })
    //   this.ctx.closePath()
    //   this.ctx.stroke()
    // },

    // Соединяем точки кривой, чтобы был плавный объект
    connectDots() {
      this.ctx.beginPath();
      this.ctx.fillStyle = "#f0cde7";

      // Не разобралась как это считается
      for (let i = 0, jlen = this.ballsCount; i <= jlen; i++) {
        let p0 = this.balls[i + 0 >= jlen ? i + 0 - jlen : i + 0]
        let p1 = this.balls[i + 1 >= jlen ? i + 1 - jlen : i + 1]
        this.ctx.quadraticCurveTo(p0.x, p0.y, (p0.x + p1.x) * 0.5, (p0.y + p1.y) * 0.5)
      }

      this.ctx.closePath();
      this.ctx.fill();
    },

    // Request Animation Frame
    // функция, которая вызыввается на каждом кадре анимации и что-то изменяет
    // Чтобы производительнгость не падала, на странице должен быть только один request animation frame
    render() {
      // Если вызвать один раз, будет вызываться бесконечно пока не отменим
      // При скролле тоже лучше использвоать это, чем scroll
      // Вызывется 60 раз в секунду
      window.requestAnimationFrame(this.render);
      // Очищаем канвас
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasWidth);

      this.mouse.setPosition(
        this.cursorPosInCanvas.x,
        this.cursorPosInCanvas.y
      );
      // this.mouse.draw(this.ctx);

      this.balls.forEach((ball) => {
        ball.think(this.cursorPosInCanvas, this.mouseRadius);
        // ball.draw(this.ctx);
      });
      this.connectDots();
    },
  },
};
</script>