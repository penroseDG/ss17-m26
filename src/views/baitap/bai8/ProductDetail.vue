<template>
    <div v-if="product">
      <h2>Product Details</h2>
      <img :src="product.image" alt="product image" />
      <p><strong>Id:</strong> {{ product.id }}</p>
      <p><strong>ProductName:</strong> {{ product.name }}</p>
      <p><strong>Price:</strong> {{ product.price.toLocaleString('vi-VN') }} VND</p>
    </div>
    <p v-else>Không tìm thấy sản phẩm</p>
</template>
  
<script>
  export default {
    data() {
      return {
        product: null,
      };
    },
    created() {
      // Lấy id từ route params
      const productId = this.$route.params.id;
      const products = JSON.parse(localStorage.getItem("products"));
  
      // Tìm kiếm sản phẩm theo id
      this.product = products.find((p) => p.id === parseInt(productId));
    },
  };
</script>
  