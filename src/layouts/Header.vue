<template>
  <div>
    <v-app-bar color="white" class="v-bar--underline" flat app>
      <v-app-bar-nav-icon @click="updateDrawer(!drawer)"></v-app-bar-nav-icon>

      <Search/>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <Drawer />
  </div>
</template>

<script>
import Drawer from "@/layouts/Drawer";
import Search from "@/layouts/Search";
import { mapMutations, mapState } from "vuex";
export default {
  components: {
    Drawer,
    Search
  },
  data: () => ({
  }),
  computed:{
    ...mapState(['drawer'])
  },
  methods: {
    ...mapMutations(["updateDrawer"]),
  },
};
</script>

<style>
</style>