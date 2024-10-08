<template>
    <div class="post-detail">
      <h1>Chi Tiết Bài Viết</h1>
      <div v-if="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
      </div>
      <div v-else>
        <p>Bài viết không tồn tại.</p>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'PostDetail',
    data() {
      return {
        posts: [
          { id: 1, title: 'Bài viết 1', content: 'Nội dung bài viết 1.' },
          { id: 2, title: 'Bài viết 2', content: 'Nội dung bài viết 2.' },
          { id: 3, title: 'Bài viết 3', content: 'Nội dung bài viết 3.' },
        ],
      };
    },
    computed: {
      post() {
        const postId = parseInt(this.$route.params.id);
        return this.posts.find((post) => post.id === postId) || null;
      },
    },
  };
</script>
  
<style scoped>
  .post-detail {
    padding: 20px;
  }
</style>
  