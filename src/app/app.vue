<template>
  <h3 @click="changeName">{{ name }}</h3>
</template>

<script>
import {reactive, ref, toRefs, onMounted, watch} from 'vue';

export default {
  setup() {
    const name = ref('HONGBIN')

    const changeName = () => {
      name.value = '宏彬'
    }

    onMounted(() => {
      console.log('mounted')
    })

    watch(name, (newName, oldName) => {
      console.log(newName, oldName);
    })

    return {
      name,
      changeName,
    }
  }
};
</script>

<style>
@import './styles/app.css';
</style>
