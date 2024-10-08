<template>
    <div class="admin">
      <h1>Trang Quản Trị</h1>
      <nav>
        <ul>
          <li>
            <router-link to="/admin/manager-user">Quản lý Người Dùng</router-link>
          </li>
          <li>
            <router-link to="/admin/manager-product">Quản lý Sản Phẩm</router-link>
          </li>
          <li>
            <router-link to="/admin/settings">Cài Đặt</router-link>
          </li>
        </ul>
      </nav>
      <router-view /> <!-- Hiển thị nội dung của các route con -->
    </div>
</template>
  
<script>
  export default {
    name: 'Admin',
  };
</script>
  
<style scoped>
  .admin {
    padding: 20px;
  }
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  nav li {
    display: inline;
    margin-right: 15px;
  }
</style>
  