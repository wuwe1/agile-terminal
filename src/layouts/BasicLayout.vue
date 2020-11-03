<template>
  <v-app>
    <Header />
    <v-main style="background: #f2f3f8">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <v-footer app> &copy; wuwe1 </v-footer>
  </v-app>
</template>

<script>
import '@/styles/overrides.sass'
import Header from "@/layouts/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style>
</style>