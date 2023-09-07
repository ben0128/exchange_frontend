<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <div>
      <a href="#" class="brand-link">
        <img :src="logo" alt="" class="sidebar-logo" style="opacity: 0.8" />
      </a>
    </div>
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
        >
          <li class="nav-item menu-open">
            <a href="#" class="nav-link active" @click="openMenu">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                ACCOUNT OVERVIEW
                <i class="right fas fa-angle-left" v-if="!isMenuOpen"></i>
                <i class="right fas fa-angle-right" v-else></i>
              </p>
            </a>
            <ul class="nav nav-treeview" v-if="isMenuOpen">
              <li class="nav-item">
                
                <a href="/user/realAccount" class="nav-link">
                  <i class="fa-solid fa-brazilian-real-sign fa-shake"></i><p>Real Account</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/user/virtualAccount" class="nav-link">
                  <i class="fa-solid fa-vr-cardboard fa-shake fa-sm"></i><p>Virtual Account</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <a
              href="https://banwind.github.io/cv_and_sideprojects/"
              target="_blank"
              rel="noopener noreferrer"
              class="nav-link"
              ><span class="fas fa-envelope"></span>Contact Me!!</a
            >
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import Logo from "../../assets/logo.jpg";
import { ref } from "vue";

export default {
  setup() {
    const logo = Logo;
    const isMenuOpen = ref(false);
    function openMenu() {
      isMenuOpen.value = !isMenuOpen.value;
    }
    return {
      logo,
      isMenuOpen,
      openMenu,
    };
  },
};
</script>

<style scoped>
.sidebar-logo {
  width: 100%;
  object-fit: contain;
  /* 左右置中，靠上面 */
}

.brand-link {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fa-envelope,
.fa-brazilian-real-sign,
.fa-vr-cardboard {
  margin-right: 12px;
  margin-left: 6px
}

</style>
