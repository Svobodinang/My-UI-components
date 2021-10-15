<template>
  <div>
    <span class="acion-text">Наведи курсор</span>
    <div
      ref="webGLAnimate1__container"
      @mouseenter="startAnimate"
      @mouseleave="stopAnimate"
    ></div>
  </div>
</template>

<script>
import * as THREE from "three";
import fragmentShader from "@/shaders/webGlAnimate1/frag.frag";
import vertexShader from "@/shaders/webGlAnimate1/vertex.vert";

export default {
  data: () => ({
    time: 0.1,
  }),
  mounted() {
    this.mouse = { x: 0, y: 0 };
    this.container = this.$refs["webGLAnimate1__container"];
    document.onmousemove = this.getMouseXY;
    this.init();
    this.animate();
  },
  methods: {
    // получаем значение мышки
    getMouseXY(e) {
      this.mouse.x = e.pageX;
      this.mouse.y = e.pageY;
      this.uniforms.u_mouse.value.x = this.mouse.x;
      this.uniforms.u_mouse.value.y = this.mouse.y;
    },
    // инициализируем сцену
    init() {
      this.camera = new THREE.Camera();
      this.camera.position.z = 1;
      this.scene = new THREE.Scene();
      let geometry = new THREE.PlaneBufferGeometry(2, 2);

      let loader = new THREE.TextureLoader();
      let texture_sample = loader.load(
        require("@/assets/img/image.jpg"),
        (result) => {
          this.uniforms.u_size.value = new THREE.Vector2(
            result.image.width / 15,
            result.image.height / 15
          );
        }
      );
      let map_sample = loader.load(require("@/assets/img/flower-map.jpg"));

      this.uniforms = {
        u_time: { type: "f", value: 1.0 },
        // type f - float, v2 - вектор 2d, t - sampler2D(textura)
        u_animation: { type: "f", value: 0.0 },
        u_mouse: { type: "v2", value: new THREE.Vector2() },
        u_resolution: { type: "v2", value: new THREE.Vector2() },
        // размер картинки
        u_size: {
          type: "v2",
          value: new THREE.Vector2(),
        },
        texture_sample: {
          type: "t",
          value: texture_sample,
        },
        map_sample: {
          type: "t",
          value: map_sample,
        },
        u_start_animate: {
          type: "f",
          value: 0,
        },
      };

      // инициализация сцены, передаем настройки и шейдеры
      let material = new THREE.ShaderMaterial({
        fragmentShader,
        vertexShader,
        uniforms: this.uniforms,
      });
      let mesh = new THREE.Mesh(geometry, material);
      this.scene.add(mesh);
      this.rerender = new THREE.WebGLRenderer();
      this.rerender.setPixelRatio(window.devicePixelRation);

      this.container.appendChild(this.rerender.domElement);
      this.onWindowResize();
    },
    // меняет размер канваса
    onWindowResize() {
      this.rerender.setSize(400, 600);
      this.uniforms.u_resolution.value.x = this.rerender.domElement.width;
      this.uniforms.u_resolution.value.y = this.rerender.domElement.height;
      this.uniforms.u_mouse.value.x = this.mouse.x;
      this.uniforms.u_mouse.value.y = this.mouse.y;
    },

    // RAF перерендеринг
    animate() {
      requestAnimationFrame(this.animate);
      this.render();
    },
    render() {
      this.uniforms.u_time.value += this.time;
      this.rerender.render(this.scene, this.camera);
    },
    startAnimate() {
      this.uniforms.u_animation.value = 1.0;
    },
    stopAnimate() {
      this.uniforms.u_animation.value = 0.0;
    },
  },
};
</script>