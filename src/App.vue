<template>
  <router-view />
</template>

<script>
import metadata from "@/data/metadata";
import { genAppMetaInfo } from "@/util/metadata";
export default {
  name: "App",
  metaInfo() {
    const suffix = this.name !== "Home" ? " — Agile terminal" : "";

    return {
      ...genAppMetaInfo(metadata),
      titleTemplate: (chunk) => `${chunk}${suffix}`,
    };
  },
};
</script>

<style>
</style>