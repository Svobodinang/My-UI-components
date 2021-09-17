export default class CursorInCanvas {
  constructor(canvas) {

    this.x = 0
    this.y = 0

    
    // При движении мышкой внутри канваса
    canvas.onmousemove = e => {
      this.x = e.pageX - canvas.offsetLeft
      this.y = e.pageY - canvas.offsetTop
    }
  }
}