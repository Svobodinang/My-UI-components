export default class Ball {
  constructor(x = 0, y = 0, radius = 2, color = '#ff6600') {
    this.x = x
    this.y = y

    // Чтобы добиться эффекта желе, надо запомнить изначальные координаты точки
    this.originalX = x
    this.originalY = y

    // Добавим скорость
    this.vx = 0
    this.vy = 0
    this.radius = radius
    this.color = color
    
    // 1 / Сила трения, чтобы шарик замедлялся
    this.friction = 0.9
    // Коэффициент натяжения пружины
    this.springFactor = 0.02
  }
  setPosition(x = this.x, y = this.y) {
    this.x = x
    this.y = y
  }
  think(mousePosition, mouseRadius) {
    // Расстояние между центром мышки и центром шариком
    let dx = this.x - mousePosition.x
    let dy = this.y - mousePosition.y
    let dist = Math.sqrt(dx * dx + dy * dy)  

    // console.log(dx, dy);

    // Если шарик зашел на точку, то устанавливаем скорость точке
    if (dist < mouseRadius) {
      // Нужно понять направление, для этого получаем арктангенс угла
      let angle = Math.atan2(dy, dx)
      // Посчитаем расстояние, на которое мышка налезла на точку
      let tx = mousePosition.x + Math.cos(angle) * mouseRadius
      let ty = mousePosition.y + Math.sin(angle) * mouseRadius

      this.vx += tx - this.x
      this.vy += ty - this.y

      // Можно сделать через вектора
      // this.vx += dx / dist * (mouseRadius - dist)
      // this.vy += dy / dist * (mouseRadius - dist)
    }

    // После того, как мы оттолкнули точку, она будет стремиться к исходному положению аналогично пружине
    // То  есть, чем расстояние больше, тем сильнее она стремится в исходное положение
    let sx = -(this.x - this.originalX)
    let sy = -(this.y - this.originalY)

    this.vx += sx * this.springFactor
    this.vy += sy * this.springFactor

    this.vx *= this.friction
    this.vy *= this.friction

    // Скорость в мире canvas - это величина, которая добавляется к координате
    this.x += this.vx
    this.y += this.vy
  }
  // Отрисовка шарика
  draw(context) {
    // Чтобы крансный текст сохранился только в рамках save - restore
    context.save();
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
    context.restore();
  }
}