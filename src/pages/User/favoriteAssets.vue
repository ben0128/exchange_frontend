<template>
  <div class="target-list">
    <favorite-target
      v-for="like in likes"
      :key="like._id"
      :targetName="like.targetName"
      :wIndex="like._id"
    ></favorite-target>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import favoriteTarget from "../../components/charts/favoriteTarget.vue";
import { useStore } from "vuex";

const store = useStore();
const likes = ref([]);
async function getAllLikes() {
  const res = await store.dispatch("like/getAllLikes");
  if (res.success) {
    likes.value = store.getters["like/getAllLikes"];
    console.log(likes.value);
  } else {
    alert("取得收藏清單失敗");
  }
}

onMounted(async () => {
  await getAllLikes();
});
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
