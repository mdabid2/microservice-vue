<template>
  <div id="Carousel3d">
      <carousel-3d :display="3" :count="slides.length" :height="550"> 
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
import axios from 'axios';

export default {
  name:"Carousel3d",
  MCMID:null,
  data() {
    return{
      loading: true,
      errored: false,
      slides: []
    }
  },
  created() {
    function getMcmidValue(name, key){
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
    //this.MCMID = getMcmidValue("AMCV_128981DD59DFA4DA0A495DB2%40AdobeOrg","MCMID");
    this.MCMID = "32414923213151592182286548544145703727";
  },
  mounted() {
        const self = this;
        axios
        .get('http://localhost:3006/productListSections',{
          params: {
            mcmid: self.MCMID,
            viewType: "Carousel3d"
          },
          responseType: 'json'
        })
        .then(function (response) {
          // handle success
          self.slides = response.data[0].products;
          // eslint-disable-next-line
          console.log("ABID",response.data[0].products);
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log(error)
          this.errored = true
        })
        .finally(() => {
          this.loading = false; 
        });
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
