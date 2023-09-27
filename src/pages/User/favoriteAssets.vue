<template>
  <div class="target-list">
    <favorite-target
      v-for="like in likes"
      :key="like.id"
      :targetName="like.targetName"
      :windex="like.id"
    ></favorite-target>
  </div>
</template>

<script setup>
import favoriteTarget from "../../components/charts/favoriteTarget.vue";

const likes = [
  { id: 1, targetName: "AAPL" },
  { id: 2, targetName: "GOOG" },
  { id: 3, targetName: "AMZN" },
  { id: 4, targetName: "TSLA" },
  { id: 5, targetName: "MSFT" },
  { id: 6, targetName: "FB" }
];
</script>

<style scoped>
.target-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

favorite-target {
  margin-bottom: 1rem;
}
</style>