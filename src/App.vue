<template>
  <div id="all-app">
    <smart-carousel />
    <hello-world />
  </div>
</template>

<script>
  import SmartCarousel from './components/smart-carousel/SmartCarousel';
  import HelloWorld from './components/hello-world/HelloWorld';

  export default {
    name: 'all-app',
    components: {
      "smart-carousel": SmartCarousel,
      "hello-world": HelloWorld
    }
  }

</script>
