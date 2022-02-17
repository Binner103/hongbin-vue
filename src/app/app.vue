<template>
  <h3 @click="name = 'YUXUAN'">{{ name }}</h3>
  <h4 @click="username = '玉旋'">{{username}}</h4>
</template>

<script>
import {reactive, ref, toRefs} from 'vue';

export default {
  setup() {
    const name = ref('HONGBIN')

    const user = reactive({
      username: '宏彬'
    });

    // const {username} = toRefs(user) ;

    console.log(user);

    console.log(name.value);

    return {
      name,
      ...toRefs(user),
    }
  }
};
</script>

<style>
@import './styles/app.css';
</style>
