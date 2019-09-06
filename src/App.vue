<template>
  <div id="all-app">
    <smart-carousel />
  </div>
</template>

<script>
  import SmartCarousel from './components/smart-carousel/SmartCarousel.vue';

  export default {
    name: 'all-app',
    components: {
      "smart-carousel": SmartCarousel
    }
  }

</script>
