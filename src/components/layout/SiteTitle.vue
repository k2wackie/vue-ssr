<template>
  <v-btn to="/" text plain class="px-0, text-none text-h6">
    {{ title }}
  </v-btn>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SiteTitle",
  computed: {
    // title() {
    //   return this.$store.state.config.title;
    // },
    ...mapState({
      title: (state) => state.config.title,
    }),
  },
};
</script>

<style></style>
