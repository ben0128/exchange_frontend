<template>
  <TheHeader
    v-if="!$route.meta.hideHeaderAndFooter"
    @showSidebar="hideSideBar"
    :style="headerStyle "
  />
  <SideBar v-if="!$route.meta.hideHeaderAndFooter && SideBarVisible" />
  <router-view :style="routerViewStyle"></router-view>
  <TheFooter v-if="!$route.meta.hideHeaderAndFooter" />
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import SideBar from "./components/layout/SideBar.vue";
import { computed, ref } from "vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    SideBar,
  },
  setup() {
    const SideBarVisible = ref(true);
    function hideSideBar() {
      SideBarVisible.value = !SideBarVisible.value;
    }
    const headerStyle = computed(() => {
      return SideBarVisible.value ? {} : { marginLeft: "0px" };
    })

    const routerViewStyle = computed(() => {
      return SideBarVisible.value ? { margin: "20px 0px auto 270px" } : { margin: "20px 0px auto 20px" };
    });
    return {
      SideBarVisible,
      hideSideBar,
      headerStyle,
      routerViewStyle
    };
  },
};
</script>

<style scoped>

</style>
