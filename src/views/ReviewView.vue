<template>
    <div>
        <div>
            <h1>Rate this beer</h1>
            <hr /><br />
        </div>
        <div class="rate">
            <star-rating :max-rating="10" :star-size="50" :increment="1" :animate="true" v-model="form.rating"></star-rating>
            <div class="rate-comment">
                <h4>Comment:</h4>
                <b-form-textarea id="comment"
                                 v-model="form.comment"
                                 placeholder="Enter something..."
                                 rows="3"
                                 max-rows="5">
                </b-form-textarea>
            </div>
            <b-button variant="primary" class="btn" type="submit" @click="onSubmit"><a @click="$router.go(-1)" class="nav">Submit</a></b-button>
            <b-button variant="danger"><a @click="$router.go(-1)" class="nav">Go back</a></b-button>
        </div>
    </div>
</template>

<script>
    import StarRating from 'vue-star-rating'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    Vue.use(VueRouter)

    Vue.use(VueAxios, axios, VueRouter)
    export default {
        name: 'RatingView',
        components: {
            StarRating
        },
        data() {
            return {
                beerId: null,
                form: {
                    comment: '',
                    rating: null
                }
            }
        },
        mounted(){
            this.beerId = this.$route.params.id;
        },
        methods: {
            onSubmit(event) {
                event.preventDefault()
                console.warn(this.form)
                alert("Thanks for your feedback!")
                axios({
                    method: 'post',
                    url: 'https://localhost:7064/api/Review',
                    data: {
                        "beerId": this.beerId,
                        "comment": this.form.comment,
                        "rating": this.form.rating
                    }
                })
            }
        }
    }
</script>
<style scoped>
.rate{
    margin-left: 50px;
    margin-bottom: 25px;
}

.rate-comment{
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