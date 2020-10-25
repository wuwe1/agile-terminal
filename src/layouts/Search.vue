<template>
  <v-text-field
    id="jump"
    ref="jump"
    v-model="model"
    :background-color="!isFocused ? 'grey lighten-3' : undefined"
    :placeholder="placeholder"
    @focus="() => (isFocused = true)"
    @blur="() => (isFocused = false)"
    @keyup.enter="onEnter"
    class="mx-2 mx-md-4"
    dense
    hide-details
    solo
    style="max-width: 450px"
  >
    <template #prepend-inner>
      <v-icon :color="!isFocused ? 'grey' : 'blue'" class="ml-1 mr-2">
        mdi-arrow-right
      </v-icon>
    </template>
  </v-text-field>
</template>

<script>
export default {
  data: () => ({
    isFocused: false,
    placeholder: "/eth",
    model: "",
  }),
  methods: {
    onEnter(e) {
      const { path } = this.$route;
      if (path.replace(/\\/g, "") === this.model.replace(/\\/g, "")) {
        return;
      }
      this.$router.push(this.model);
    },
  },
};
</script>

<style>
</style>