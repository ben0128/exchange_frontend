<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <div>
      <a href="#" class="brand-link">
        <img
          :src="logo"
          alt=""
          class="sidebar-logo"
          style="opacity: 0.8"
        />
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
            <a href="#" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Starter Pages
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link active">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Active Page</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Inactive Page</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Simple Link
                <span class="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <a href="https://banwind.github.io/cv_and_sideprojects/" class="nav-link">Contact Me!!</a>
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

export default {
  setup() {
    const logo = Logo;
    return {
      logo,
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


</style>