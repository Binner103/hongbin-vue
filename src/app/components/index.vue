<template>
  <h1 @click="onClickText">hongbin.net</h1>
</template>

<script>
export default {
  methods: {
    onClickText() {
      this.$router.push('/about');
    }
  },
}
</script>