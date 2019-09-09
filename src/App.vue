
<template>
  <div id="web-components">
    <carousel-3d />
  </div>
</template>

<script>
  import Carousel3d from './components/carousel-3d/carousel3d';

  export default {
    name: 'web-components',
    components: {
      "carousel-3d": Carousel3d
    }
  };

</script>
