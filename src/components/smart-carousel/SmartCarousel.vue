<template>
  <div id="SmartCarousel">
      <carousel-component>
        <carousel-item>
          <h2>#1</h2>
          <img src="../../assets/img/placeholder-short.ulenscale.160x160.png" alt="">
        </carousel-item>
        <carousel-item>
          <h2>#2</h2>
          <img src="../../assets/img/placeholder.ulenscale.160x160.png" alt="">
        </carousel-item>
        <carousel-item>
          <h2>#3</h2>
          <img src="../../assets/img/placeholder-short.ulenscale.160x160.png" alt="">
        </carousel-item>
        <carousel-item>
          <h2>#4</h2>
          <img src="../../assets/img/placeholder.ulenscale.160x160.png" alt="">
        </carousel-item>
    </carousel-component>
  </div>
</template>

<script>
import {carouselComponent, carouselItem} from './smart-carousel';
export default {
  name:"SmartCarousel",
  components: {
    "carousel-item":carouselItem,
    "carousel-component":carouselComponent
  },
}
</script>

<style>
  @import './smart-carousel.css';
</style>
