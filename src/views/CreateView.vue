<template>
  <div>
      <div>
          <h1>New beer</h1>
          <hr /><br />
      </div>
      <div>
          
          <div class="create">
              <h4>Beer:</h4>
              <b-form-textarea class="form"
                               v-model="form.name"
                               placeholder="Fill in the name here">
              </b-form-textarea>
              <b-form-textarea class="form"
                               v-model="form.description"
                               placeholder="Fill in the description here"
                               rows="3"
                               max-rows="5">
              </b-form-textarea>
              <b-form-textarea class="form"
                               v-model="form.alcoholpercentage"
                               placeholder="Fill in the alcoholpercentage here"
                               rows="3"
                               max-rows="5">
              </b-form-textarea>
          </div>
          <b-button variant="primary" class="btn" type="submit" @click="onSubmit"><a @click="$router.go(-1)" class="nav">Submit</a></b-button>
      </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  Vue.use(VueRouter)

  Vue.use(VueAxios, axios, VueRouter)
  export default {
      name: 'CreateView',
      components: {
      },
      data() {
          return {
              form: {
                  name: '',
                  description: '',
                  alcoholpercentage: ''
              }
          }
      },
      methods: {
          onSubmit(event) {
              event.preventDefault()
              console.warn(this.form)
              axios({
                  method: 'post',
                  url: 'https://localhost:7064/api/beer',
                  data: {
                      "name": this.form.name,
                      "description": this.form.description,
                      "alcoholpercentage": this.form.alcoholpercentage
                  }
              })
          }
      }
  }
</script>

<style scoped>
  .create{
      margin-left: 50px;
      margin-bottom: 25px;
      margin-right: 50px;
  }

  .form{
      margin-top: 25px;
      margin-bottom: 25px;
  }

  .btn{
      margin-left: 10px;
  }

  .nav{
      color: white;
  }
</style>