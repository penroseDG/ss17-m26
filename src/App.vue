<template>
  <div>
    <h1>App Page</h1>
    <router-view v-slot="{ Component }">
      <Suspense>
        <!-- Hien thi cac component su dung co che lazy -->
        <template #default>
          <div>
            <component :is="Component"></component>
          </div>
        </template>

        <!-- Su dung hieu ung loading khi tai trang -->
         <template #fallback>
          <div>Loading...</div>
         </template>
      </Suspense>
    </router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>