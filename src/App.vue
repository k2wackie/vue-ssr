<template>
  <v-app>
    <v-app-bar app color="primary" dark hide-on-scroll>
      <site-title />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <site-footer />
    <vue-progress-bar></vue-progress-bar>
  </v-app>
</template>

<script>
import SiteFooter from "./components/layout/SiteFooter.vue";
import SiteTitle from "./components/layout/SiteTitle.vue";
export default {
  components: { SiteTitle, SiteFooter },
  name: "App",

  data: () => ({
    //
  }),
  beforeCreate() {
    // console.log("APP.vue beforeCreate");
  },
  created() {
    // console.log("APP.vue created ssrContext : ", this.$ssrContext);
  },
  beforeMount() {
    // console.log("APP.vue beforeMount");
  },
  mounted() {
    // console.log("APP.vue mounted");
  },
  serverPrefetch() {
    // console.log("APP.vue serverPrefetch");
    return new Promise((resolve, reject) => {
      // console.log("APP.vue serverPrefetch Promise");
      resolve();
    });
  },
};
</script>
