<template>
  <div
    class="text-base font-medium"
    id="app"
  >
    <header>
      <div class="flex w-[95%] py-5 mx-auto border-b-2">
        <div class="text-lg font-medium">
          <span class="mr-2.5">
            <router-link to="/">Home</router-link>
          </span>
          <span>
            <router-link to="/todos">Todos</router-link>
          </span>
        </div>
      </div>
    </header>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Epilogue, sans-serif;
}
</style>
