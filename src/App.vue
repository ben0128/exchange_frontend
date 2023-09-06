<template>
    <TheHeader v-if="!$route.meta.hideHeaderAndFooter" />
    <SideBar v-if="!$route.meta.hideHeaderAndFooter" />
    <router-view></router-view>
    
    <TheFooter v-if="!$route.meta.hideHeaderAndFooter" />
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import SideBar from "./components/layout/SideBar.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    SideBar
  }
}
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
