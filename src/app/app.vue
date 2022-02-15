<template>
  <h3>{{ name }}</h3>
  <router-link to="/"><strong>首页</strong></router-link>
  <router-link to="/about">关于</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      name: 'HONGBIN',
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
