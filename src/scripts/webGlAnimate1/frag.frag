// шейдер - участок кода, который выполняется на видеокарте

precision highp float;
// varying - значит получаем и вертекс шейдера
// vUv - координаты пикселей
varying vec2 vUv;
// uniforms заполняем в компоненте
// resolution - ширина высота канваса
uniform vec2 u_resolution;
// воординаы мышки от 0 до u_resolution
uniform vec2 u_mouse;
// время, оно растет пока открыто приложение
uniform float u_time;
// для картинки
uniform sampler2D texture_sample;
// маска, карта пикселей
uniform sampler2D map_sample;
uniform float u_animation;

void main() {
  // нормируем координаты мышки
  float m = (u_mouse.x / u_resolution.x - 0.5) * 0.02;

  // чтобы исказить картинку, добавим координаты, так можнолинейно исказить
  // float distort = vUv.y*(0.1);

  // сделали как волны
  float distort = sin(vUv.y * 150.0 + u_time) * 0.01 + m;

  // это чб картка, где черным выделена область, которая не должна двигаться
  // в чб все каналы имеют одинаковое значение
  float myMap = texture2D(map_sample, vUv).r * u_animation;

  // умножаем искажение на маску, так каку нас то, что не должно шевелиться черное (значение 0)
  // то дисторд в этом месте будет 0 и не будет искажений
  vec4 myTexture = texture2D(texture_sample, vec2(vUv.x + distort * myMap, vUv.y));
  

  // так получаем пиксели, цвета
  // по краям картинка растягивается
  gl_FragColor = vec4(myTexture.rgb, 1.0);

  // чтобы сделать чб все кроме не двигающегося цветка
  // gl_FragColor = vec4(myTexture.rgb * (1.0 - myMap) + vec3(myTexture.r + myTexture.g + myTexture.b) / 3.0 * myMap, 1.0)

  // так сделаем чб фотку, но есть правильная формула как сделать чб
  // gl_FragColor = vec4(vec3(myTexture.r + myTexture.g + myTexture.b)/3.0, 1.0);

  // можно менять каналы
  // gl_FragColor = vec4(myTexture.g, myTexture.b, myTexture.r, 1.0);

  // gl_FragCoord - координаты каждого пикселя
  // xy - получаем двумерный вектор
  // их тут можно складывать умножать делить
  // этот код - нормирование, мы получаем вектор от 0 до 1 в рамках нашего канваса
  // vec2 st = gl_FragCoord.xy/u_resolution.xy;

  // rgba color
  // gl_FragColor - вектор, который красит все пиксели на экране, для которого используем шейдер
  // так делаем градиент
  // gl_FragColor = vec4(st.x,st.y,0.0,1.0);

  // так можно сделать мигание
  // gl_FragColor = vec4(abs(sin(u_time)),0.0,0.0,1.0);

  // векторы можно компановать
  // gl_FragColor = vec4( vec3(0.0, 0.0, 0.0), 1);

}