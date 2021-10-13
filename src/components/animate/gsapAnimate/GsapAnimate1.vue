<template>
  <div class="item">
    click!
    <div class="border">
      <svg
        @click="animate"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
        x="0px"
        y="0px"
        viewBox="0 0 439.8 61.7"
        enable-background="new 0 0 439.8 61.7"
        xml:space="preserve"
      >
        <defs>
          <!-- Дырка, ее вырезаем из элемента, который ссылается на этот clipPath -->
          <clipPath id="R">
            <path
              d="M238.8,22.2V12c0-7.6-4.3-12-11.7-12h-64.2v61.7h9V47.6c0-0.2,0-0.5,0-0.7V14.6
			c0-0.2,0-0.5,0-0.7V8.3h53.2c3,0,4.6,1.8,4.6,5.1v8c0,3.3-1.6,5.1-4.6,5.1h-43.4v8h25l21.3,27l0.1,0.2h9.7l-22.2-27.8h13.2
			C233.6,33.9,238.8,30.8,238.8,22.2"
            />
          </clipPath>

          <clipPath id="Y">
            <polygon
              points="429.2,0 406.1,27.6 383,0.2 382.9,0 371.8,0 401.6,35.3 401.6,35.3 
			410.6,35.3 410.6,35.3 439.8,0 	"
            />
            <rect x="401.6" y="45.1" fill="pink" width="9" height="16.6" />
          </clipPath>

          <clipPath id="t-top">
            <path
              fill="white"
              d="M275.3,0v8.3l36.4-0.1v0c6.6,0,13.1-0.1,19.7-0.1c0.2,0,0.5,0,0.7,0h24l0-0.5
				c0.1-2.4,0.1-4.9,0.1-7.3l0-0.5H275.3z"
            />
          </clipPath>

          <clipPath id="t-bottom">
            <path
              fill="white"
              d="M311.7,18.1v43h9.1v-43C317.8,18.1,314.7,18.1,311.7,18.1"
            />
          </clipPath>
        </defs>

        <g>
          <!-- L -->
          <polygon
            fill="black"
            points="0,0 0,61.1 62.7,61.1 62.7,53.2 9,53.2 9,0 "
          />

          <!-- U -->
          <path
            ref="logoU"
            fill="black"
            d="M140.4,47.8c0,3.3-1.6,5.1-4.6,5.1H89.2c-3,0-4.6-1.8-4.6-5.1V0h-9v49.1
		c0,7.6,4.2,12,11.6,12h50.7c7.4,0,11.7-4.4,11.7-12V0h-9.1V47.8z"
          />

          <!-- R -->
          <g clip-path="url(#R)">
            <rect
              ref="logoR"
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="black"
            ></rect>
          </g>

          <!-- I -->
          <rect
            ref="logoI"
            x="251.2"
            y="0"
            fill="black"
            width="9"
            height="61.7"
          />

          <!-- T top -->
          <g clip-path="url(#t-top)">
            <rect
              ref="logoTTop"
              x="0"
              y="0"
              fill="black"
              width="100%"
              height="100%"
            ></rect>
          </g>

          <!-- T bottom -->
          <g clip-path="url(#t-bottom)">
            <rect
              ref="logoTBottom"
              x="0"
              y="0"
              fill="black"
              width="100%"
              height="100%"
            ></rect>
          </g>

          <!-- Y -->
          <g clip-path="url(#Y)">
            <rect
              ref="logoY"
              x="0"
              y="0"
              fill="black"
              width="100%"
              height="100%"
            ></rect>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

export default {
  mounted() {
    this.animate();
  },
  methods: {
    animate() {
      const tl = gsap.timeline();
      // U
      tl.from(this.$refs.logoU, 1, { y: -30 })
        // R
        .from(
          this.$refs.logoR,
          2,
          {
            y: -80,
            rotation: 15,
            transformOrigin: "100% 50%",
          },
          "-=1"
        )
        .from(this.$refs.logoI, 2, { y: "110%" }, "-=1.5")
        .from(this.$refs.logoTTop, 8, { x: "100%" }, "-=1.5")
        .from(this.$refs.logoTBottom, 2, { y: "-100%" }, "-=7")
        .from(this.$refs.logoY, 2, { y: "110%" }, "-=7");
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  padding: 1rem;
  .border {
    overflow: hidden;
    padding-top: 17px;
    svg {
      overflow: unset;
      cursor: pointer;
    }
  }
}
</style>