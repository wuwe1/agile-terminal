<template>
  <v-navigation-drawer id="drawer" :value="drawer" app width="240">
    <template #prepend>
      <DrawerPrepend />
    </template>

    <v-list nav dense>
      <v-list-item
        v-for="link in links"
        :key="link.name"
        @click="$router.push(link.path)"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ link.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import DrawerPrepend from "@/layouts/DrawerPrepend";
import { mapState } from "vuex";
export default {
  components: {
    DrawerPrepend,
  },
  data: () => ({
    links: [
      {
        name: "首页 HOME",
        icon: "mdi-home",
        path: "/",
      },
      {
        name: "资产 PORTFOLIO",
        icon: "mdi-wallet",
        path: "/portfolio",
      },
      {
        name: "比特币 BTC",
        icon: "mdi-bitcoin",
        path: "/btc",
      },
      {
        name: "以太坊 ETH",
        icon: "mdi-ethereum",
        path: "/eth",
      },
    ],
  }),
  computed: {
    ...mapState(["drawer"]),
  },
  methods: {
    onClickLink(_path) {
      const { path } = this.$route;
      if (path.replace(/\\/g, "") === _path.replace(/\\/g, "")) {
        return;
      }
      this.$router.push(_path);
    },
  },
};
</script>

<style>
</style>