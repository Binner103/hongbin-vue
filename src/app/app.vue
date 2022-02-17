<template>
  <h3 @click="name = 'YUXUAN'">{{ name }}</h3>
</template>

<script>
export default {
  setup() {
    const name = 'HONGBIN'

    return {
      name,
    }
  }
};
</script>

<style>
@import './styles/app.css';
</style>
