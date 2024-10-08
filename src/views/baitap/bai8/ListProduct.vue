<template>
    <div>
      <h1>List product</h1>
      <input v-model="searchQuery" type="text" placeholder="Tìm kiếm theo tên" />
      <button @click="searchProduct">Tìm kiếm</button>
  
      <div v-if="filteredProducts.length > 0">
        <div v-for="product in filteredProducts" :key="product.id" class="product">
          <img :src="product.image" alt="product image" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.price.toLocaleString('vi-VN') }} VND</p>
          <router-link :to="`/product-detail/${product.id}`">
            <button>Xem chi tiết</button>
          </router-link>
        </div>
      </div>
      <p v-else>Không có sản phẩm nào</p>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        products: [],
        searchQuery: "",
      };
    },
    computed: {
      filteredProducts() {
        if (this.searchQuery) {
          return this.products.filter((product) =>
            product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        }
        return this.products;
      },
    },
    created() {
      // Khởi tạo dữ liệu sản phẩm và lưu vào localStorage
      const products = [
        { id: 1, name: "Điện thoại iPhone 15 Pro", price: 30000000, image: "iphone.jpg" },
        { id: 2, name: "Điện thoại OPPO Reno11 5G", price: 10600000, image: "oppo.jpg" },
        { id: 3, name: "Điện thoại vivo Y17s", price: 3300000, image: "vivo.jpg" },
        { id: 4, name: "Điện thoại Nokia 8210 4G", price: 3300000, image: "nokia.jpg" },
      ];
      localStorage.setItem("products", JSON.stringify(products));
      this.products = JSON.parse(localStorage.getItem("products"));
    },
    methods: {
      searchProduct() {
        // Thay đổi URL khi tìm kiếm
        this.$router.push({ path: "/list-product", query: { q: this.searchQuery } });
      },
    },
    watch: {
      // Theo dõi query params để cập nhật danh sách sản phẩm
      '$route.query.q': function (newQuery) {
        this.searchQuery = newQuery || '';
      }
    }
  };
</script>
  
<style>
  .product {
    display: inline-block;
    width: 200px;
    margin: 10px;
  }
</style>
  