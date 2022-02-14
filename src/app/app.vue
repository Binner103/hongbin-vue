<template>
  <h3>{{ name }}</h3>
  <input type="text" @change="onChangeContent" />
</template>

<script>
export default {
  data() {
    return {
      name: 'HONGBIN',
    };
  },

  methods: {
    onChangeContent(event) {
      console.log(event.target.value);
    },
  },
};
</script>

<style>
@import './styles/app.css';
</style>
