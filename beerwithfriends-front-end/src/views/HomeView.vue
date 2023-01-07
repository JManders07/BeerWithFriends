<template>
  <div>
    <div class="w3-container" id="about">
      <div class="w3-content" style="max-width:1200px, position: relative;">
        <h4 class="w3-center w3-padding-64">
          <span class="w3-tag w3-wide">ABOUT BEER WITH FRIENDS</span>
        </h4>
        <p>
          Beer With Friends is a website for real beerlovers. Ofcourse you drink
          a lot of beer and you can't remember from all the beers if you liked
          them of not.
          <br />
          On this site you can rate a beer and leave a comment so you can see
          which beer you liked and which beer you absolutely never want to drink
          again.
        </p>
        <div class="w3-panel w3-leftbar w3-light-grey">
          <p>
            <i
              >"Beer is the ultimate proof that God loves all the people and
              wants to see them happy." Benjamin Franklin</i
            >
          </p>
          <p>Owner: Jelle Manders</p>
        </div>
        <img
          src="../components/HomeImage2.jpg"
          style="width: 100%; max-width: 1000px"
          class="w3-margin-top"
        />
        <p><strong>No 18 no alcohol</strong></p>
      </div>
    </div>
  </div>
</template>

<style>
body,
html {
  height: 100%;
  font-family: "Inconsolata", sans-serif;
}
</style>

<script>
import axios from "axios";
import VueAxios from "vue-axios";
import Vue from "vue";

Vue.use(VueAxios, axios);

export default {
  name: "HomeView",
  components: {},
};
</script>
