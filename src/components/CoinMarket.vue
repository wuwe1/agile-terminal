<template>
  <div class="py-4">
    <v-data-table
      :headers="headers"
      :items="coins"
      :items-per-page="10"
      :loading="isLoading"
      class="elevation-1"
    >
      <template v-slot:item.iconName="{ item }">
          <img height="16px" :src="item.iconName.split(' ')[0]">
        {{item.iconName.split(' ')[1]}}
      </template>
      <template v-slot:item.market_cap="{ item }">
          {{
            item.market_cap.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          }}
      </template>
      <template v-slot:item.pcp1h="{ item }">
        <v-chip
          :color="getColor(item.pcp1h)"
          dark
        >
          {{ item.pcp1h }}%
        </v-chip>
      </template>
      <template v-slot:item.pcp24h="{ item }">
        <v-chip
          :color="getColor(item.pcp24h)"
          dark
        >
          {{ item.pcp24h }}%
        </v-chip>
      </template>
      <template v-slot:item.pcp7d="{ item }">
        <v-chip
          :color="getColor(item.pcp7d)"
          dark
        >
          {{ item.pcp7d }}%
        </v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";
const COINS_MARKETS_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h,24h,7d";
export default {
  data: () => ({
    coins: [],
    isLoading: true,
    headers: [
      { text: "名称", value: "iconName" },
      { text: "现价", value: "current_price" },
      { text: "市值", value: "market_cap" },
      { text: "1h", value: "pcp1h" },
      { text: "24h", value: "pcp24h" },
      { text: "7d", value: "pcp7d" },
    ],
  }),
  mounted() {
    this.getCoins();
  },
  methods: {
    getColor(percent) {
      if (percent > 0) {
        return "green";
      } else if (percent < 0) {
        return "red";
      } else {
        return "grey";
      }
    },
    getCoins() {
      this.isLoading = true;
      axios.get(COINS_MARKETS_URL).then((res) => {
        const { data } = res;
        for (let i = 0; i < data.length; i++) {
          let {
            price_change_percentage_1h_in_currency,
            price_change_percentage_24h_in_currency,
            price_change_percentage_7d_in_currency,
            image,
            name
          } = data[i];
          const pcp1h = price_change_percentage_1h_in_currency.toFixed(2);
          const pcp24h = price_change_percentage_24h_in_currency.toFixed(2);
          const pcp7d = price_change_percentage_7d_in_currency.toFixed(2);
          data[i] = {
            ...data[i],
            pcp1h,
            pcp24h,
            pcp7d,
            iconName: `${image} ${name}`
          };
        }
        this.coins = data;
        this.isLoading = false;
      });
    },
  },
};
</script>

<style>
</style>