<template>
  <div>
    <v-app-bar color="white" class="v-bar--underline" flat app>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

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
import { mapMutations } from "vuex";
export default {
  components: {
    Drawer,
    Search
  },
  data: () => ({
    drawer: false,
    
  }),
  methods: {
    ...mapMutations(["toggleDrawer"]),
  },
};
</script>

<style>
</style>