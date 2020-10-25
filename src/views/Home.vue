<template>
  <div>
    <v-alert border="left" colored-border type="info" elevation="2">
      单击Tab, 并输入命令: /eth => 跳转至以太坊图表
    </v-alert>
    <CoinMarket />
  </div>
</template>

<script>
import CoinMarket from "@/components/CoinMarket";
export default {
  components: {
    CoinMarket,
  },
};
</script>

<style>
</style>