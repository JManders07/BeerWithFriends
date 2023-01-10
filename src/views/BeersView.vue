<template>
  <div class="home">
    <b-card-group style="margin: 80px;">
      <b-card
        v-for="beer in beerList"
        :key="beer.amount"
        :title="beer.name"
        img-src="https://scheeperscatering.nl/wp-content/uploads/2019/03/bier-880x622.jpg"
        img-alt="Image"
        img-top
        tag="beer"
        style="max-width: 18rem; margin: 40px"
        class="mb-2"
        align="center"
            >
        <b-card-text>
          {{ beer.description }}
        </b-card-text>
        <b-button variant="warning" name="info"><router-link :to="'/beer/' + `${beer.id}`">More info</router-link></b-button>
        <b-button variant="warning"><router-link :to="'/review/' + `${beer.id}`">Give review</router-link></b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";
import Vue from "vue";

Vue.use(VueAxios, axios);

export default {
  name: "BeersView",
  components: {},
  data() {
    return {
      beerList: null,
    };
  },
  mounted() {
    axios.get("https://localhost:7064/api/Beer/Beers").then((response) => {
      this.beerList = response.data;
      console.warn(this.beerList);
    });
  },
  
}
</script>
