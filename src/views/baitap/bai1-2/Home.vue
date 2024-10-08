<template>
    <div>
      <h1>Home Page</h1>
      <p>Giao diện trang Home</p>
      <nav>
        <router-link to="/about">About</router-link> | 
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
</template>
  
<script>
  export default {
    name: 'Home',
  };
</script>
  