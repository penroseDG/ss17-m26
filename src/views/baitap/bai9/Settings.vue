<template>
    <div class="settings">
      <h1>Cập nhật thông tin</h1>
      <form @submit.prevent="saveChanges">
        <div>
          <label for="name">Họ và tên</label>
          <input type="text" id="name" v-model="formData.name" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" />
        </div>
        <button type="submit">Lưu</button>
      </form>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        formData: {
          name: "",
          email: "",
        },
        isSaved: false, // Biến để kiểm tra xem dữ liệu đã được lưu hay chưa
        initialData: null, // Dữ liệu ban đầu của form
      };
    },
    methods: {
      saveChanges() {
        // Thực hiện lưu thông tin
        this.isSaved = true;
        this.initialData = { ...this.formData }; // Cập nhật dữ liệu ban đầu
        alert("Thông tin đã được lưu!");
      },
    },
    beforeRouteLeave(to, from, next) {
      // Kiểm tra xem dữ liệu có được thay đổi mà chưa lưu không
      if (
        !this.isSaved &&
        (this.formData.name !== this.initialData?.name || this.formData.email !== this.initialData?.email)
      ) {
        const answer = window.confirm("Dữ liệu chưa được lưu. Bạn có chắc chắn muốn rời khỏi trang không?");
        if (answer) {
          next(); // Cho phép điều hướng
        } else {
          next(false); // Giữ nguyên trang
        }
      } else {
        next(); // Không có thay đổi, cho phép điều hướng
      }
    },
    created() {
      // Giả lập dữ liệu ban đầu
      this.initialData = {
        name: "Nguyễn Văn A",
        email: "nguyenvana@example.com",
      };
      this.formData = { ...this.initialData }; // Đặt dữ liệu form ban đầu
    },
  };
</script>
  
<style scoped>
  .settings {
    max-width: 400px;
    margin: 0 auto;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  form div {
    margin-bottom: 15px;
  }
  button {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  button:hover {
    background-color: #0056b3;
  }
</style>
  