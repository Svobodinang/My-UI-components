export default class CursorInCanvas {
  constructor(canvas) {

    this.x = 0
    this.y = 0

    // Получаем координаты верхнего левого угла канваса
    const rect = canvas.getBoundingClientRect();
    
    // При движении мышкой внутри канваса
    canvas.onmousemove = e => {
      this.x = e.clientX - rect.left
      this.y = e.clientY - rect.top
    }
  }
}