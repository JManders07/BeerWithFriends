<template>
  <div>
    <div>
      <h1>Edit {{this.currentName}}</h1>
      <hr />
      <br />
    </div>
    <div>
      <div>
        <p>Current name: {{ this.currentName }}</p>
        <b-form-textarea
          v-model="beer.name"
          id="name"
        >
         </b-form-textarea>
         <p>Current description: {{ this.currentDescription }}</p>
        <b-form-textarea
          v-model="beer.description"
          rows="3"
          max-rows="5"
          id="description"
        >
        
        </b-form-textarea>
        <p>Current Alcohol Percentage: {{ this.currentAlcoholPercentage }}%</p>
        <b-form-textarea
          v-model="beer.alcoholPercentage"
          rows="3"
          max-rows="5"
          id="alcoholPercentage"
        >
        </b-form-textarea> 
      </div>
      <b-button variant="primary" class="btn" type="submit" @click="onSubmit(); $router.push({ path:`/beers`})"
        >Submit</b-button
      >
    </div> 
  </div>
</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

Vue.use(VueAxios, axios, VueRouter);
export default {
  name: "CreateView",
  components: {},
  data() {
    return {
        currentName: "",
        currentDescription: "",
        currentAlcoholPercentage:"",
        beer: null,
        beerid: null,
      form: {
        name: null,
        description: null,
        alcoholPercentage: null,
      },
    };
  },
  mounted() {
    this.beerid = this.$route.params.id;
    axios
      .get("https://localhost:7064/api/beer/" + this.beerid)
      .then((response) => {
        this.beer = response.data;
        this.currentName = response.data.name
        this.currentDescription = response.data.description
        this.currentAlcoholPercentage = response.data.alcoholPercentage
        console.warn(this.beer);
      });
  },
  methods: {
    onSubmit() {
      console.warn(this.form);
      axios({
        method: "put",
        url: "https://localhost:7064/api/beer/" + this.beerid,
        data: {
          "name": this.beer.name,
          "description": this.beer.description,
          "alcoholPercentage": this.beer.alcoholPercentage,
        },
      });
    },
  },

  
};
</script>

<style scoped>
.rate {
  margin-left: 50px;
  margin-bottom: 25px;
}

.rate-comment {
  margin-top: 25px;
  margin-bottom: 25px;
}

.btn {
  margin-left: 10px;
}

.nav {
  color: white;
}
</style>
