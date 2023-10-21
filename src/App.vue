<script setup lang="ts"></script>

<template>
  <main>
    <section class="section">
      <div class="container">
        <h1><router-link to="/">Frontenders UI KIT</router-link></h1>
      </div>
    </section>

    <router-view></router-view>
  </main>
</template>

<style scoped>
h1 {
  font-size: 2.4rem;
}
</style>
