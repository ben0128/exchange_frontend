<template>
  <div class="target-list">
    <favorite-target
      v-for="like in likes"
      :key="like._id"
      :targetName="like.targetName"
      :windex="like._id"
    ></favorite-target>
  </div>
</template>

<script setup>
import favoriteTarget from "../../components/charts/favoriteTarget.vue";

const likes = [
  { _id: 1, targetName: "AAPL" },
  { _id: 2, targetName: "GOOG" },
  { _id: 3, targetName: "AMZN" },
  { _id: 4, targetName: "TSLA" },
  { _id: 5, targetName: "MSFT" },
  { _id: 6, targetName: "FB" }
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