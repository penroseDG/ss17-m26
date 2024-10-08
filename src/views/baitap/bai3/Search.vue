<template>
    <div>
      <h1>Tìm kiếm</h1>
      <input
        type="text"
        v-model="query"
        placeholder="Nhập từ khóa tìm kiếm"
      />
      <button @click="search">Tìm kiếm</button>
  
      <div v-if="searchedQuery">
        <h2>Kết quả tìm kiếm cho: "{{ searchedQuery }}"</h2>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'Search',
    data() {
      return {
        query: '',
      };
    },
    computed: {
      searchedQuery() {
        return this.$route.query.q;
      },
    },
    methods: {
      search() {
        // Điều hướng đến đường dẫn với query parameter
        this.$router.push({ path: '/search', query: { q: this.query } });
      },
    },
  };
</script>