<template>
  <h3 @click="changeName">{{ nameEmoji }}</h3>
</template>

<script>
import {reactive, ref, toRefs, onMounted, watch, computed} from 'vue';

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

    const nameEmoji = computed(() => `${name.value} 🤣`)

    return {
      name,
      changeName,
      nameEmoji
    }
  }
};
</script>

<style>
@import './styles/app.css';
</style>
