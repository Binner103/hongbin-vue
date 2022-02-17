<template>
  <h3 @click="name = 'YUXUAN'">{{ name }}</h3>
</template>

<script>
export default {
  data() {
    return {
      name: 'HONGBIN',
    };
  },

  created() {
    console.log(this.$data);
  }
};
</script>

<style>
@import './styles/app.css';
</style>
