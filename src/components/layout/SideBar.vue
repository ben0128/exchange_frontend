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
          <li class="nav-item d-none d-sm-inline-block" v-for="item in sideItems" :key="item.id">
            <a :href="item.href" class="nav-link" :target=" item.id === 4 ? '_blank' : ''" :rel=" item.id === 4 ? 'noopener noreferrer' : ''" @click="handleClick(item.id)">
              <i :class="item.icon"></i>{{ item.text }}
            </a>
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

const sideItems = [
  {
    id: 1,
    href: "/user/tradingJournals/allJournals",
    icon: "fa-solid fa-book",
    text: "Trading Journal",
  },
  {
    id: 2,
    href: "/user/favoriteAssets",
    icon: "fa-solid fa-heart",
    text: "Favorite Assets",
  },
  {
    id: 3,
    href: "/user/userSetting",
    icon: "fa-solid fa-gear",
    text: "Settings",
  },
  {
    id: 4,
    href: "https://drive.google.com/file/d/1bJ9YflTXY-zIoifeSaJOUHkB27RcNe_m/view",
    icon: "fas fa-envelope",
    text: "Contact Me!!",
  },
  {
    id: 5,
    href: "#",
    icon: "fas fa-sign-out-alt",
    text: "Logout",
  }

]

const handleClick = (id) => {
  if (id === 5) {
    logout();
  }
}
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
