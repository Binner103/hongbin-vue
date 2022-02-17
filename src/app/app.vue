<template>
  <h3 @click="name = 'YUXUAN'">{{ name }}</h3>
  <h4 @click="user.name = '玉旋'">{{user.name}}</h4>
</template>

<script>
import {reactive, ref} from 'vue';

export default {
  setup() {
    const name = ref('HONGBIN')

    const user = reactive({
      name: '宏彬'
    });

    console.log(user);

    console.log(name.value);

    return {
      name,
      user
    }
  }
};
</script>

<style>
@import './styles/app.css';
</style>
