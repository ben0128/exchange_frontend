<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <div>
      <a href="#" class="brand-link">
        <img :src="Logo" alt="" class="sidebar-logo" style="opacity: 0.8" />
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
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">ACCOUNT OVERVIEW</h3>
              <div class="card-tools">
                <button
                  type="button"
                  class="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i class="right fas fa-angle-down"></i>
                </button>
              </div>
            </div>
            <div class="card-body">
              <li class="nav-item account">
                <a href="/user/realAccount" class="nav-link" id="real">
                  <i class="fa-solid fa-brazilian-real-sign"></i>
                  <p class="account-desc">Real Account</p>
                </a>
              </li>
              <p>_____________________________</p>
              <li class="nav-item account">
                <a href="/user/virtualAccount" class="nav-link">
                  <i class="fa-solid fa-vr-cardboard fa-sm"></i>
                  <p class="account-desc">Virtual Account</p>
                </a>
              </li>
            </div>
          </div>
          <li class="nav-item d-none d-sm-inline-block">
            <a href="/user/tradingJournal" class="nav-link"
              ><i class="fa-solid fa-book"></i>Trading Journal</a
            >
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <a href="/user/favoriteAssets" class="nav-link"
              ><i class="fa-solid fa-heart"></i>Favorite Assets</a
            >
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <a href="/user/userSetting" class="nav-link"
              ><i class="fa-solid fa-gear"></i>Settings</a
            >
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <a
              href="https://ben0128.github.io/cv_and_sideprojects/"
              target="_blank"
              rel="noopener noreferrer"
              class="nav-link"
              ><span class="fas fa-envelope"></span>Contact Me!!</a
            >
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <a href="#" class="nav-link" @click="logout"
              ><i class="fas fa-sign-out-alt"></i>Logout</a
            >
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script setup>
import Logo from "../../assets/logo.jpg";
import { useStore } from "vuex";
const store = useStore();

const logout = () => {
  store.commit("clearToken");
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
.fa-vr-cardboard,
.fa-book,
.fa-gear,
.fa-heart,
.fa-sign-out-alt {
  margin-right: 12px;
  margin-left: 6px;
}

.card-header {
  background-color: #504c4c;
  color: #fff;
}

.card-body {
  background-color: #504c4c;
  color: #fff;
}

.account .nav-link {
  padding: 0px;
  margin-bottom: 20px;
  border-top-color: #d61c1c;
}

.card-body {
  padding-bottom: 0px;
}

.account-desc {
  font-size: 1.1rem;
}

#real {
  margin: 0px 0px;
}
</style>
