<template>
    <div class="login">
      <h1>Trang Đăng Nhập</h1>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Tên đăng nhập" required />
        <input type="password" v-model="password" placeholder="Mật khẩu" required />
        <button type="submit">Đăng Nhập</button>
      </form>
    </div>
</template>
  
<script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Giả lập quá trình đăng nhập
        alert(`Đăng nhập thành công với tài khoản: ${this.username}`);
        this.$router.push('/dashboard'); // Chuyển hướng đến Dashboard sau khi đăng nhập
      },
    },
  };
</script>
  
<style scoped>
  .login {
    text-align: center;
    margin-top: 50px;
  }
</style>
  