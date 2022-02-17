<template>
  <h3 @click="name = 'YUXUAN'">{{ name }}</h3>
</template>

<script>
import {ref} from 'vue';

export default {
  setup() {
    const name = ref('HONGBIN')

    console.log(name.value);

    return {
      name,
    }
  }
};
</script>

<style>
@import './styles/app.css';
</style>
