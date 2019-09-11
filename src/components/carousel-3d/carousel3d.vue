<template>
  <div id="Carousel3d">
      <carousel-3d 
        :controls-visible="[slides.length>=3?true:false]" 
        :controls-prev-html="'&#10092;'" 
        :controls-next-html="'&#10093;'" 
        :display="3" 
        :height="550"
        v-if="slides.length" 
      > 
        <slide v-for="(slide, i) in slides" :index="i" :key="i">
          <figure>
            <img :src="slide.productsDetail[0].images[0].url" :alt="slide.productsDetail[0].images[0].altImage">
            
          </figure>
          <div class="o-text__heading">
              <a :href="slide.url" target="blanck">
                  <span v-html="slide.title"></span>
              </a>
              <a class="btn-primary" :href="slide.productsDetail[0].storeLocatorResultUrl" target="blanck">Find A Store</a>
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
    //this.MCMID = this.getMcmidValue("AMCV_128981DD59DFA4DA0A495DB2%40AdobeOrg","MCMID");
    this.MCMID = "32414923213151592182286548544145703727";
  },
  computed: {
    getMcmidValue(name, key){
      var getCookie=function(){
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
      };
      var MCMID=getCookie(name);
          MCMID=MCMID.split("%7C");
      var MCMIDINDEX=MCMID.indexOf(key);
      return MCMID[MCMIDINDEX+1];
    }
  },
  mounted() {
        const self = this;
        const Path = ' http://localhost:3006/productListSections';
        //const Path = './db-p.json';

        fetch(Path, {
          method:'get',
          mode: 'cors', // no-cors, cors, *same-origin
          //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          //credentials: 'same-origin', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json'
          },
          //redirect: 'follow', // manual, *follow, error
          //referrer: 'no-referrer', // no-referrer, *client
        })
        .then(function (response) {
          // handle success
          return response.json();
        })
        .then(function (dataObj) {
          self.slides = dataObj[0].products;
          //self.slides = dataObj.productListSections[0].products;
          //eslint-disable-next-line
          //console.log("ABID",dataObj);
          //eslint-disable-next-line
          console.log("ABID",dataObj[0].products);
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
