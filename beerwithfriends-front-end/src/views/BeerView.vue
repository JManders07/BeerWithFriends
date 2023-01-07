<template>
    <div>
      <div class="w3-container" id="about">
        <div class="w3-content" style="max-width:1200px, position: relative;">
          <h4 class="w3-center w3-padding-64">
            <span class="w3-tag w3-wide">ABOUT BEER WITH FRIENDS</span>
          </h4>
          <p>
            {{ beer.name }}
            {{ beer.description }}
            {{ beer.alcoholpercentage }}
            {{ beer.id }}
            
          </p>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";
import Vue from "vue";

Vue.use(VueAxios, axios);

export default {
    
  name: "BeerView",
  components: {},
  data() {
    return {
      beer : null,
      beerid : null,
    };
  },
  mounted() {
    
    this.beerid = this.$route.params.id;
    axios
    .get('https://localhost:7064/api/Beer/Beer/' + this.beerid).then((response) => {
      this.beer = response.data;
      console.warn(this.beer);
    });
  },
};
</script>