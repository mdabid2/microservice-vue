<template>
  <div id="Carousel3d">
      <carousel-3d 
         v-if="slides.length" 
        :controls-visible="[slides.length>=3?true:false]" 
        :controls-prev-html="'&#10092;'" 
        :controls-next-html="'&#10093;'" 
        :display="3" 
        :height="550"
      > 
        <slide v-for="(slide, i) in slides" :index="i" :key="i">
          <figure>
            <img :src="slide.image.url" :alt="slide.image.altImage">
            
          </figure>
          <div class="o-text__heading">
              <a :href="slide.url" target="blanck">
                  <span v-html="slide.title"></span>
              </a>
              <a class="btn-primary" :href="slide.url" target="blanck">Find A Store</a>
          </div>
        </slide>
      </carousel-3d>
  </div>
</template>

<script>
import {Carousel3d, Slide} from 'vue-carousel-3d';

export default {
  name:"Carousel3d",
  data() {
    return{
      MCMID: null,
      loading: true,
      errored: false,
      slides: []
    }
  },
  created() {
    if(window.location.hostname=="tresemmed2-uat.unileversolutions.com") {
      this.MCMID = "32414923213151592182286548544145703727";
    } else {
      this.MCMID = "47216143828987732293917462499993005214";
    }
  },
  mounted() {
        const self = this;
        var url = new URL("https://2wr3ogjgr7.execute-api.eu-central-1.amazonaws.com/recommendation/article"),
        params = {mcid:this.MCMID, pageUrl:window.location.href}
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        fetch(url, {
          method:'POST',
          mode: 'cors' // no-cors, cors, *same-origin
        })
        .then(function (response) {
          // handle success
          return response.json();
        })
        .then(function (dataObj) {
          self.slides = dataObj.productListSections[0].products;
          //eslint-disable-next-line
          console.log("ABID",dataObj.productListSections[0].products);
        })
  },
  components: {
    'carousel-3d': Carousel3d,
    'slide': Slide
  }
}
</script>

<style>
  @import './carousel-3d.css'
</style>
