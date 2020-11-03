<template>
  <div>
    <v-text-field
      outlined
      hide-details
      placeholder="输入钱包地址"
      @input="onInput"
      :loading="isCoinMarketsLoading"
    >
      <template #prepend-inner>
        <v-icon class="ml-1 mr-2"> mdi-wallet </v-icon>
      </template>
    </v-text-field>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card outlined>
          <v-card-title>
            总资产
            {{ items.reduce((acc, cur) => acc + cur.value, 0) }} $
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card outlined>
          <v-card-title>cool</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card outlined>
          <v-card-title>cool</v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-data-table
      :headers="headers"
      :items="items"
      :loading="isLoading"
      loading-text="加载中..."
    >
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";
import { tokens } from "@/data/tokens";
import { erc20abi } from "@/data/erc20abi";
export default {
  name: 'AccountBalance',
  data: () => ({
    isLoading: false,
    isCoinMarketsLoading: false,
    items: [],
    coins: {},
    headers: [
      { text: "资产", value: "name" },
      { text: "单价", value: "price" },
      { text: "余额", value: "balance" },
      { text: "价值", value: "value" },
    ],
  }),
  mounted() {
    this.isCoinMarketsLoading = true;
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${this.getCoingeckoIds()}&per_page=20&page=1&sparkline=false`
      )
      .then((res) => {
        res.data.forEach((coin) => {
          this.coins[this.getIdFromName(coin.name)] = {
            image: coin.image,
            current_price: coin.current_price,
          };
        });
        this.isCoinMarketsLoading = false;
      });
  },
  methods: {
    onInput(addr) {
      if (addr.length === 42) {
        this.isLoading = true;
        this.queryAllTokensBalance(addr);
      }
    },
    queryAllTokensBalance(addr) {
      this.items = [];
      this.$web3.eth.getBalance(addr).then((balance) => {
        balance = this.$web3.utils.fromWei(balance);
        const price = this.coins["weth"].current_price;
        const value = price * balance;
        this.items.push({
          balance,
          symbol: "ETH",
          name: "ethereum",
          price,
          value,
        });
        this.isLoading = false;
      });
      for (let token of tokens) {
        this.queryTokenBalance(
          addr,
          token.address,
          token.symbol,
          token.name,
          token.decimals
        );
      }
    },
    queryTokenBalance(addr, contractAddr, symbol, name, decimals) {
      this.isLoading = true;
      const contract = new this.$web3.eth.Contract(erc20abi, contractAddr);
      contract.methods
        .balanceOf(addr)
        .call()
        .then((balance) => {
          balance = balance / Math.pow(10, decimals);
          const price = this.coins[this.getIdFromName(name)].current_price || 0;
          const value = price * balance;
          this.items.push({
            symbol,
            balance,
            name,
            price,
            value,
          });
          this.isLoading = false;
        });
    },
    getCoingeckoIds() {
      return tokens.map((token) => this.getIdFromName(token.name)).join(",");
    },
    getIdFromName(name) {
      return name.toLowerCase().replace(/[\. ]/g, "-");
    },
  },
};
</script>

<style>
</style>