<template>
  <TheHeader
    v-if="!$route.meta.hideHeaderAndFooter"
    @showSidebar="hideSideBar"
    :style="headerStyle"
  />
  <SideBar v-if="!$route.meta.hideHeaderAndFooter && SideBarVisible" />
  <div class="content-container">
    <router-view :style="routerViewStyle"></router-view>
  </div>
  <TheFooter v-if="!$route.meta.hideHeaderAndFooter" />
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import SideBar from "./components/layout/SideBar.vue";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {
    TheHeader,
    TheFooter,
    SideBar,
  },
  setup() {
    const route = useRoute();
    const SideBarVisible = ref(true);
    function hideSideBar() {
      SideBarVisible.value = !SideBarVisible.value;
    }
    const headerStyle = computed(() => {
      return SideBarVisible.value ? {} : { marginLeft: "0px" };
    });

    const routerViewStyle = computed(() => {
      if (route.meta.hideHeaderAndFooter) {
        return { marginTop: "15vh", marginRight: "20vw" };
      }
      return SideBarVisible.value
        ? { margin: "20px 0px auto 270px" }
        : { margin: "20px 0px auto 20px" };
    });
    return {
      SideBarVisible,
      hideSideBar,
      headerStyle,
      routerViewStyle,
    };
  },
};
</script>

<style scoped>
.content-container {
  margin-top: 60px; /* 根据您的头部导航栏高度来调整 */
}
</style>
