<template>
  <h3>{{ name }}</h3>
  <input type="text" @keyup="onKeyupInput">
</template>

<script>
export default {
  data() {
    return {
      name: 'HONGBIN',
    };
  },

  methods: {
    onKeyupInput(event) {
      console.log(event);
    }
  }
};
</script>

<style>
@import './styles/app.css';
</style>
