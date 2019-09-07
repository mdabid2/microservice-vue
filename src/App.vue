<template>
  <div id="all-app">
    
   
    <carousel-3d />
    
  </div>
</template>

<script>
  //import SmartCarousel from './components/smart-carousel/SmartCarousel';
  //import HelloWorld from './components/hello-world/HelloWorld';
  import Carousel3d from './components/carousel-3d/carousel3d'
  

  export default {
    name: 'all-app',
    components: {
      //"smart-carousel": SmartCarousel,
      //"hello-world": HelloWorld,
      "carousel-3d": Carousel3d
    }
  }

</script>
