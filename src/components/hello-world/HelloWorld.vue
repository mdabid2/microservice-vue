
<template>
  <div id="HelloWorld">
      <hello-world>Hello World</hello-world>
  </div>
</template>

<script>
import HelloWorld from './hello-world';
export default {
  name:"HelloWorld",
  components: {
    "hello-world":HelloWorld
  },
}
</script>

<style>
  @import './hello-world.css';
</style>
