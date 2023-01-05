<template>
    <div>
        <div>
            <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-navbar-brand><router-link to="/"><img src="./logo.png" class="logo" alt=""/></router-link></b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item class="first-link"><router-link class="nav-link" to="/">Home</router-link></b-nav-item>
                        <b-nav-item class="space"><router-link class="nav-link" to="/create">New Beer</router-link></b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <!-- <b-navbar-nav class="ml-auto right-side">
                        <b-navbar-nav>
                            <div v-if="!$auth.loading">
                                show login when not authenticated
                                <b-button v-if="!$auth.isAuthenticated" variant="secondary"><a @click="login"><strong>Sign in</strong></a></b-button>
                                show logout when authenticated
                                <b-button v-if="$auth.isAuthenticated" variant="secondary"> <a @click="logout"><strong>Log out</strong></a></b-button>
                            </div>
                        </b-navbar-nav>
                    </b-navbar-nav> -->
                </b-collapse>
            </b-navbar>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { BootstrapVue } from 'bootstrap-vue';

    Vue.use(BootstrapVue)

    export default {
        name: 'NavView',
        methods: {
            // Log the user in
            login() {
                this.$auth.loginWithRedirect();
            },
            // Log the user out
            logout() {
                this.$auth.logout({
                    returnTo: window.location.origin
                });
            }
        }
    }
</script>

<style>
    .space {
        margin-left: 30px;
    }

    .nav-link {
        color: white;
        display: inline-block;
        position: relative;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.15em;
    }

        .nav-link :hover{
            text-decoration: underline;
            text-decoration-color: yellow;
        }

        .router-link :active{
            color: yellow;
        }

    .logo {
        margin-left: 40px;
        max-width: 150px;
        position: absolute;
        top: -10px;
        left: 8px;
    }

    .first-link {
        margin-left: 200px;
    }

    .right-side{
        display: flex;
        justify-content: flex-end;
        width: 50%;
        padding: 0;
        margin-right: 100px;
    }

    @media only screen and (max-width: 1000px) {
        .logo {
            max-width: 100px;
            position: absolute;
            top: -4px;
            left: 8px;
            margin-left: 5px;
        }

        .first-link {
            margin-top: 60px;
            margin-left: 30px;
        }

        .right-side {
            display: flex;
            justify-content: flex-end;
            width: 50%;
            padding: 0;
            margin-left: 100px;
        }
    }
</style>
